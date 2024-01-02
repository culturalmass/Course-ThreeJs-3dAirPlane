import React from "react";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import { SphereEnv } from "./components/SphereEnv";
import { Landscape } from "./components/Landscape";
import { Airplane } from "./components/Airplane";
import { Targets } from "./components/Target";
import { EffectComposer, HueSaturation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { MotionBLur } from "./components/MotionBlur";

function App() {
  return (
    <>
      <SphereEnv />
      <Environment background={false} files={"assets/textures/envmap.hdr"} />
      <PerspectiveCamera makeDefault position={[0, 10, 10]} />

      <Landscape />
      <Airplane />
      <Targets />
      <directionalLight
        castShadow
        color={"#f3d29a"}
        intensity={2}
        position={[10, 5, 4]}
        shadow-bias={-0.0005}
        shadow-mapSize-width={1024}
        shadow-mapSize-heigth={1024}
        shadow-camera-near={0.01}
        shadow-camera-far={20}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-camera-left={-6.2}
        shadow-camera-right={6.4}
      />

      <EffectComposer>
        <MotionBLur />
        <HueSaturation
          blendFunction={BlendFunction.NORMAL}
          hye={-0.15}
          saturation={0.1}
        />
      </EffectComposer>
    </>
  );
}

export default App;
