import React from 'react'
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { easing } from 'maath';

import state from '../store';

const ShirtSimple = () => {
  const snap = useSnapshot(state);
  
  // Try to load the model safely
  let gltf;
  try {
    gltf = useGLTF('/shirt_baked.glb');
  } catch (error) {
    console.error('Failed to load 3D model:', error);
    return (
      <mesh>
        <boxGeometry args={[1, 1.5, 0.1]} />
        <meshStandardMaterial color={snap.color} />
      </mesh>
    );
  }

  const { nodes, materials } = gltf;

  useFrame((state, delta) => {
    if (materials?.lambert1?.color) {
      easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
    }
  });

  // Fallback to simple box if model doesn't load
  if (!nodes?.T_Shirt_male?.geometry || !materials?.lambert1) {
    return (
      <mesh>
        <boxGeometry args={[1, 1.5, 0.1]} />
        <meshStandardMaterial color={snap.color} />
      </mesh>
    );
  }

  return (
    <mesh
      castShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      dispose={null}
    />
  )
}

export default ShirtSimple