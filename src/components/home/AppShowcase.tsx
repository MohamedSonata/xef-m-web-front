'use client';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';

function PhoneModel() {
  const { nodes, materials } = useGLTF('/models/phone.glb');

  return (
    <Float rotationIntensity={0.2} floatIntensity={0.5}>
      <primitive object={nodes.Scene} />
    </Float>
  );
}

export function AppShowcase() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <PhoneModel />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
} 