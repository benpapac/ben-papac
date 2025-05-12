"use client"

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Enemy from "./enemy";
import { EnemyType } from "../page";

export default function Enemies ({collision, enemies, setEnemies}) {
     const elapsedTime = useRef(0);
    
      useFrame(({clock}) => {
        if (collision) {
            return;
        }
        const currentTime = clock.getElapsedTime();
        // console.log('clock', currentTime, elapsedTime.current);
        if (currentTime - elapsedTime.current > 0.4) {
            elapsedTime.current = currentTime;

            const emptyIdx = enemies.indexOf(null);

            if (emptyIdx !== -1) {
                setEnemies((prev) => prev.map((enemy, idx) => {
                    if (idx === emptyIdx) {
                        const positive = Math.random();
                        const xPos = Math.floor(Math.random()*5);

                        return {
                            y: 3,
                            x: positive ? xPos : -xPos,
                            scale: 0.3
                        };
                    }
                    return enemy;
                }))
            }
            // console.log('enemies', enemies);
        }
      });
    return (
        <>
            {enemies.map((enemy, idx) => enemy && <Enemy key={idx} collision={collision} idx={idx} enemies={enemies} setEnemies={setEnemies} />)}
        </>
    )
};