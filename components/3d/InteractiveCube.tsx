import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function AsteriskSymbol({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  const lines = useMemo(() => {
    const count = 6;
    const length = 0.35;
    const result: [number, number, number, number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI;
      const dx = Math.cos(angle) * length;
      const dy = Math.sin(angle) * length;
      result.push([-dx, -dy, 0, dx, dy, 0]);
    }
    return result;
  }, []);

  const linesGroup = useMemo(() => {
    const group = new THREE.Group();
    lines.forEach((coords) => {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute([coords[0], coords[1], coords[2], coords[3], coords[4], coords[5]], 3));
      const mat = new THREE.LineBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0.9 });
      const line = new THREE.Line(geo, mat);
      group.add(line);
    });
    return group;
  }, [lines]);

  return (
    <group position={position} rotation={rotation}>
      <primitive object={linesGroup} />
    </group>
  );
}

function InsetFace({ position, rotation, size }: { position: [number, number, number]; rotation: [number, number, number]; size: [number, number] }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Recessed dark panel */}
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[size[0] * 0.7, size[1] * 0.7]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.6} metalness={0.3} />
      </mesh>
      {/* Border frame */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[size[0] * 0.75, size[1] * 0.75]} />
        <meshStandardMaterial color="#2a2a3e" roughness={0.5} metalness={0.4} />
      </mesh>
    </group>
  );
}

function CubeGeometry() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15 + 0.5;
      groupRef.current.rotation.y += 0.004;
    }
  });

  const faceOffset = 1.001;

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={groupRef}>
        {/* Main cube body */}
        <RoundedBox args={[2, 2, 2]} radius={0.15} smoothness={4}>
          <meshStandardMaterial
            color="#2a2a35"
            roughness={0.4}
            metalness={0.6}
          />
        </RoundedBox>

        {/* Inset faces with asterisk symbols */}
        {/* Front */}
        <InsetFace position={[0, 0, faceOffset]} rotation={[0, 0, 0]} size={[2, 2]} />
        <AsteriskSymbol position={[0, 0, faceOffset + 0.01]} rotation={[0, 0, 0]} />

        {/* Back */}
        <InsetFace position={[0, 0, -faceOffset]} rotation={[0, Math.PI, 0]} size={[2, 2]} />
        <AsteriskSymbol position={[0, 0, -faceOffset - 0.01]} rotation={[0, Math.PI, 0]} />

        {/* Right */}
        <InsetFace position={[faceOffset, 0, 0]} rotation={[0, Math.PI / 2, 0]} size={[2, 2]} />
        <AsteriskSymbol position={[faceOffset + 0.01, 0, 0]} rotation={[0, Math.PI / 2, 0]} />

        {/* Left */}
        <InsetFace position={[-faceOffset, 0, 0]} rotation={[0, -Math.PI / 2, 0]} size={[2, 2]} />
        <AsteriskSymbol position={[-faceOffset - 0.01, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />

        {/* Top */}
        <InsetFace position={[0, faceOffset, 0]} rotation={[-Math.PI / 2, 0, 0]} size={[2, 2]} />
        <AsteriskSymbol position={[0, faceOffset + 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} />

        {/* Bottom */}
        <InsetFace position={[0, -faceOffset, 0]} rotation={[Math.PI / 2, 0, 0]} size={[2, 2]} />
        <AsteriskSymbol position={[0, -faceOffset - 0.01, 0]} rotation={[Math.PI / 2, 0, 0]} />

        {/* Subtle edge glow */}
        <RoundedBox args={[2.02, 2.02, 2.02]} radius={0.16} smoothness={4}>
          <meshStandardMaterial
            color="#3a3a4a"
            transparent
            opacity={0.15}
            roughness={0.3}
            metalness={0.8}
          />
        </RoundedBox>
      </group>
    </Float>
  );
}

export default function InteractiveCube() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [3, 2, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#e0e0ff" />
        <pointLight position={[-5, 3, 5]} intensity={0.4} color="#ffffff" />
        <pointLight position={[0, -5, 0]} intensity={0.2} color="#4a4a6a" />
        <CubeGeometry />
      </Canvas>
    </div>
  );
}
