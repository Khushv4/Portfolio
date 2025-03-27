import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';

const Rings = ({ position = [0, 0, 0] }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture('textures/rings.png');

  useGSAP(() => {
    if (refList.current.length === 0) return;

    // Set initial position for all rings
    refList.current.forEach((r) => {
      if (r.position) {
        r.position.set(...position);
      }
    });

    // GSAP Rotation Animation
    gsap.timeline({ repeat: -1, repeatDelay: 0.6 }).to(
      refList.current.map((r) => r.rotation),
      {
        y: `+=${Math.PI * 2}`,
        x: `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: { each: 0.15 },
      }
    );
  }, [position]);

  return (
    <Center position={position}>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;

