import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere, Float } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial transparent color="#7ED957" size={0.03} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

function GlobeWireframe() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial color="#1F7A5C" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.82, 16, 16]} />
        <meshBasicMaterial color="#7ED957" wireframe transparent opacity={0.12} />
      </mesh>
    </Float>
  );
}

function GlowRing() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.1;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 3, 0, 0]}>
      <torusGeometry args={[2.5, 0.01, 16, 100]} />
      <meshBasicMaterial color="#7ED957" transparent opacity={0.4} />
    </mesh>
  );
}

const HeroScene = () => (
  <div className="absolute inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.3} />
      <GlobeWireframe />
      <GlowRing />
      <ParticleField />
    </Canvas>
  </div>
);

export default HeroScene;
