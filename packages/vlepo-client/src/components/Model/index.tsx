/* eslint-disable import/no-extraneous-dependencies */

import { useRef } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { a as three } from '@react-spring/three';
import { useGLTF } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';

type ModelProps = {
  open: boolean;
  hinge: number;
};

const vec = new THREE.Vector3();

type GLTFResult = GLTF & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nodes: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  materials: any;
};

const Model = (props: ModelProps) => {
  const { open, hinge, ...rest } = props;
  const group = useRef<GroupProps | null>(null);
  // Load model
  const { nodes, materials } = useGLTF('/mac.glb') as GLTFResult;
  // Take care of cursor state on hover

  // Make it float in the air when it's opened
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, open ? -24 : -32), 0.1);
    state.camera.lookAt(0, 0, 0);
    if (
      group &&
      group.current &&
      group.current.rotation &&
      group.current.position &&
      !Array.isArray(group.current.rotation) &&
      typeof group.current.position !== 'number' &&
      !Array.isArray(group.current.position)
    ) {
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        open ? Math.cos(t / 2) / 8 + 0.25 : 0,
        0.1,
      );
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        open ? Math.sin(t / 4) / 4 : 0,
        0.1,
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        open ? Math.sin(t / 4) / 4 : 0,
        0.1,
      );
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        open ? (-2 + Math.sin(t)) / 3 : -4.3,
        0.1,
      );
    }
  });
  // The view was auto-generated by: https://github.com/pmndrs/gltfjsx
  // Events and spring animations were added afterwards
  return (
    <group
      ref={group}
      {...rest}
      onPointerOver={(e) => {
        e.stopPropagation();
      }}
      dispose={null}
    >
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes.Cube008.geometry} />
          <mesh material={materials['matte.001']} geometry={nodes.Cube008_1.geometry} />
          <mesh material={materials['screen.001']} geometry={nodes.Cube008_2.geometry} />
        </group>
      </three.group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes.Cube002.geometry} />
        <mesh material={materials.trackpad} geometry={nodes.Cube002_1.geometry} />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
};

export default Model;