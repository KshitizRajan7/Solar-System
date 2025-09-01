'use client';
import SpinningEarthScene from "./components/SpinningEarthScene";
export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex justify-center items-center">
      {/* 3D Background placeholder */}
      <SpinningEarthScene />

      {/* Top content */}
      <h1 className="text-center font-bold text-white absolute top-5 left-5 pointer-events-none text-xl md:text-2xl">
        Kshitiz Rajan Universe
      </h1>
    </div>
  );
}
