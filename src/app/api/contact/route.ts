import net from "node:net";
import tls from "node:tls";

import { contactEmail } from "@/content/contact";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  message?: string;
};

type SmtpSocket = net.Socket | tls.TLSSocket;

const recipientEmail =
  process.env.CONTACT_TO_EMAIL || contactEmail;

function cleanHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function encodeSubject(value: string) {
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function dotStuff(value: string) {
  return value.replace(/\r?\n/g, "\r\n").replace(/^\./gm, "..");
}

function readSmtpResponse(socket: SmtpSocket): Promise<string> {
  return new Promise((resolve, reject) => {
    let buffer = "";

    const onData = (chunk: Buffer) => {
      buffer += chunk.toString("utf8");
      const lines = buffer.split(/\r?\n/).filter(Boolean);
      const lastLine = lines.at(-1);

      if (lastLine && /^\d{3} /.test(lastLine)) {
        cleanup();
        resolve(buffer);
      }
    };

    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };

    const cleanup = () => {
      socket.off("data", onData);
      socket.off("error", onError);
    };

    socket.on("data", onData);
    socket.on("error", onError);
  });
}

async function sendCommand(socket: SmtpSocket, command: string, expected: number[]) {
  socket.write(`${command}\r\n`);
  const response = await readSmtpResponse(socket);
  const code = Number(response.slice(0, 3));

  if (!expected.includes(code)) {
    throw new Error(`SMTP command failed: ${command} -> ${response.trim()}`);
  }

  return response;
}

async function connectSmtp() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE !== "false";

  if (!host || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error("SMTP environment variables are missing.");
  }

  const socket: SmtpSocket = secure
    ? tls.connect({ host, port, servername: host })
    : net.connect({ host, port });

  await new Promise<void>((resolve, reject) => {
    socket.once("connect", resolve);
    socket.once("secureConnect", resolve);
    socket.once("error", reject);
  });

  const greeting = await readSmtpResponse(socket);
  if (!greeting.startsWith("220")) {
    throw new Error(`SMTP greeting failed: ${greeting.trim()}`);
  }

  return socket;
}

async function sendContactEmail(payload: Required<ContactPayload>) {
  const smtpUser = process.env.SMTP_USER!;
  const smtpFrom = process.env.SMTP_FROM || smtpUser;
  const socket = await connectSmtp();

  const subject = `Yeni web sitesi mesajı: ${payload.name}`;
  const body = [
    "Yeni iletişim formu mesajı alındı.",
    "",
    `Ad Soyad: ${payload.name}`,
    `E-posta: ${payload.email}`,
    `Şirket / Kurum: ${payload.company || "-"}`,
    `Proje Türü: ${payload.projectType || "-"}`,
    "",
    "Mesaj:",
    payload.message,
  ].join("\n");

  const email = [
    `From: Emy Software Studios <${cleanHeader(smtpFrom)}>`,
    `To: ${recipientEmail}`,
    `Reply-To: ${cleanHeader(payload.email)}`,
    `Subject: ${encodeSubject(subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    body,
  ].join("\r\n");

  try {
    await sendCommand(socket, `EHLO ${process.env.SMTP_EHLO_DOMAIN || "emregundogdu.net"}`, [250]);
    await sendCommand(socket, "AUTH LOGIN", [334]);
    await sendCommand(socket, Buffer.from(smtpUser).toString("base64"), [334]);
    await sendCommand(socket, Buffer.from(process.env.SMTP_PASS!).toString("base64"), [235]);
    await sendCommand(socket, `MAIL FROM:<${cleanHeader(smtpFrom)}>`, [250]);
    await sendCommand(socket, `RCPT TO:<${recipientEmail}>`, [250, 251]);
    await sendCommand(socket, "DATA", [354]);
    await sendCommand(socket, `${dotStuff(email)}\r\n.`, [250]);
    await sendCommand(socket, "QUIT", [221]);
  } finally {
    socket.destroy();
  }
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Geçersiz form verisi." }, { status: 400 });
  }

  const normalized = {
    name: payload.name?.trim() || "",
    email: payload.email?.trim() || "",
    company: payload.company?.trim() || "",
    projectType: payload.projectType?.trim() || "",
    message: payload.message?.trim() || "",
  };

  if (!normalized.name || !normalized.email || !normalized.message) {
    return Response.json(
      { message: "Ad soyad, e-posta ve mesaj alanları zorunludur." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized.email)) {
    return Response.json(
      { message: "Lütfen geçerli bir e-posta adresi girin." },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail(normalized);
    return Response.json({ message: "Mesajınız başarıyla gönderildi." });
  } catch (error) {
    console.error("Contact email failed", error);
    return Response.json(
      { message: "Mesaj gönderilemedi. SMTP ayarlarını kontrol edin." },
      { status: 500 },
    );
  }
}
