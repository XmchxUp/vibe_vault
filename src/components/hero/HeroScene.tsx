import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Points, PointMaterial } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 850;
    const coords = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const radius = 3.5 + Math.random() * 6.8;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 6.8;
      coords[i * 3] = Math.cos(angle) * radius;
      coords[i * 3 + 1] = height;
      coords[i * 3 + 2] = Math.sin(angle) * radius - 2;
    }

    return coords;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.035;
    pointsRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.18) * 0.035;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#00E5FF"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.72}
      />
    </Points>
  );
}

function WireGrid() {
  const groupRef = useRef<THREE.Group>(null);
  const lines = useMemo(() => {
    const items: Array<[THREE.Vector3, THREE.Vector3]> = [];
    const size = 12;
    const step = 1;

    for (let i = -size; i <= size; i += step) {
      items.push([
        new THREE.Vector3(-size, -2.2, i),
        new THREE.Vector3(size, -2.2, i),
      ]);
      items.push([
        new THREE.Vector3(i, -2.2, -size),
        new THREE.Vector3(i, -2.2, size),
      ]);
    }

    return items;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.z = (state.clock.elapsedTime * 0.28) % 1;
  });

  return (
    <group ref={groupRef} rotation={[-0.25, 0, 0]}>
      {lines.map(([start, end], index) => (
        <Line
          key={`${start.x}-${start.z}-${index}`}
          points={[start, end]}
          color={index % 5 === 0 ? "#FF2BD6" : "#00E5FF"}
          transparent
          opacity={index % 5 === 0 ? 0.18 : 0.11}
          lineWidth={0.55}
        />
      ))}
    </group>
  );
}

function EnergyRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.12;
    ringRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.16) * 0.18;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.22} floatIntensity={0.28}>
      <mesh ref={ringRef} position={[0, 0.15, -2.8]} rotation={[1.08, 0, 0]}>
        <torusGeometry args={[2.7, 0.008, 12, 160]} />
        <meshBasicMaterial color="#B6FF3B" transparent opacity={0.32} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#05070D"]} />
      <fog attach="fog" args={["#05070D", 5.5, 15]} />
      <ParticleField />
      <WireGrid />
      <EnergyRing />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.6, 7.2], fov: 54 }}
        dpr={[1, 1.7]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          preserveDrawingBuffer: import.meta.env.DEV,
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
