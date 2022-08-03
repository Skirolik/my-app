import { PerspectiveCamera } from "@react-three/drei";
import React, { Suspense } from "react";
import { angleToRadians } from "./angle";

const SceneContainer = () => {
  return (
    <Suspense fallback={null}>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <mesh position={[0, 0.5, 0]}>
        {/* args:radius,widthsegment,heightsegment */}
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FF0000" wireframe={true} />
      </mesh>
      {/* floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="#add8e6" />
      </mesh>
      <ambientLight args={["#fffffff", 1]} />
    </Suspense>
  );
};

export default SceneContainer;
