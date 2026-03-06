import { Canvas } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";

export default function ThreeBackground() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -2,
      }}
      camera={{ position: [0, 0, 8] }}
    >
      <ambientLight intensity={0.5} />

      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[-2, 1, 0]}>
          <meshStandardMaterial color="#ff6a00" />
        </Sphere>
      </Float>

      <Float speed={1.5}>
        <Sphere args={[0.7, 64, 64]} position={[2, -1, 0]}>
          <meshStandardMaterial color="#ff3d00" />
        </Sphere>
      </Float>
    </Canvas>
  );
}
