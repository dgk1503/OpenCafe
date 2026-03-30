"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import Cup from "./Cup";

export default function Scene({ scrollProgress }: any) {
  const cupRef = useRef<any>(null);

  useFrame(() => {
    const progress = scrollProgress.current;

    cupRef.current.position.y = 2 - progress * 3;

    cupRef.current.rotation.y = progress * Math.PI * 2;

    if (cupRef.current.position.y < -1) {
      cupRef.current.position.y = -1;
    }
  });

  return (
    <>
      <PerspectiveCamera
        fov={45}
        near={0.1}
        far={10000}
        makeDefault
        position={[0, 2, 6]}
      />

      <Environment preset="city" />

      <Cup ref={cupRef} />
    </>
  );
}
