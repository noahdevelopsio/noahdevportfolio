import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface GlobeMeshProps {
  isHovered: boolean;
}

const GlobeMesh: React.FC<GlobeMeshProps> = ({ isHovered }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y -= 0.001;
      const scale = isHovered ? 1.15 : 1.1;
      glowRef.current.scale.setScalar(THREE.MathUtils.lerp(glowRef.current.scale.x, scale, 0.1));
    }
  });

  return (
    <group>
      {/* Glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshBasicMaterial
          color="#00FF41"
          transparent
          opacity={isHovered ? 0.15 : 0.08}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main globe */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.3}
          roughness={0.7}
          emissive="#00FF41"
          emissiveIntensity={isHovered ? 0.15 : 0.05}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.01, 24, 24]} />
        <meshBasicMaterial
          color="#00FF41"
          wireframe
          transparent
          opacity={isHovered ? 0.4 : 0.2}
        />
      </mesh>

      {/* Latitude/longitude lines */}
      {[...Array(8)].map((_, i) => (
        <mesh key={`lat-${i}`} rotation={[0, 0, (Math.PI / 8) * i]}>
          <torusGeometry args={[1.02, 0.003, 8, 64]} />
          <meshBasicMaterial color="#00FF41" transparent opacity={0.3} />
        </mesh>
      ))}

      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[1.4, 0.008, 8, 64]} />
        <meshBasicMaterial color="#00FF41" transparent opacity={0.4} />
      </mesh>

      {/* Small dots for cities */}
      {[
        [0.8, 0.5, 0.3],
        [-0.6, 0.7, 0.4],
        [0.3, -0.8, 0.5],
        [-0.4, 0.3, 0.85],
        [0.7, -0.3, -0.65],
      ].map((pos, i) => (
        <mesh key={`dot-${i}`} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#00FF41" />
        </mesh>
      ))}
    </group>
  );
};

export const InteractiveGlobe: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-40 h-40 md:w-48 md:h-48"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00FF41" />
        
        <Suspense fallback={null}>
          <GlobeMesh isHovered={isHovered} />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>

      {/* Hover tooltip */}
      <div 
        className={`absolute -bottom-16 left-1/2 -translate-x-1/2 w-max transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <div className="px-4 py-2 rounded-lg border border-primary/30 bg-surface/90 backdrop-blur-sm">
          <p className="font-mono text-xs text-primary whitespace-nowrap">
            Available for: Remote | Onsite | Relocation Worldwide
          </p>
        </div>
      </div>
    </div>
  );
};
