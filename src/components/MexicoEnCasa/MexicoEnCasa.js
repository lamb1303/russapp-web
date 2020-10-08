
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const MexicoCasa = () => {
    const [model, setModel] = useState()
    useEffect(() => {
        new GLTFLoader().load('/mexicoencasa.gltf', setModel)
    }, [])
    return model ?

        <>
             
            <primitive onPointerOver={() => window.location.href = 'https://mexicoencasa.mx/'} object={model.scene} scale={[9, 9, 9]} /> </> : null
}

export default MexicoCasa