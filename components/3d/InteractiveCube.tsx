'use client'

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import React from "react";

function checkWebGLSupport(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return false;
    if (gl instanceof WebGLRenderingContext) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        if (typeof renderer === 'string' && (renderer.includes('SwiftShader') || renderer.includes('llvmpipe'))) {
          return false;
        }
      }
    }
    return true;
  } catch {
    return false;
  }
}

export function CSSCubeFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="relative"
        style={{ perspective: '800px', width: '160px', height: '160px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative"
          style={{ transformStyle: 'preserve-3d', width: '160px', height: '160px' }}
          animate={{ rotateX: [25, 35, 25], rotateY: [0, 360] }}
          transition={{ rotateY: { duration: 20, repeat: Infinity, ease: "linear" }, rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
        >
          {[
            { transform: 'translateZ(80px)', label: 'I', title: 'THE CORE' },
            { transform: 'rotateY(180deg) translateZ(80px)', label: 'II', title: 'THE STRUCTURE' },
            { transform: 'rotateY(90deg) translateZ(80px)', label: 'III', title: 'THE BACKBONE' },
            { transform: 'rotateY(-90deg) translateZ(80px)', label: 'IV', title: 'THE SHIELD' },
            { transform: 'rotateX(90deg) translateZ(80px)', label: 'V', title: 'THE INTELLIGENCE' },
            { transform: 'rotateX(-90deg) translateZ(80px)', label: 'VI', title: 'THE METHOD' },
          ].map((face, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center justify-center border border-white/10 bg-[#2a2a35]/80 backdrop-blur-sm rounded-lg"
              style={{
                width: '160px',
                height: '160px',
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

class CubeErrorBoundary extends React.Component<{ children: React.ReactNode; onError: () => void }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return <CSSCubeFallback />;
    }
    return this.props.children;
  }
}

export default function InteractiveCube() {
  const [useFallback, setUseFallback] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const supported = checkWebGLSupport();
    if (!supported) {
      setUseFallback(true);
    }
    setChecked(true);
  }, []);

  const handleContextLost = useCallback(() => {
    setUseFallback(true);
  }, []);

  if (!checked) return null;

  if (useFallback) {
    return <CSSCubeFallback />;
  }

  return (
    <CubeErrorBoundary onError={() => setUseFallback(true)}>
      <ThreeJSCube onContextLost={handleContextLost} />
    </CubeErrorBoundary>
  );
}
