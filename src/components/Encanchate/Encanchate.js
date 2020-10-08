
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Encanchate = () => {
    const [model, setModel] = useState()
    useEffect(() => {
        new GLTFLoader().load('/encanchate.gltf', setModel)
    }, [])
    return model ?

        <>
            <primitive onPointerOver={() => window.location.href = 'https://encanchate.org/'} object={model.scene} /> </> : null
}

export default Encanchate