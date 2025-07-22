import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true
      }}
      className="w-full max-w-full h-full transition-all ease-in"
      onCreated={({ gl }) => {
        gl.setClearColor('#f0f0f0', 0);
      }}
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel