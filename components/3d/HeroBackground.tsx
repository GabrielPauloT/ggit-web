'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function ParticleGlobe({ count = 3000 }) {
  const points = useRef<THREE.Points>(null!)
  
  // Generate points in a sphere shape
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.5 // radius
      const theta = 2 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1)
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)
      
      // Add slight noise for organic feel
      pos[i * 3] = x + (Math.random() - 0.5) * 0.1
      pos[i * 3 + 1] = y + (Math.random() - 0.5) * 0.1
      pos[i * 3 + 2] = z + (Math.random() - 0.5) * 0.1
    }
    return pos
  }, [count])

  useFrame((state, delta) => {
    if (points.current) {
      // Slow rotation
      points.current.rotation.x -= delta / 15
      points.current.rotation.y -= delta / 20
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#2563eb" // Brand Electric Blue
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </Points>
    </group>
  )
}

function FloatingTechGrid() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
         <ParticleGlobe />
    </Float>
  )
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full bg-[#050505]">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-[1] pointer-events-none" />
      
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={['#050505', 3, 10]} />
        <ambientLight intensity={0.5} />
        <FloatingTechGrid />
      </Canvas>
    </div>
  )
}
