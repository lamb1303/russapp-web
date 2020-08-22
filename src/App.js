import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber'
import Controls from './components/Controls/Controls'
import Rocket from './components/Rocket/Rocket'
import * as THREE from 'three'
import './App.scss';

function App() {
  return (
    <>
      <h1 className="blur">Coming soon</h1>
      <span className="blur">Scroll to discover!</span>
      <Canvas
        camera={{ position: [9, 6, 18] }} onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFShadowMap
        }}>
        <Suspense fallback={null}>
          <Controls />
          <Rocket />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
