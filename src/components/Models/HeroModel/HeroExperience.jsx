import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense, useRef } from "react";

const RotatingGroup = ({ children, ...props }) => {
  const groupRef = useRef();
  const direction = useRef(1);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005 * direction.current;
      // Alternate direction when reaching half of the initial rotation range
      if (
        groupRef.current.rotation.y >= 0 ||
        groupRef.current.rotation.y <= -Math.PI / 3
      ) {
        direction.current *= -1;
      }
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {children}
    </group>
  );
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 30 }}>
      <ambientLight intensity={0.1} color="#1a1a40" />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={300} />
        <RotatingGroup
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </RotatingGroup>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;