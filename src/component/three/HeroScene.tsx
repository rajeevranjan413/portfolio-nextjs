"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  PerformanceMonitor,
  Sparkles,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";

// Glowing distorted orb wrapped in a wireframe shell and orbit rings
const Core = () => {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  // Sit to the right on wide screens; on narrow ones tuck it small and far back behind the text
  const wide = viewport.width > 9;
  const x = wide ? viewport.width / 4.2 : 0;
  const y = wide ? 0 : -viewport.height / 5;
  const z = wide ? 0 : -3;
  const scale = wide ? 1 : 0.7;

  useFrame((state, delta) => {
    const { pointer } = state;
    if (group.current) {
      // Ease toward the mouse for a parallax tilt
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.5, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.35, 0.05);
    }
    if (shell.current) {
      shell.current.rotation.x += delta * 0.15;
      shell.current.rotation.y += delta * 0.2;
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.4;
    if (ringB.current) ringB.current.rotation.z -= delta * 0.3;
  });

  return (
    <group ref={group} position={[x, y, z]} scale={scale}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.35, 28]} />
          <MeshDistortMaterial
            color="#6366f1"
            emissive="#3b0f8f"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.75}
            distort={0.42}
            speed={2.2}
          />
        </mesh>

        <mesh ref={shell} scale={1.9}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#a5b4fc" wireframe transparent opacity={0.18} />
        </mesh>

        <mesh ref={ringA} rotation={[Math.PI / 2.4, 0.3, 0]}>
          <torusGeometry args={[2.5, 0.02, 16, 160]} />
          <meshBasicMaterial color="#c084fc" transparent opacity={0.7} />
        </mesh>
        <mesh ref={ringB} rotation={[Math.PI / 1.8, -0.5, 0]}>
          <torusGeometry args={[2.9, 0.012, 16, 160]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={0.5} />
        </mesh>
      </Float>
    </group>
  );
};

// Small shapes drifting around the scene
const Debris = () => {
  const shapes: { pos: [number, number, number]; geo: "oct" | "tet" | "knot"; color: string; s: number }[] = [
    { pos: [-7.5, 3.4, -4], geo: "oct", color: "#818cf8", s: 0.45 },
    { pos: [-6, -3.6, -3], geo: "tet", color: "#c084fc", s: 0.5 },
    { pos: [5.5, 2.6, -3], geo: "knot", color: "#22d3ee", s: 0.35 },
    { pos: [4.2, -2.8, -1.5], geo: "oct", color: "#f472b6", s: 0.35 },
    { pos: [1.2, 3.8, -5], geo: "knot", color: "#a78bfa", s: 0.3 },
  ];

  return (
    <>
      {shapes.map((s, i) => (
        <Float key={i} speed={1.5 + i * 0.3} rotationIntensity={2} floatIntensity={2}>
          <mesh position={s.pos} scale={s.s}>
            {s.geo === "oct" && <octahedronGeometry args={[1, 0]} />}
            {s.geo === "tet" && <tetrahedronGeometry args={[1, 0]} />}
            {s.geo === "knot" && <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />}
            <meshStandardMaterial
              color={s.color}
              emissive={s.color}
              emissiveIntensity={0.35}
              metalness={0.6}
              roughness={0.25}
              flatShading
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

// Slowly drift the camera with scroll-independent motion
const CameraRig = () => {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.6, 0.03);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.4 + Math.sin(t * 0.3) * 0.1, 0.03);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

interface HeroSceneProps {
  // When false the render loop stops entirely (hero scrolled out of view)
  active?: boolean;
}

export default function HeroScene({ active = true }: HeroSceneProps) {
  // Start at a modest pixel ratio and let PerformanceMonitor raise/lower it
  // based on the measured frame rate of this device.
  const [dpr, setDpr] = useState(1.25);

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={dpr}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      // Listen on the whole page so the overlaid text doesn't block mouse parallax
      eventSource={document.body}
      eventPrefix="client"
    >
      <PerformanceMonitor
        onIncline={() => setDpr(Math.min(window.devicePixelRatio, 1.75))}
        onDecline={() => setDpr(1)}
        flipflops={3}
        onFallback={() => setDpr(1)}
      />
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={60} color="#a5b4fc" />
      <pointLight position={[-5, -3, 2]} intensity={40} color="#c084fc" />
      <pointLight position={[0, 4, -4]} intensity={30} color="#22d3ee" />

      <Stars radius={60} depth={40} count={1500} factor={3.5} saturation={0} fade speed={1} />
      <Sparkles count={40} scale={[14, 8, 6]} size={2.5} speed={0.4} color="#c4b5fd" />

      <Core />
      <Debris />
      <CameraRig />
    </Canvas>
  );
}
