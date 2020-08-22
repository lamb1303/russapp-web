
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Rocket = () => {
    const [model, setModel] = useState()
    useEffect(() => {
      new GLTFLoader().load('/scene.gltf', setModel)
    }, [])
    return model ?
      <>
        <fog attach="fog" args={["white", 6, 60]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[40, 10, 35]} penumbra={1} castShadow />
        <primitive object={model.scene} /> </> : null
}
  
export default Rocket