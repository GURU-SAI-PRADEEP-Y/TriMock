import { Canvas } from "@react-three/fiber";
import { Experience } from "./Glass/Experience";
import Navbar from "./Navbar/Navbar";

const Canva = () => {
    return (
        <>
            <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
                <color attach="background" args={["#ececec"]} />
                <Experience />
                <gridHelper />
            </Canvas>
        </>
    )
}

export default Canva
