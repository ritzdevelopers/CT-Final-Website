import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface ThreeDCardProps {
  title: string;
  description: string;
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({ title, description }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Card geometry
    const geometry = new THREE.BoxGeometry(2.5, 1.5, 0.2);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.5 });
    const card = new THREE.Mesh(geometry, material);
    scene.add(card);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation loop
    let frameId: number;
    const animate = () => {
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Mouse movement for 3D tilt
    const handlePointerMove = (e: MouseEvent) => {
      if (!mount) return;
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      card.rotation.y = x * 0.4;
      card.rotation.x = y * 0.4;
    };
    mount.addEventListener("mousemove", handlePointerMove);
    mount.addEventListener("mouseleave", () => {
      card.rotation.x = 0;
      card.rotation.y = 0;
    });

    // Resize
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      mount.removeEventListener("mousemove", handlePointerMove);
      mount.innerHTML = "";
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-full h-48 md:h-56 rounded-xl shadow-lg bg-transparent"
      style={{ perspective: "800px" }}
    >
      <div
        ref={mountRef}
        className="absolute inset-0 w-full h-full rounded-xl"
        style={{ zIndex: 1 }}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 pointer-events-none">
        <h2 className="text-lg md:text-xl font-bold text-black drop-shadow mb-2">{title}</h2>
        <p className="text-xs md:text-sm text-black/80 drop-shadow max-w-[80%] text-center">{description}</p>
      </div>
    </div>
  );
};

export default ThreeDCard;
