"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef, Suspense, forwardRef, useEffect, useState } from "react";
import * as THREE from "three";

const Earth = ({ sunRef }) => {
    const earthRef = useRef();

    const dayTexture = new THREE.TextureLoader().load("/earthDay.jpg");
    const nightTexture = new THREE.TextureLoader().load("/earthNight.jpg");

    const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
            dayTexture: { value: dayTexture },
            nightTexture: { value: nightTexture },
            lightDirection: { value: new THREE.Vector3(1, 0, 0).normalize() }, // placeholder
        },
        vertexShader: `
  varying vec3 vNormal;
varying vec2 vUv;

void main() {
  vNormal = normalize(mat3(modelMatrix) * normal); // world space normal
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

    `,
        fragmentShader: `
      uniform sampler2D dayTexture;
      uniform sampler2D nightTexture;
      uniform vec3 lightDirection;
      varying vec3 vNormal;
      varying vec2 vUv;
      void main() {
        float dotNL = dot(normalize(vNormal), normalize(lightDirection));
        dotNL = clamp(dotNL, 0.0, 1.0);
        vec4 dayColor = texture2D(dayTexture, vUv);
        vec4 nightColor = texture2D(nightTexture, vUv);
        gl_FragColor = mix(nightColor, dayColor, dotNL);
      }
    `,
    });

    useFrame((state, delta) => {
        if (earthRef.current) {
            earthRef.current.rotation.y += delta * 0.2;
        }
        // Update light direction for shader
        // const sunPosition = new THREE.Vector3(500, 5, 10);

        if (sunRef.current && earthRef.current) {
            const lightDir = new THREE.Vector3().subVectors(
                sunRef.current.position,
                earthRef.current.position
            ).normalize();

            shaderMaterial.uniforms.lightDirection.value.copy(lightDir);
        }
    }
    );

    return (
        <mesh ref={earthRef} material={shaderMaterial}>
            <sphereGeometry args={[1.5, 64, 64]} />
            {/* <meshStandardMaterial
                map={dayTexture}            // Day texture
                emissiveMap={nightTexture}
                emissiveIntensity={2}
                metalness={0.8}
                roughness={1}
            /> */}
        </mesh>
    );
};

const Sun = ({ position = [500, 5, 10], intensity = 2 }, ref) => {

    const sunMap = new THREE.TextureLoader().load('/sun.jpg')
    return (
        <>
            {/* Directional light acts as the Sun */}
            <directionalLight
                position={position}
                intensity={intensity}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            {/* Visual Sun */}
            <mesh ref={ref} position={position}>
                <sphereGeometry args={[100, 320, 320]} /> {/* bigger radius */}
                <meshBasicMaterial map={sunMap} />
            </mesh>
        </>
    );
};

// const ForwardedSun = forwardRef(Sun);

const Moon = ({ position = [1, 5, 10], intensity = 2 }) => {

    const moonMap = new THREE.TextureLoader().load('/moon.jpg')
    return (
        <>
            {/* Directional light acts as the Sun */}
            <directionalLight
                position={position}
                intensity={intensity}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            {/* Visual Sun */}
            <mesh position={position}>
                <sphereGeometry args={[0.5, 64, 64]} /> {/* bigger radius */}
                <meshBasicMaterial map={moonMap} />
            </mesh>
        </>
    );
};

const SpinningEarthScene = () => {
    const sunRef = useRef();
    return (
        <div className="w-screen h-screen bg-black">
            <Canvas camera={{ position: [5, 2, 5], fov: 50 }} shadows>
                <ambientLight intensity={2} />

                <Suspense >
                    <Earth sunRef={sunRef} />
                    <Stars radius={100} depth={50} count={5000} factor={4} fade />

                    <Sun position={[500, 5, 10]} intensity={2} />
                    {/* <ForwardedSun ref={sunRef} position={[500, 5, 10]} intensity={2} /> */}
                    <Moon position={[1, 5, 10]} intensity={2} />
                </Suspense>

                <OrbitControls enableZoom enableRotate enablePan />
            </Canvas>
        </div>
    );
};

export default SpinningEarthScene;
