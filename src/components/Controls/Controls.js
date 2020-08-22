import React, { useRef } from 'react';
import { useThree, useFrame, extend } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Controls = () => {
    const controls = useRef()
    const { camera, gl } = useThree()
    useFrame(() => controls.current.update())
    return <orbitControls
      autoRotate
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 3}
      dampingFactor={0.1}
      rotateSpeed={0.5} />
}
  
export default Controls