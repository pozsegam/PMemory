import { Link } from "react-router-dom";
import React, { useRef,useState,useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {Suspense} from "react"




function Intro() {
  return (
    <>
      <h1>Hello</h1>
      <Link to="/Game">Game</Link>
    </>
  );
}

export default Intro;
