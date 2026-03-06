import Particles from "react-tsparticles";

export default function BackgroundParticles() {
  return (
    <Particles
      style={{
        position: "fixed",
        zIndex: -1,
      }}
      options={{
        background: {
          color: { value: "#0b0b0b" },
        },
        particles: {
          number: { value: 80 },
          color: { value: "#ff6a00" },
          links: {
            enable: true,
            color: "#ff6a00",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: { value: 2 },
          opacity: { value: 0.4 },
        },
      }}
    />
  );
}
