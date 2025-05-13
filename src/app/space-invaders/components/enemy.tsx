import { useFrame } from "@react-three/fiber";
import { EnemyType } from "../page";

export default function Enemy ({idx, collision, enemies, setEnemies}) {
    useFrame(({clock}) => {
        if (enemies[idx]) {
          const oldY = enemies[idx].y;
  
            if (oldY < -3) {
                // delete this enemy from the parent
               setEnemies((prev: boolean[]) => prev.map((enemy: boolean, enemyIdx: number) => idx === enemyIdx ? null : enemy)); 
            } else {
              const distance = 0.05;
              const newY = {
                y: !collision ? oldY - distance : oldY
              };
              
              setEnemies((prev: EnemyType[]) => prev.map((enemy: EnemyType, enemyIdx: number) => idx === enemyIdx ? {
                ...enemy,
                ...newY,
                rotation: [0, clock.getElapsedTime(), 0]
              } : enemy)); 
            }
        }
    });

      return (
    <mesh position={[enemies[idx].x, enemies[idx].y, 0]} scale={enemies[idx].scale} rotation={enemies[idx].rotation}>
      <boxGeometry />
      <meshBasicMaterial color="hotpink" />
    </mesh>
  )
};