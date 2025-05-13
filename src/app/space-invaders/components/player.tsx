"use client"

import {  useState } from "react";
import { useFrame, Vector3 } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { simpleCollision } from "../utils/simple-collision";

enum Controls {
  forward = 'forward',
  back = 'back',
  left = 'left',
  right = 'right',
  jump = 'jump',
}


export default function Player({collision, player, enemies, setCollision}) {
    const [sub, get] = useKeyboardControls<Controls>();
    const [color, setColor] = useState<string>("royalblue");
    const scale: Vector3 = [0.3,.3,0.3];

  useFrame(({ clock }) => {
    let collisionRef = false;
    
    enemies.filter((enemy) => enemy).forEach((enemy) => {
      if (simpleCollision(player.current.position, enemy)) {
       setCollision(true);
       collisionRef = true;
        setColor("black");
      }
    }) 

    if (!collision) {
      if (color !== "royalblue") {
        setColor("royalBlue");
      }
      const {forward, back, left, right} = get();
      const x = player.current.position.x;
      const y = player.current.position.y;
      const distance = .039;
      
      player.current!.rotation.x = clock.getElapsedTime();
      player.current!.position.setY(forward ? y + distance : back ? y - distance : y);
      player.current!.position.setX(left ? x - distance : right ? x + distance : x);
    }
});


  return (
    <mesh ref={player} scale={scale}>
      <boxGeometry />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}