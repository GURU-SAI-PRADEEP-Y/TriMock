import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";
import { Mug } from "./Mug";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />
      <Float>
        <Mug scale={[0.3, 0.3, 0.3]} />
      </Float>
      <ContactShadows position-y={-0.5} opacity={0.4} blur={2} />
      <Environment preset="sunset" background blur={4} />
    </>
  );
};
