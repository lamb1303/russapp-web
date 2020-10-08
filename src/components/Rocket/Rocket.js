
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Rocket = () => {
    const [model, setModel] = useState()
    useEffect(() => {
      new GLTFLoader().load('/scene.gltf', setModel)
    }, [])
  return model ?
      
      <>
        <fog attach="fog" args={["white", 3, 90]} />
        <spotLight intensity={0.5} angle={0.9} position={[20, 9, 95]} penumbra={1} castShadow />
        <primitive object={model.scene} /> </> : null
}
  
export default Rocket