import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber'
import Controls from './components/Controls/Controls'
import Rocket from './components/Rocket/Rocket'
import Facebook from './components/Facebook/Facebook'
import MexicoEnCasa from './components/MexicoEnCasa/MexicoEnCasa'
import Encanchate from './components/Encanchate/Encanchate'
import * as THREE from 'three'
import './App.scss';

function App() {
  return (
    <>
      <h1 className="blur">Coming soon</h1>
      <span className="blur">Scroll to discover!</span>
      <Canvas colorManagement shadowMap
        camera={{ position: [-9.45, -12, 13] }} onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFShadowMap
        }}>
        <Suspense fallback={null}>
          <Rocket />
          <Controls />
          <Facebook />
          <Encanchate />
          <MexicoEnCasa />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
