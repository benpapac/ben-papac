"use client"

import { useState, useMemo, useRef } from "react";
import { Canvas, useFrame, Vector3 } from "@react-three/fiber";
import { KeyboardControls, KeyboardControlsEntry, useKeyboardControls } from "@react-three/drei";
import Player from "./components/player";
import Enemy from "./components/enemy";
import Enemies from "./components/enemies";
import { Mesh } from "three";

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
    // const [position, setPosition] = useState<Vector3>([0,0,0]);
    const player = useRef<Mesh>(null);
    const [enemies, setEnemies] = useState<(EnemyType | null)[]>(Array(25).fill(null));
    const [collision, setCollision] = useState<boolean>(false);
    //  const [enemies, setEnemies] = useState(Array(25).fill(false));

   

    const map = useMemo<KeyboardControlsEntry<Controls>[]>(()=>[
        { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
        { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
        { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
        { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
        { name: Controls.jump, keys: ['Space'] },
    ], []);


    // const forwardPressed = useKeyboardControls<Controls>(state => state.forward);


    // if (forwardPressed) {
    //     console.log('myMesh', myMesh.current);
    //     myMesh.current?.position.setY(myMesh.current.position.y+1);
    // }


    return (
        <KeyboardControls map={map}>
            <div className={"w-screen max-w-[1100px] h-[500px] max-h-screen"}>
                <Canvas >
                    <Enemies collision={collision} enemies={enemies} setEnemies={setEnemies}/>
                    <directionalLight position={[0,0,2]}/>
                    <Player collision={collision} player={player} enemies={enemies} setCollision={setCollision}/>
                    {/* <mesh position={position}>
                        <boxGeometry />
                        <meshStandardMaterial color={"orange"}/>
                        </mesh> */}
                </Canvas>
                        <button onClick={(e) => {
                            e.preventDefault();
                            player.current.position.setX(0);
                            player.current.position.setY(0);
                            setEnemies(Array(25).fill(null));
                            setCollision(false);
                        }}>{"Start"}</button>
            </div>
        </KeyboardControls>
    )
};