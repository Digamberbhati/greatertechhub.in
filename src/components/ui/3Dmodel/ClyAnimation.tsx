'use client'

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cly from "./Cly";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

const ClyAnimation = () => {
  return (
    <>
      
    <Canvas camera={{ fov: 22 }} className="w-full h-full ">
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Cly />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={1.5}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.5}
        />
        <ToneMapping adaptive />
      </EffectComposer>
    </Canvas>
   
  </>
  )
}

export default ClyAnimation
