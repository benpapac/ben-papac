"use client"

import { useState, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";
import Player from "./components/player";
import Enemies from "./components/enemies";
import { Mesh } from "three";
import { Text } from "@react-three/drei";


enum Controls {
  forward = 'forward',
  back = 'back',
  left = 'left',
  right = 'right',
  jump = 'jump',
}

export type EnemyType = {   
    y: number;
    x: number;
    scale: number;
};


export default function SpaceInvaders () {
    const player = useRef<Mesh>(null);
    const [enemies, setEnemies] = useState<(EnemyType | null)[]>(Array(25).fill(null));
    const [collision, setCollision] = useState<boolean>(false);

   

    const map = useMemo<KeyboardControlsEntry<Controls>[]>(()=>[
        { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
        { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
        { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
        { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
        { name: Controls.jump, keys: ['Space'] },
    ], []);

    return (
        <KeyboardControls map={map}>
            <div className={"w-screen max-w-[1100px] h-[90vh] max-h-screen"}>
                <Canvas >
                    <Enemies collision={collision} enemies={enemies} setEnemies={setEnemies}/>
                    <directionalLight position={[0,0,2]}/>
                    <Player collision={collision} player={player} enemies={enemies} setCollision={setCollision}/>
   
                        <Text 
                        // font={"../../../public/Rubik Moonrocks_Regular.json"}
                        position={[-6, -3.6, 0]}
                        fontSize={0.5}
                        color="white"
                        anchorX="left"
                        anchorY="bottom"
                        onClick={() => {
                            // e.preventDefault();
                            player.current.position.setX(0);
                            player.current.position.setY(0);
                            setEnemies(Array(25).fill(null));
                            setCollision(false);
                        }}>
                            {"Start"}
                            <meshNormalMaterial/>
                            </Text>
                </Canvas>
            </div>
        </KeyboardControls>
    )
};