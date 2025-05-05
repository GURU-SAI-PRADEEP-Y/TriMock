import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";
import { Hoodie } from "./Hoodie";

export const HoodieD = () => {
  return (
    <>
      <OrbitControls />
      <Float>
        <Hoodie />
      </Float>
      <ContactShadows position-y={-0.5} opacity={0.4} blur={2} />
      <Environment preset="sunset" background blur={4} />
    </>
  );
};
