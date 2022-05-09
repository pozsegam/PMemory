import { Link } from "react-router-dom";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Robot from "../Robot";
import { OrbitControls } from "@react-three/drei";

function Intro() {
  const model = useLoader(GLTFLoader, "robot.gltf");
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCursor({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  return (
    <div className="intro-board">
      <div className="model">
        <Canvas camera={{ position: [30, 0, 0] }}>
          <OrbitControls autoRotate enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-5, 10, 2]} />
          <Suspense fallback={null}>
            <Robot scale={5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="rules-div">
        <h1>Memory Matching Rules</h1>
        <p>
          At the beginning of the game, all the cards are mixed up and laid in
          rows, face down on the table. Turn over 2 cards, if the cards don't
          match, they will turn back, it's not a pair. However, if the two cards
          match it's a pair. Continue until you find all the pairs,and don't
          forget to have fun!
        </p>

        <Link to="/Game">
          <button className="play-btn"> Let's play</button>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
