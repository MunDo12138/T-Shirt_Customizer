import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import ShirtFallback from './ShirtFallback';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const ShirtWithFallback = () => {
  const [useFallback, setUseFallback] = useState(false);
  
  if (useFallback) {
    console.log('Using fallback shirt');
    return <ShirtFallback />;
  }
  
  try {
    return <Shirt />;
  } catch (error) {
    console.error('Shirt component error:', error);
    setUseFallback(true);
    return <ShirtFallback />;
  }
};

const CanvasModel = () => {
  console.log('CanvasModel rendering...');
  
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: false,
        alpha: true
      }}
      className="w-full max-w-full h-full transition-all ease-in"
      onCreated={({ gl }) => {
        console.log('Canvas created successfully');
        try {
          gl.setClearColor('#f0f0f0', 0);
        } catch (error) {
          console.warn('WebGL setup warning:', error);
        }
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <Suspense fallback={null}>
        <CameraRig>
          <Backdrop />
          <Center>
            <ShirtWithFallback />
          </Center>
        </CameraRig>
      </Suspense>
    </Canvas>
  )
}

export default CanvasModel