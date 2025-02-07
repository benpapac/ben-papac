// "use client"

// import { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import {Mesh} from 'three';
// import {useKeyboardControls} from '@react-three/drei'
// // import {Controls} from "./layout";

// function MyAnimatedBox() {
//   const myMesh = useRef<Mesh>();
//   useFrame(({ clock }) => {
//   myMesh.current!.rotation.x = clock.getElapsedTime()
// });

// const forwardPressed = useKeyboardControls<Controls>(state => state.forward);

// if (forwardPressed) {
//     console.log('myMesh', myMesh.current);
//     myMesh.current?.position.setY(myMesh.current.position.y+1);
// }

//   return (
//     <mesh ref={myMesh}>
//       <boxGeometry />
//       <meshBasicMaterial color="royalblue" />
//     </mesh>
//   )
// }



// export default function Animation (): React.ReactElement {
//     return (
//        <div id="canvas-container">
//       <Canvas>
//         <ambientLight intensity={0.1} />
//         <directionalLight color={"red"} position={[0, 0, 5]} />
//         <MyAnimatedBox/>
//         </Canvas>
//     </div>
//     );
// };