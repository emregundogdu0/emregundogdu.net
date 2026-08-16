"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type RGB = readonly [number, number, number];

type NeuralNoiseProps = {
  color?: RGB;
  opacity?: number;
  speed?: number;
  className?: string;
};

type UniformMap = Record<string, WebGLUniformLocation | null>;

const VERTEX_SOURCE = [
  "attribute vec2 a_position;",
  "varying vec2 vUv;",
  "void main() {",
  "  vUv = 0.5 * (a_position + 1.0);",
  "  gl_Position = vec4(a_position, 0.0, 1.0);",
  "}",
].join("\n");

const FRAGMENT_SOURCE = [
  "precision mediump float;",
  "varying vec2 vUv;",
  "uniform float u_time;",
  "uniform float u_ratio;",
  "uniform vec2 u_pointer_position;",
  "uniform vec3 u_color;",
  "uniform float u_speed;",
  "vec2 rotate(vec2 uv, float th) {",
  "  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;",
  "}",
  "float neuro_shape(vec2 uv, float t, float p) {",
  "  vec2 sine_acc = vec2(0.0);",
  "  vec2 res = vec2(0.0);",
  "  float scale = 8.0;",
  "  for (int j = 0; j < 15; j++) {",
  "    uv = rotate(uv, 1.0);",
  "    sine_acc = rotate(sine_acc, 1.0);",
  "    vec2 layer = uv * scale + float(j) + sine_acc - t;",
  "    sine_acc += sin(layer) + 2.4 * p;",
  "    res += (0.5 + 0.5 * cos(layer)) / scale;",
  "    scale *= 1.2;",
  "  }",
  "  return res.x + res.y;",
  "}",
  "void main() {",
  "  vec2 uv = 0.5 * vUv;",
  "  uv.x *= u_ratio;",
  "  vec2 pointer = vUv - u_pointer_position;",
  "  pointer.x *= u_ratio;",
  "  float p = clamp(length(pointer), 0.0, 1.0);",
  "  p = 0.5 * pow(1.0 - p, 2.0);",
  "  float t = u_speed * u_time;",
  "  float noise = neuro_shape(uv, t, p);",
  "  noise = 1.2 * pow(noise, 3.0);",
  "  noise += pow(noise, 10.0);",
  "  noise = max(0.0, noise - 0.5);",
  "  noise *= (1.0 - length(vUv - 0.5));",
  "  gl_FragColor = vec4(u_color * noise, 1.0);",
  "}",
].join("\n");

const DEFAULT_COLOR: RGB = [0.133, 0.827, 0.933];

function createShader(
  gl: WebGLRenderingContext,
  source: string,
  type: number,
) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(
  gl: WebGLRenderingContext,
  vs: WebGLShader,
  fs: WebGLShader,
) {
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    return null;
  }
  return program;
}

function getUniforms(gl: WebGLRenderingContext, program: WebGLProgram) {
  const uniforms: UniformMap = {};
  const uniformCount = gl.getProgramParameter(
    program,
    gl.ACTIVE_UNIFORMS,
  ) as number;
  for (let i = 0; i < uniformCount; i += 1) {
    const info = gl.getActiveUniform(program, i);
    if (!info) continue;
    uniforms[info.name] = gl.getUniformLocation(program, info.name);
  }
  return uniforms;
}

export function NeuralNoise({
  color = DEFAULT_COLOR,
  opacity = 1,
  speed = 0.001,
  className,
}: NeuralNoiseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorRef = useRef(color);
  const speedRef = useRef(speed);

  colorRef.current = color;
  speedRef.current = speed;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
    });

    if (!gl || gl.isContextLost()) return;

    const vertexShader = createShader(gl, VERTEX_SOURCE, gl.VERTEX_SHADER);
    const fragmentShader = createShader(
      gl,
      FRAGMENT_SOURCE,
      gl.FRAGMENT_SHADER,
    );
    if (!vertexShader || !fragmentShader) return;

    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;

    const uniforms = getUniforms(gl, program);
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    gl.useProgram(program);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const pointer = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.45,
      tX: window.innerWidth * 0.5,
      tY: window.innerHeight * 0.45,
    };
    let frame = 0;
    let running = true;

    const resizeCanvas = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.75);
      canvas.width = Math.max(1, Math.floor(window.innerWidth * dpr));
      canvas.height = Math.max(1, Math.floor(window.innerHeight * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(uniforms.u_ratio, canvas.width / Math.max(canvas.height, 1));
    };

    const render = () => {
      if (!running || gl.isContextLost()) return;
      if (document.hidden) {
        frame = requestAnimationFrame(render);
        return;
      }
      const [r, g, b] = colorRef.current;
      pointer.x += (pointer.tX - pointer.x) * 0.2;
      pointer.y += (pointer.tY - pointer.y) * 0.2;
      gl.uniform3f(uniforms.u_color, r, g, b);
      gl.uniform1f(uniforms.u_speed, speedRef.current);
      gl.uniform1f(uniforms.u_time, performance.now());
      gl.uniform2f(
        uniforms.u_pointer_position,
        pointer.x / window.innerWidth,
        1 - pointer.y / window.innerHeight,
      );
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frame = requestAnimationFrame(render);
    };

    const updateMousePosition = (x: number, y: number) => {
      pointer.tX = x;
      pointer.tY = y;
    };

    const onPointerMove = (event: PointerEvent) => {
      updateMousePosition(event.clientX, event.clientY);
    };
    const onTouchMove = (event: TouchEvent) => {
      const touch = event.targetTouches[0];
      if (touch) updateMousePosition(touch.clientX, touch.clientY);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    frame = requestAnimationFrame(render);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-0 block h-[100dvh] w-screen bg-[#07080c]",
        className,
      )}
      style={{ opacity }}
    />
  );
}
