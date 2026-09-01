"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface HeroWebGLShaderProps {
  className?: string;
}

export function HeroWebGLShader({ className }: HeroWebGLShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const vertexShader = `
      attribute vec3 position;

      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;

      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        p.y += 0.08;

        float d = length(p) * distortion;
        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float waveR = p.y + sin((rx + time) * xScale) * yScale;
        float waveG = p.y + sin((gx + time) * xScale) * yScale;
        float waveB = p.y + sin((bx + time) * xScale) * yScale;

        float r = 0.032 / abs(waveR);
        float g = 0.03 / abs(waveG);
        float b = 0.036 / abs(waveB);

        vec3 color = min(vec3(r, g, b), vec3(1.0));
        float lineFocus = smoothstep(0.34, 0.02, abs(waveG));
        float vignette = smoothstep(1.15, 0.18, abs(p.y));
        vec3 base = vec3(0.015, 0.016, 0.018);

        gl_FragColor = vec4(mix(base, color, vignette * lineFocus), 1.0);
      }
    `;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: false,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x050506, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const uniforms = {
      resolution: { value: new THREE.Vector2(1, 1) },
      time: { value: 0 },
      xScale: { value: 1.18 },
      yScale: { value: 0.4 },
      distortion: { value: 0.12 },
    };

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array([
          -1, -1, 0,
          1, -1, 0,
          -1, 1, 0,
          1, -1, 0,
          -1, 1, 0,
          1, 1, 0,
        ]),
        3,
      ),
    );

    const material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      renderer.setSize(width, height, false);
      uniforms.resolution.value.set(width, height);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    resize();

    let animationId = 0;
    const animate = () => {
      uniforms.time.value += 0.01;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 block h-full w-full ${className ?? ""}`}
    />
  );
}
