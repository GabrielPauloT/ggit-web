'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import React from "react";

function checkWebGLSupport(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch {
    return false;
  }
}

function CSSCubeFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="relative w-40 h-40 md:w-56 md:h-56"
        style={{ perspective: '800px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateX: [25, 35, 25], rotateY: [0, 360] }}
          transition={{ rotateY: { duration: 20, repeat: Infinity, ease: "linear" }, rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
        >
          {[
            { transform: 'translateZ(70px)', label: 'I', title: 'THE CORE' },
            { transform: 'rotateY(180deg) translateZ(70px)', label: 'II', title: 'THE STRUCTURE' },
            { transform: 'rotateY(90deg) translateZ(70px)', label: 'III', title: 'THE BACKBONE' },
            { transform: 'rotateY(-90deg) translateZ(70px)', label: 'IV', title: 'THE SHIELD' },
            { transform: 'rotateX(90deg) translateZ(70px)', label: 'V', title: 'THE INTELLIGENCE' },
            { transform: 'rotateX(-90deg) translateZ(70px)', label: 'VI', title: 'THE METHOD' },
          ].map((face, i) => (
            <div
              key={i}
              className="absolute inset-0 w-[140px] h-[140px] md:w-[140px] md:h-[140px] flex flex-col items-center justify-center border border-white/10 bg-[#2a2a35]/80 backdrop-blur-sm rounded-lg"
              style={{
                transform: face.transform,
                backfaceVisibility: 'hidden',
              }}
            >
              <span className="text-[#4a4a6a] text-xs font-mono mb-2">{face.label}</span>
              <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 mb-2" />
              <span className="text-gray-500 text-[10px] font-mono tracking-widest uppercase">{face.title}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

const ThreeJSCube = dynamic(() => import('@/components/3d/ThreeJSCube'), {
  ssr: false,
  loading: () => <CSSCubeFallback />,
});

class CubeErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <CSSCubeFallback />;
    }
    return this.props.children;
  }
}

export default function InteractiveCube() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(checkWebGLSupport());
  }, []);

  if (webglSupported === null) return null;

  if (!webglSupported) {
    return <CSSCubeFallback />;
  }

  return (
    <CubeErrorBoundary>
      <ThreeJSCube />
    </CubeErrorBoundary>
  );
}
