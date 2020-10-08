
import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Rocket = () => {
    const [model, setModel] = useState()
    useEffect(() => {
        new GLTFLoader().load('/facebook_logo/facebook.gltf', setModel)
    }, [])

    return model ?
        <>
            <primitive onPointerOver={() => window.location.href = 'https://www.facebook.com/RussApp2020'} object={model.scene} scale={[1.6, 1.6, 1.6]} dispose={null} />
        </> : null

}

export default Rocket