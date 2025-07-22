import React from 'react'
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

import state from '../store';

const ShirtFallback = () => {
  const snap = useSnapshot(state);
  const meshRef = React.useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      easing.dampC(meshRef.current.material.color, snap.color, 0.25, delta);
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <cylinderGeometry args={[0.8, 1, 1.5, 8]} />
      <meshStandardMaterial color={snap.color} roughness={1} />
    </mesh>
  )
}

export default ShirtFallback