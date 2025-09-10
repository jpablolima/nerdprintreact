import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useGLTF,
} from "@react-three/drei";

/**
 * Como usar:
 * 1) Instale:
 *    npm i three @react-three/fiber @react-three/drei
 * 2) Coloque um arquivo 3D da caneca em public/mug.glb (ou mude o caminho no componente <Mug />)
 *    - Formato recomendado: glTF binário (.glb)
 *    - Escale no Blender/Maya se necessário para ~1 unidade = 1 metro
 * 3) Importe e use <RotatingMug /> em qualquer página do seu app React/Next.js.
 */

function Mug(props) {
  // Carrega a malha 3D da caneca (glb)
  const { scene } = useGLTF("/mug.glb");
  return <primitive object={scene} {...props} />;
}

export default function RotatingMug() {
  return (
    <div className="w-[600px] h-[500px]  from-zinc-50 to-zinc-100 rounded-2xl overflow-hidden bg-transparent">
      <Canvas
        camera={{ position: [14.0, 0.6, 1.2], fov: 60 }}
        shadows
        dpr={[1, 2]}
      >
        {/* Luzes básicas */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[2, 4, 2]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense fallback={null}>
          {/* A caneca em si */}
          <Mug scale={1} position={[0, 0, 0]} />

          {/* Ambiente HDRI suave (drei) */}
          <Environment preset="city" />
        </Suspense>

        {/* Sombra de contato para dar realismo */}
        <ContactShadows
          position={[0, -0.4, 0]}
          opacity={0.4}
          scale={4}
          blur={2.5}
          far={2}
        />

        {/* Controle de câmera com rotação automática */}
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          autoRotate
          autoRotateSpeed={1.5}
          minDistance={0.6}
          maxDistance={3}
        />
      </Canvas>
    </div>
  );
}

// Melhora o carregamento do GLTF
useGLTF.preload("/mug.glb");
