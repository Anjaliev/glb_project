import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = ({ url }) => {
  const glb = useGLTF(url);
  return <primitive object={glb.scene} scale={1.5} />;
};

const ModelViewer = () => {

  const { filename } = useParams();
  
  const modelUrl = `http://localhost:5000/uploads/${filename}`;

  return (
    <div className="h-screen w-screen bg-black">
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model url={modelUrl} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
