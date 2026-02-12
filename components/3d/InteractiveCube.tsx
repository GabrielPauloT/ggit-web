import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, RoundedBox, Text, Line } from "@react-three/drei";
import * as THREE from "three";

// --- Icons ---

function IconCore() {
  // A "Sparkle" or "North Star" shape: Long cardinals, shorter diagonals
  const lines = useMemo(() => {
    return [
      // Vertical (Long)
      [0, -0.35, 0, 0, 0.35, 0],
      // Horizontal (Long)
      [-0.35, 0, 0, 0.35, 0, 0],
      // Diagonal 1 (Short)
      [-0.18, -0.18, 0, 0.18, 0.18, 0],
      // Diagonal 2 (Short)
      [-0.18, 0.18, 0, 0.18, -0.18, 0]
    ];
  }, []);

  return (
    <group>
      {lines.map((coords, i) => (
        <Line 
          key={i} 
          points={[[coords[0], coords[1], coords[2]], [coords[3], coords[4], coords[5]]]} 
          color="white" 
          lineWidth={2.5} 
          transparent 
          opacity={i < 2 ? 1 : 0.7} // Cardinals brighter
        />
      ))}
      {/* Central glow point */}
      <mesh position={[0,0,0]}>
        <circleGeometry args={[0.04, 16]} />
        <meshBasicMaterial color="white" transparent opacity={1} />
      </mesh>
    </group>
  );
}

function IconStructure() {
  return (
    <Text
      fontSize={0.5}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
      characters="{ }"
    >
      {"{ }"}
    </Text>
  );
}

function IconBackbone() {
  // Hexagon grid
  const hexRadius = 0.12;
  const positions = [
    [0, 0, 0],
    [0.22, 0.12, 0],
    [-0.22, 0.12, 0],
    [0.22, -0.12, 0],
    [-0.22, -0.12, 0],
    [0, 0.24, 0],
    [0, -0.24, 0]
  ];

  return (
    <group>
      {positions.map((pos, i) => (
         <mesh key={i} position={[pos[0] as number, pos[1] as number, 0]}>
           <ringGeometry args={[hexRadius * 0.8, hexRadius, 6]} />
           <meshBasicMaterial color="#ffffff" transparent opacity={0.8} side={THREE.DoubleSide} />
         </mesh>
      ))}
    </group>
  )
}


function IconShield() {
  const points = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0.3);
    s.lineTo(0.25, 0.2);
    s.lineTo(0.2, -0.1);
    s.quadraticCurveTo(0, -0.35, 0, -0.35);
    s.quadraticCurveTo(-0.2, -0.1, -0.2, -0.1);
    s.lineTo(-0.25, 0.2);
    s.lineTo(0, 0.3);
    return s.getPoints().map(p => [p.x, p.y, 0] as [number, number, number]);
  }, []);

  return (
    <group>
      <Line 
        points={points} 
        color="white" 
        lineWidth={2} 
        transparent 
        opacity={0.9} 
      />
      <mesh position={[0,0,-0.01]}>
         <shapeGeometry args={[new THREE.Shape(points.map(p => new THREE.Vector2(p[0], p[1])))]} />
         <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

function IconIntelligence() {
  // A 3-layer neural network (2 input, 3 hidden, 2 output)
  const nodes = [
    // Top Layer (Input)
    [-0.15, 0.25, 0], [0.15, 0.25, 0],
    // Middle Layer (Hidden)
    [-0.25, 0, 0], [0, 0, 0], [0.25, 0, 0],
    // Bottom Layer (Output)
    [-0.15, -0.25, 0], [0.15, -0.25, 0]
  ];

  const connections = useMemo(() => {
    const lines: [number, number, number][] = [];
    // Connect Top to Middle (Dense)
    [0, 1].forEach(topIdx => {
      [2, 3, 4].forEach(midIdx => {
        lines.push(nodes[topIdx] as [number, number, number]);
        lines.push(nodes[midIdx] as [number, number, number]);
      });
    });
    // Connect Middle to Bottom (Dense)
    [2, 3, 4].forEach(midIdx => {
      [5, 6].forEach(botIdx => {
        lines.push(nodes[midIdx] as [number, number, number]);
        lines.push(nodes[botIdx] as [number, number, number]);
      });
    });
    return lines;
  }, []);

  return (
    <group>
       {/* Nodes */}
       {nodes.map((pos, i) => (
         <mesh key={i} position={[pos[0], pos[1], 0]}>
           <circleGeometry args={[0.03, 16]} />
           <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
         </mesh>
       ))}
       {/* Connections */}
       <Line
          points={connections}
          color="white"
          lineWidth={1.5}
          transparent
          opacity={0.5}
          segments
       />
    </group>
  );
}

function IconMethod() {
   return (
    <Text
      fontSize={0.6}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
    >
      ∞
    </Text>
   );
}


// --- Face Component ---

function CubeFace({ 
  position, 
  rotation, 
  size, 
  roman, 
  title, 
  children 
}: { 
  position: [number, number, number]; 
  rotation: [number, number, number]; 
  size: [number, number];
  roman: string;
  title: string;
  children: React.ReactNode;
}) {
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
      
      {/* Content Container */}
      <group position={[0, 0, 0.02]}>
          {/* Roman Numeral (Top) */}
          <Text
            position={[0, 0.5, 0]}
            fontSize={0.15}
            color="#4a4a6a"
            anchorX="center"
            anchorY="middle"
          >
            {roman}
          </Text>

          {/* Main Icon (Center) */}
          <group position={[0, 0.05, 0]}>
            {children}
          </group>

          {/* Title (Bottom) */}
          <Text
            position={[0, -0.5, 0]}
            fontSize={0.08}
            color="#6b7280"
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.1}
          >
            {title}
          </Text>
      </group>
    </group>
  );
}

function CubeGeometry() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15 + 0.5;
      groupRef.current.rotation.y += 0.004;
    }
  });

  // Responsive scaling logic
  const scale = useMemo(() => {
    // If viewport width is small (mobile), scale down to fit.
    // 3.5 is a threshold roughly ensuring the cube (size ~2.5-3 diagonal) fits with margin.
    return Math.min(1, viewport.width / 3.5);
  }, [viewport.width]);

  const faceOffset = 1.001;

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={groupRef} scale={scale}>
        {/* Main cube body */}
        <RoundedBox args={[2, 2, 2]} radius={0.15} smoothness={4}>
          <meshStandardMaterial
            color="#2a2a35"
            roughness={0.4}
            metalness={0.6}
          />
        </RoundedBox>

        {/* 1. THE CORE (Front) */}
        <CubeFace 
            position={[0, 0, faceOffset]} 
            rotation={[0, 0, 0]} 
            size={[2, 2]} 
            roman="I"
            title="THE CORE"
        >
            <IconCore />
        </CubeFace>

        {/* 2. THE STRUCTURE (Back) */}
        <CubeFace 
            position={[0, 0, -faceOffset]} 
            rotation={[0, Math.PI, 0]} 
            size={[2, 2]} 
            roman="II"
            title="THE STRUCTURE"
        >
            <IconStructure />
        </CubeFace>


        {/* 3. THE BACKBONE (Right) */}
        <CubeFace 
            position={[faceOffset, 0, 0]} 
            rotation={[0, Math.PI / 2, 0]} 
            size={[2, 2]} 
            roman="III"
            title="THE BACKBONE"
        >
            <IconBackbone />
        </CubeFace>

        {/* 4. THE SHIELD (Left) */}
        <CubeFace 
            position={[-faceOffset, 0, 0]} 
            rotation={[0, -Math.PI / 2, 0]} 
            size={[2, 2]} 
            roman="IV"
            title="THE SHIELD"
        >
            <IconShield />
        </CubeFace>

        {/* 5. THE INTELLIGENCE (Top) */}
        <CubeFace 
            position={[0, faceOffset, 0]} 
            rotation={[-Math.PI / 2, 0, 0]} 
            size={[2, 2]} 
            roman="V"
            title="THE INTELLIGENCE"
        >
            <IconIntelligence />
        </CubeFace>

        {/* 6. THE METHOD (Bottom) */}
        <CubeFace 
            position={[0, -faceOffset, 0]} 
            rotation={[Math.PI / 2, 0, 0]} 
            size={[2, 2]} 
            roman="VI"
            title="THE METHOD"
        >
            <IconMethod />
        </CubeFace>

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
