"use client";

import { useReducedMotion } from "framer-motion";
import { Suspense, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import type { Group } from "three";
import type { PerspectiveCamera } from "three";
import type { RefObject } from "react";

export const EMY_3D_MODEL_URL = "/models/emylogo3d_v3.glb";

const MODEL_SCALE = 2.1;
const DESKTOP_MODEL_OFFSET: [number, number, number] = [0.08, 0, -0.08];
const SILVER_MATERIAL_PROPS = {
  color: new THREE.Color("#f4f4f8"),
  roughness: 0.018,
  metalness: 1,
  clearcoat: 0.95,
  clearcoatRoughness: 0.018,
  reflectivity: 1,
  specularIntensity: 1,
  specularColor: new THREE.Color("#ffffff"),
  side: THREE.DoubleSide,
} satisfies THREE.MeshPhysicalMaterialParameters;

/**
 * Kamera +X üzerinde, bakış −X; ekranda “yukarı” dünya Y (tam yukarıdan kuşbakışı değil, X’ten düz bakış).
 * Y ekseni etrafında dönüşte Z derinlikte salınır (Z eksenindeki kurulumun X karşılığı).
 */
const CAMERA_POS: [number, number, number] = [0, 14, 0];
const CAMERA_FOV = 34;
const REVOLUTION_SECONDS = 14;
const OMEGA_RAD_PER_SEC = (2 * Math.PI) / REVOLUTION_SECONDS;

function WebGLContextGuards() {
  const { gl, invalidate } = useThree();
  useEffect(() => {
    const el = gl.domElement;
    const onLost = (e: Event) => {
      e.preventDefault();
    };
    const onRestored = () => {
      gl.setClearColor(0x000000, 0);
      invalidate();
    };
    el.addEventListener("webglcontextlost", onLost);
    el.addEventListener("webglcontextrestored", onRestored);
    return () => {
      el.removeEventListener("webglcontextlost", onLost);
      el.removeEventListener("webglcontextrestored", onRestored);
    };
  }, [gl, invalidate]);
  return null;
}

function useEmblemMaterials(scene: THREE.Group) {
  useLayoutEffect(() => {
    scene.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return;
      const prev = obj.material;
      const list = Array.isArray(prev) ? prev : [prev];
      for (const m of list) {
        m.dispose();
      }
      obj.material = new THREE.MeshPhysicalMaterial(SILVER_MATERIAL_PROPS);
    });
  }, [scene]);
}

/** Primitive + ölçek ağacına oturduktan sonra merkez (çift rAF ile R3F commit sonrası) */
function useCenteredModelPivot(
  scene: THREE.Object3D,
  pivotRef: RefObject<Group | null>,
) {
  useLayoutEffect(() => {
    const pivot = pivotRef.current;
    if (!pivot) return;

    scene.position.set(0, 0, 0);
    scene.rotation.set(0, 0, 0);
    pivot.rotation.set(0, 0, 0);

    const box = new THREE.Box3().setFromObject(scene);
    if (box.isEmpty()) return;

    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
  }, [scene, pivotRef]);
}

function SpinningEmblem() {
  const prefersReducedMotion = useReducedMotion();
  const pivot = useRef<Group>(null);
  const { size } = useThree();
  const { scene: sceneRoot } = useGLTF(EMY_3D_MODEL_URL);
  const scene = useMemo(() => sceneRoot.clone(true), [sceneRoot]);
  const modelScale = size.width < 640 ? 1.45 : size.width < 1024 ? 2.15 : MODEL_SCALE;
  const modelOffset =
    size.width < 1024 ? ([0, 0, 0] as const) : DESKTOP_MODEL_OFFSET;

  useEmblemMaterials(scene);
  useCenteredModelPivot(scene, pivot);

  useFrame((_, delta) => {
    const p = pivot.current;
    if (!p) return;
    /* Dünya ekseni: Y; +X’ten bakınca Z derinlik salınımı, +Z’den bakınca X salınımı */
    const omega = prefersReducedMotion ? OMEGA_RAD_PER_SEC * 0.35 : OMEGA_RAD_PER_SEC;
    p.rotation.z += delta * omega;
  });

  return (
    <group
      ref={pivot}
      position={modelOffset}
      scale={[modelScale, modelScale, modelScale]}
    >
      <primitive object={scene} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <WebGLContextGuards />
      <ambientLight intensity={1.15} />
      <hemisphereLight args={["#ffffff", "#8b5cf6", 1.05]} />
      <directionalLight position={[0, 12, 5]} intensity={10.5} />
      <directionalLight position={[10, 9, -3]} intensity={16.5} />
      <directionalLight position={[-10, 9, 3]} intensity={15.8} color="#f8f7ff" />
      <directionalLight position={[12, 5, 5]} intensity={9.5} color="#ffffff" />
      <directionalLight position={[-12, 5, 5]} intensity={9.5} color="#ffffff" />
      <directionalLight position={[0, 8, 9]} intensity={5.4} color="#ffffff" />
      <directionalLight position={[0, 14, 0]} intensity={4.8} color="#ffffff" />
      <spotLight
        position={[10, 10, -5]}
        angle={0.65}
        penumbra={0.35}
        intensity={38}
        color="#ffffff"
        distance={36}
      />
      <spotLight
        position={[-10, 10, -5]}
        angle={0.65}
        penumbra={0.35}
        intensity={38}
        color="#ffffff"
        distance={36}
      />
      <pointLight position={[0, 7, 4]} intensity={6.5} color="#7c3aed" distance={18} />
      <pointLight position={[-5, 7, -4]} intensity={2.2} color="#a78bfa" distance={16} />
      <pointLight position={[4, 8, 6]} intensity={7.2} color="#ffffff" distance={20} />
      <pointLight position={[-4, 8, 6]} intensity={7.2} color="#ffffff" distance={20} />
      <pointLight position={[0, 9, -8]} intensity={5.4} color="#ede9fe" distance={22} />
      <pointLight position={[10, 8, 0]} intensity={15} color="#ffffff" distance={34} />
      <pointLight position={[-10, 8, 0]} intensity={15} color="#ffffff" distance={34} />
      <pointLight position={[11, 6, -5]} intensity={9} color="#c4b5fd" distance={30} />
      <pointLight position={[-11, 6, -5]} intensity={9} color="#c4b5fd" distance={30} />
      <pointLight position={[16, 0, 0]} intensity={22} color="#ffffff" distance={38} />
      <pointLight position={[-16, 0, 0]} intensity={22} color="#ffffff" distance={38} />
      <spotLight
        position={[18, 0, 0]}
        target-position={[0, 0, 0]}
        angle={0.5}
        penumbra={0.4}
        intensity={30}
        color="#ffffff"
        distance={42}
      />
      <spotLight
        position={[-18, 0, 0]}
        target-position={[0, 0, 0]}
        angle={0.5}
        penumbra={0.4}
        intensity={30}
        color="#ffffff"
        distance={42}
      />
      <pointLight position={[0, 10, 0]} intensity={6.4} color="#ffffff" distance={18} />
      <Suspense fallback={null}>
        <SpinningEmblem />
      </Suspense>
    </>
  );
}

export interface Hero3DCanvasProps {
  className?: string;
}

export function Hero3DCanvas({ className }: Hero3DCanvasProps) {
  useEffect(() => {
    useGLTF.preload(EMY_3D_MODEL_URL);
  }, []);

  return (
    <div className={className}>
      <Canvas
        camera={{
          position: CAMERA_POS,
          fov: CAMERA_FOV,
          near: 0.05,
          far: 200,
        }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "default",
          stencil: false,
          depth: true,
          failIfMajorPerformanceCaveat: false,
        }}
        dpr={[1, Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.5)]}
        frameloop="always"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
          touchAction: "pan-y",
        }}
        onCreated={({ gl, camera }) => {
          gl.setClearColor(0x000000, 0);
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.NoToneMapping;
          const cam = camera as PerspectiveCamera;
          cam.position.set(...CAMERA_POS);
          cam.up.set(0, 0, -1);
          cam.lookAt(0, 0, 0);
          cam.updateProjectionMatrix();
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
