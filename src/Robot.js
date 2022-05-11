import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("trying.glb");

  useFrame((state, delta) => (group.current.rotation.y += 0.001));

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.26, 0.4, -0.02]} rotation={[1.57, 1.51, -1.57]}>
            <group position={[0, -0.79, 0.31]} rotation={[0.21, 0, 0]}>
              <group position={[-0.9, 0.57, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh
                  geometry={nodes.Object_10.geometry}
                  material={materials.Purple_Dark}
                />
              </group>
              <group
                position={[-0.1, 0.79, 0.05]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[-0.02, 0.02, 0.02]}
              >
                <mesh
                  geometry={nodes.Object_12.geometry}
                  material={materials.Green_Emissive}
                />
                <mesh
                  geometry={nodes.Object_13.geometry}
                  material={materials.Green_Emissive_Dark}
                />
              </group>
              <group
                position={[-0.9, 0.26, 0]}
                rotation={[1.59, 0, Math.PI / 2]}
                scale={0.07}
              >
                <mesh
                  geometry={nodes.Object_15.geometry}
                  material={materials.material_0}
                />
              </group>
              <mesh
                geometry={nodes.Object_7.geometry}
                material={materials.Yellow}
              />
              <mesh
                geometry={nodes.Object_8.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[0, -0.55, -0.14]} rotation={[-Math.PI / 9, 0, 0]}>
              <mesh
                geometry={nodes.Object_17.geometry}
                material={materials.Yellow}
              />
            </group>
            <group position={[0, 0, -0.08]}>
              <mesh
                geometry={nodes.Object_19.geometry}
                material={materials.Green}
              />
              <mesh
                geometry={nodes.Object_20.geometry}
                material={materials.Metal_Gold}
              />
            </group>
            <group position={[0, -0.91, 0.25]} rotation={[0, -Math.PI / 2, 0]}>
              <mesh
                geometry={nodes.Object_22.geometry}
                material={materials.Yellow}
              />
            </group>
            <group
              position={[0.4, 0.82, -0.19]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                geometry={nodes.Object_24.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-0.61, 0.85, -0.19]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.14, 1.45, 0.95]}
            >
              <mesh
                geometry={nodes.Object_26.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-0.31, 0.43, -0.19]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            >
              <mesh
                geometry={nodes.Object_28.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[0.65, 0.26, -0.19]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.14, 1.32, 0.87]}
            >
              <mesh
                geometry={nodes.Object_30.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[0.04, 0.91, -0.19]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.29}
            >
              <mesh
                geometry={nodes.Object_32.geometry}
                material={materials.Black}
              />
              <mesh
                geometry={nodes.Object_33.geometry}
                material={materials.Glass_White}
              />
              <mesh
                geometry={nodes.Object_34.geometry}
                material={materials.Metal}
              />
            </group>
            <group
              position={[0.21, 0.91, -0.19]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.29}
            >
              <mesh
                geometry={nodes.Object_36.geometry}
                material={materials.Black}
              />
              <mesh
                geometry={nodes.Object_37.geometry}
                material={materials.Glass_White}
              />
              <mesh
                geometry={nodes.Object_38.geometry}
                material={materials.Metal}
              />
            </group>
            <group
              position={[0.52, 0.91, -0.19]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.29}
            >
              <mesh
                geometry={nodes.Object_40.geometry}
                material={materials.Black}
              />
              <mesh
                geometry={nodes.Object_41.geometry}
                material={materials.Glass_Red}
              />
              <mesh
                geometry={nodes.Object_42.geometry}
                material={materials.Metal_Red}
              />
            </group>
            <group
              position={[-0.24, -0.12, -0.08]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                geometry={nodes.Object_44.geometry}
                material={materials.material_0}
              />
            </group>
            <group
              position={[0.37, 0.4, -0.08]}
              rotation={[Math.PI / 2, 0.44, Math.PI / 2]}
            >
              <mesh
                geometry={nodes.Object_46.geometry}
                material={materials.material_0}
              />
            </group>
            <group
              position={[-0.05, 0.32, -0.08]}
              rotation={[-Math.PI / 2, 1.4, -1.57]}
            >
              <mesh
                geometry={nodes.Object_48.geometry}
                material={materials.material_0}
              />
            </group>
            <group
              position={[0, -0.79, 0.31]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            >
              <mesh
                geometry={nodes.Object_50.geometry}
                material={materials.Yellow}
              />
            </group>
            <group
              position={[-0.29, -1.03, 0.24]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={0.89}
            >
              <mesh
                geometry={nodes.Object_52.geometry}
                material={materials.material}
              />
            </group>
            <group
              position={[0.26, -1.57, 0.3]}
              rotation={[Math.PI / 2, -0.8, 0]}
            >
              <mesh
                geometry={nodes.Object_54.geometry}
                material={materials.Purple_Light}
              />
            </group>
            <group
              position={[0.55, -1.28, 0.3]}
              rotation={[Math.PI / 2, -0.8, 0]}
            >
              <mesh
                geometry={nodes.Object_56.geometry}
                material={materials.Purple_Dark}
              />
            </group>
            <group
              position={[-0.51, -1.31, 0.25]}
              rotation={[Math.PI / 2, -Math.PI / 4, 0]}
              scale={[1.03, 0.75, 1.03]}
            >
              <mesh
                geometry={nodes.Object_58.geometry}
                material={materials.Purple_Dark}
              />
            </group>
            <group
              position={[0, -0.91, 0.25]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
              scale={1.08}
            >
              <mesh
                geometry={nodes.Object_60.geometry}
                material={materials.Purple_Dark}
              />
            </group>
            <group
              position={[-0.67, 0.51, -0.24]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={0.92}
            >
              <mesh
                geometry={nodes.Object_62.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-0.67, 0.27, -0.24]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={0.92}
            >
              <mesh
                geometry={nodes.Object_64.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[0.18, 0.2, -0.23]}
              rotation={[Math.PI, -Math.PI / 2, 0]}
              scale={1.14}
            >
              <mesh
                geometry={nodes.Object_66.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-0.08, 0.2, -0.23]}
              rotation={[Math.PI, -Math.PI / 2, 0]}
              scale={1.14}
            >
              <mesh
                geometry={nodes.Object_68.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[0.21, 0.82, -0.22]}
              rotation={[Math.PI / 2, -1.21, Math.PI]}
              scale={0.36}
            >
              <mesh
                geometry={nodes.Object_70.geometry}
                material={materials.Metal}
              />
            </group>
            <group
              position={[0.04, 0.82, -0.22]}
              rotation={[Math.PI / 2, -0.33, Math.PI]}
              scale={0.36}
            >
              <mesh
                geometry={nodes.Object_72.geometry}
                material={materials.Metal}
              />
            </group>
            <group
              position={[0.52, 0.82, -0.22]}
              rotation={[Math.PI / 2, 0.53, Math.PI]}
              scale={0.36}
            >
              <mesh
                geometry={nodes.Object_74.geometry}
                material={materials.Metal}
              />
            </group>
            <group
              position={[0.54, 0.83, 0.11]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            >
              <mesh
                geometry={nodes.Object_76.geometry}
                material={materials.Purple_Dark}
              />
            </group>
            <group
              position={[0.54, 1.1, 0.11]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.17}
            >
              <mesh
                geometry={nodes.Object_78.geometry}
                material={materials.Purple_Dark}
              />
            </group>
            <group
              position={[-0.9, -0.9, 0.02]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
              scale={0.92}
            >
              <mesh
                geometry={nodes.Object_80.geometry}
                material={materials.Purple_Dark}
              />
            </group>
            <group
              position={[0.07, -1.21, 0.25]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                geometry={nodes.Object_82.geometry}
                material={materials.material_0}
              />
            </group>
            <group
              position={[0.45, -1.9, 0.26]}
              rotation={[-Math.PI / 2, -0.78, -Math.PI / 2]}
              scale={[0.05, 0.06, 0.04]}
            >
              <mesh
                geometry={nodes.Object_84.geometry}
                material={materials.Purple_Dark}
              />
            </group>
            <group
              position={[0.6, -1.95, 0.26]}
              rotation={[-Math.PI / 2, -0.78, -Math.PI / 2]}
              scale={[0.05, 0.06, 0.04]}
            >
              <mesh
                geometry={nodes.Object_86.geometry}
                material={materials.Purple_Dark}
              />
            </group>
            <group
              position={[-0.96, -1.34, -0.09]}
              rotation={[-2.67, -1.4, -2.66]}
            >
              <group rotation={[0, -0.17, 0]}>
                <group rotation={[0, 0, -Math.PI / 2]}>
                  <group
                    position={[0, 0.63, -0.02]}
                    rotation={[0.73, 0.07, 1.5]}
                    scale={[0.63, 0.9, 0.63]}
                  >
                    <group scale={[1.59, 1.11, 1.59]}>
                      <group
                        position={[-0.02, 0.03, -0.92]}
                        rotation={[0, Math.PI / 2, 0]}
                      >
                        <mesh
                          geometry={nodes.Object_98.geometry}
                          material={materials.Purple_Light}
                        />
                      </group>
                      <group
                        position={[0.02, 0.09, -0.92]}
                        rotation={[Math.PI / 2, 1.32, -Math.PI / 2]}
                      >
                        <mesh
                          geometry={nodes.Object_100_1.geometry}
                          material={materials.Purple_Dark}
                        />
                      </group>
                      <group
                        position={[0, 0, -0.47]}
                        rotation={[-Math.PI / 2, 0, 0]}
                      >
                        <mesh
                          geometry={nodes.Object_102_1.geometry}
                          material={materials.Yellow}
                        />
                        <mesh
                          geometry={nodes.Object_103_1.geometry}
                          material={materials.Black}
                        />
                      </group>
                      <group
                        position={[0.11, 0.02, -0.92]}
                        rotation={[0.96, -0.32, -1.53]}
                        scale={1.41}
                      >
                        <mesh
                          geometry={nodes.Object_105_1.geometry}
                          material={materials.Purple_Dark}
                        />
                        <mesh
                          geometry={nodes.Object_106_1.geometry}
                          material={materials.Purple_Light}
                        />
                      </group>
                      <group
                        position={[0.03, 0.04, -0.93]}
                        rotation={[Math.PI / 2, -0.24, -1.45]}
                        scale={1.41}
                      >
                        <mesh
                          geometry={nodes.Object_108_1.geometry}
                          material={materials.Purple_Dark}
                        />
                        <mesh
                          geometry={nodes.Object_109_1.geometry}
                          material={materials.Purple_Light}
                        />
                      </group>
                      <group
                        position={[-0.05, 0.06, -0.93]}
                        rotation={[1.74, -0.29, -1.83]}
                        scale={1.41}
                      >
                        <mesh
                          geometry={nodes.Object_111_1.geometry}
                          material={materials.Purple_Dark}
                        />
                        <mesh
                          geometry={nodes.Object_112_1.geometry}
                          material={materials.Purple_Light}
                        />
                      </group>
                      <group
                        position={[-0.12, -0.03, -0.89]}
                        rotation={[-2.73, 0.75, 2.7]}
                        scale={1.41}
                      >
                        <mesh
                          geometry={nodes.Object_114_1.geometry}
                          material={materials.Purple_Dark}
                        />
                        <mesh
                          geometry={nodes.Object_115_1.geometry}
                          material={materials.Purple_Light}
                        />
                      </group>
                      <mesh
                        geometry={nodes.Object_96.geometry}
                        material={materials.Purple_Light}
                      />
                    </group>
                    <mesh
                      geometry={nodes.Object_94.geometry}
                      material={materials.Purple_Light}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_92.geometry}
                    material={materials.Purple_Light}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_90.geometry}
                  material={materials.Purple_Light}
                />
              </group>
              <mesh
                geometry={nodes.Object_88.geometry}
                material={materials.Purple_Light}
              />
            </group>
            <group
              position={[-1.02, -2.14, -0.03]}
              rotation={[Math.PI, -1.37, -2.57]}
              scale={1.29}
            >
              <group rotation={[0, -0.13, 0]}>
                <group rotation={[0, 0, -Math.PI / 2]}>
                  <group
                    position={[0, 0.48, 0]}
                    rotation={[Math.PI / 2, 1.34, -Math.PI]}
                    scale={[0.63, 0.9, 0.63]}
                  >
                    <group
                      position={[-0.03, 0, 0.01]}
                      rotation={[-Math.PI, 1.14, -Math.PI]}
                      scale={[1.59, 1.11, 1.59]}
                    >
                      <group
                        position={[0, 0, -0.64]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={1.06}
                      >
                        <mesh
                          geometry={nodes.Object_127_1.geometry}
                          material={materials.Purple_Dark}
                        />
                        <mesh
                          geometry={nodes.Object_128_1.geometry}
                          material={materials.Purple_Light}
                        />
                      </group>
                      <group
                        position={[0, 0, -0.28]}
                        rotation={[Math.PI / 2, 0, -Math.PI]}
                        scale={0.66}
                      >
                        <mesh
                          geometry={nodes.Object_130_1.geometry}
                          material={materials.Yellow}
                        />
                        <mesh
                          geometry={nodes.Object_131_1.geometry}
                          material={materials.Purple_Light}
                        />
                      </group>
                      <mesh
                        geometry={nodes.Object_125_1.geometry}
                        material={materials.Purple_Light}
                      />
                    </group>
                    <mesh
                      geometry={nodes.Object_123_1.geometry}
                      material={materials.Purple_Light}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_121_1.geometry}
                    material={materials.Purple_Light}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_119.geometry}
                  material={materials.Purple_Light}
                />
              </group>
              <mesh
                geometry={nodes.Object_117.geometry}
                material={materials.Purple_Light}
              />
            </group>
            <group
              position={[1.02, -2.14, -0.03]}
              rotation={[-2.78, 1.24, -1.34]}
              scale={1.29}
            >
              <group rotation={[0.23, -0.39, -1.46]}>
                <group
                  position={[-0.03, 0.82, 0]}
                  rotation={[1.52, 0.34, -3]}
                  scale={[0.63, 0.9, 0.63]}
                >
                  <group
                    position={[0.03, 0, 0.01]}
                    rotation={[Math.PI, -1.16, Math.PI]}
                    scale={[1.59, 1.11, 1.59]}
                  >
                    <group
                      position={[0, 0, -0.28]}
                      rotation={[Math.PI / 2, 0, -Math.PI]}
                      scale={0.66}
                    >
                      <group
                        position={[-0.01, 0.59, 0]}
                        rotation={[0, 0, -2.99]}
                        scale={1.61}
                      >
                        <mesh
                          geometry={nodes.Object_146_1.geometry}
                          material={materials.Purple_Dark}
                        />
                        <mesh
                          geometry={nodes.Object_147_1.geometry}
                          material={materials.Purple_Light}
                        />
                      </group>
                      <mesh
                        geometry={nodes.Object_143_1.geometry}
                        material={materials.Yellow}
                      />
                      <mesh
                        geometry={nodes.Object_144_1.geometry}
                        material={materials.Purple_Light}
                      />
                    </group>
                    <mesh
                      geometry={nodes.Object_141_1.geometry}
                      material={materials.Purple_Light}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_139_1.geometry}
                    material={materials.Purple_Light}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_137_1.geometry}
                  material={materials.Purple_Light}
                />
              </group>
              <mesh
                geometry={nodes.Object_135.geometry}
                material={materials.Purple_Light}
              />
              <mesh
                geometry={nodes.Object_133.geometry}
                material={materials.Purple_Light}
              />
            </group>
            <group
              position={[0.97, -1.34, -0.09]}
              rotation={[2.93, 1.35, -3.12]}
            >
              <group rotation={[Math.PI, 0, Math.PI / 2]}>
                <group
                  position={[0, 0.64, 0.01]}
                  rotation={[2.12, -0.07, 1.63]}
                >
                  <group
                    position={[0, 0, -0.47]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <group
                      position={[-0.03, 0.47, 0.12]}
                      rotation={[Math.PI, 1.32, -Math.PI / 2]}
                    >
                      <mesh
                        geometry={nodes.Object_160_1.geometry}
                        material={materials.Purple_Dark}
                      />
                    </group>
                    <group
                      position={[0, 0.32, 0.01]}
                      rotation={[Math.PI / 2, Math.PI / 2, 0]}
                    >
                      <mesh
                        geometry={nodes.Object_162_1.geometry}
                        material={materials.Purple_Light}
                      />
                    </group>
                    <group
                      position={[0.11, 0.42, -0.03]}
                      rotation={[-1.11, 0.53, 2.81]}
                      scale={1.41}
                    >
                      <mesh
                        geometry={nodes.Object_164_1.geometry}
                        material={materials.Purple_Dark}
                      />
                      <mesh
                        geometry={nodes.Object_165_1.geometry}
                        material={materials.Purple_Light}
                      />
                    </group>
                    <group
                      position={[0.05, 0.47, 0.06]}
                      rotation={[-2.98, -0.29, -1.83]}
                      scale={1.41}
                    >
                      <mesh
                        geometry={nodes.Object_167_1.geometry}
                        material={materials.Purple_Dark}
                      />
                      <mesh
                        geometry={nodes.Object_168_1.geometry}
                        material={materials.Purple_Light}
                      />
                    </group>
                    <group
                      position={[-0.11, 0.45, 0.02]}
                      rotation={[2.58, 0.21, -1.59]}
                      scale={1.41}
                    >
                      <mesh
                        geometry={nodes.Object_170_1.geometry}
                        material={materials.Purple_Dark}
                      />
                      <mesh
                        geometry={nodes.Object_171_1.geometry}
                        material={materials.Purple_Light}
                      />
                    </group>
                    <group
                      position={[-0.03, 0.47, 0.04]}
                      rotation={[2.66, 0, -1.59]}
                      scale={1.41}
                    >
                      <mesh
                        geometry={nodes.Object_173_1.geometry}
                        material={materials.Purple_Dark}
                      />
                      <mesh
                        geometry={nodes.Object_174_1.geometry}
                        material={materials.Purple_Light}
                      />
                    </group>
                    <mesh
                      geometry={nodes.Object_157_1.geometry}
                      material={materials.Yellow}
                    />
                    <mesh
                      geometry={nodes.Object_158_1.geometry}
                      material={materials.Black}
                    />
                  </group>
                  <group scale={[0.63, 0.9, 0.63]}>
                    <mesh
                      geometry={nodes.Object_176_1.geometry}
                      material={materials.Purple_Light}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_155_1.geometry}
                    material={materials.Purple_Light}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_153_1.geometry}
                  material={materials.Purple_Light}
                />
              </group>
              <mesh
                geometry={nodes.Object_151.geometry}
                material={materials.Purple_Light}
              />
              <mesh
                geometry={nodes.Object_149.geometry}
                material={materials.Purple_Light}
              />
            </group>
            <group
              position={[-0.76, 0.65, 0.25]}
              rotation={[-1.53, Math.PI / 2, 0]}
              scale={[-0.04, 0.02, 0.04]}
            >
              <mesh
                geometry={nodes.Object_178.geometry}
                material={materials.Grey}
              />
            </group>
            <group
              position={[0.76, 0.65, 0.25]}
              rotation={[-1.53, Math.PI / 2, 0]}
              scale={[-0.04, 0.02, 0.04]}
            >
              <mesh
                geometry={nodes.Object_180.geometry}
                material={materials.Grey}
              />
            </group>
            <group
              position={[-0.76, -0.09, 0.26]}
              rotation={[-1.53, Math.PI / 2, 0]}
              scale={[-0.04, 0.02, 0.04]}
            >
              <mesh
                geometry={nodes.Object_182.geometry}
                material={materials.Grey}
              />
            </group>
            <group
              position={[0.76, -0.09, 0.26]}
              rotation={[-1.53, Math.PI / 2, 0]}
              scale={[-0.04, 0.02, 0.04]}
            >
              <mesh
                geometry={nodes.Object_184.geometry}
                material={materials.Grey}
              />
            </group>
            <group
              position={[-0.17, -0.95, 0.25]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.08}
            >
              <mesh
                geometry={nodes.Object_186.geometry}
                material={materials.material_0}
              />
            </group>
            <group
              position={[0.04, -1.21, 0.25]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.18}
            >
              <mesh
                geometry={nodes.Object_188.geometry}
                material={materials.material_0}
              />
            </group>
            <group
              position={[0.34, -0.99, 0.26]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.15}
            >
              <mesh
                geometry={nodes.Object_190.geometry}
                material={materials.material_0}
              />
            </group>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.Yellow}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.Black}
            />
          </group>
          <group position={[1.11, -1.35, 0]}>
            <mesh
              geometry={nodes.Object_192.geometry}
              material={materials.Beige}
            />
            <mesh
              geometry={nodes.Object_193.geometry}
              material={materials.Grey}
            />
            <mesh
              geometry={nodes.Object_194.geometry}
              material={materials.White}
            />
            <mesh
              geometry={nodes.Object_195.geometry}
              material={materials.Green}
            />
            <mesh
              geometry={nodes.Object_196.geometry}
              material={materials.Black}
            />
          </group>
          <group
            position={[1.88, -1.44, 0.63]}
            rotation={[0, 0, -1.4]}
            scale={[0.29, 0.45, 0.29]}
          >
            <mesh
              geometry={nodes.Object_198.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_199.geometry}
              material={materials.Metal_Red}
            />
            <mesh
              geometry={nodes.Object_200.geometry}
              material={materials.Black}
            />
          </group>
          <group
            position={[1.88, -1.44, 0.47]}
            rotation={[0, 0, -1.4]}
            scale={[0.29, 0.45, 0.29]}
          >
            <mesh
              geometry={nodes.Object_202.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_203.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_204.geometry}
              material={materials.White}
            />
          </group>
          <group
            position={[1.88, -1.44, 0.18]}
            rotation={[0, 0, -1.4]}
            scale={[0.29, 0.45, 0.29]}
          >
            <mesh
              geometry={nodes.Object_206.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_207.geometry}
              material={materials.Metal_Red}
            />
            <mesh
              geometry={nodes.Object_208.geometry}
              material={materials.Black}
            />
          </group>
          <group
            position={[1.88, -1.44, 0.02]}
            rotation={[0, 0, -1.4]}
            scale={[0.29, 0.45, 0.29]}
          >
            <mesh
              geometry={nodes.Object_210.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_211.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_212.geometry}
              material={materials.White}
            />
          </group>
          <group
            position={[1.89, -1.51, -0.55]}
            rotation={[0, 0, -1.4]}
            scale={[0.29, 0.45, 0.29]}
          >
            <mesh
              geometry={nodes.Object_214.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_215.geometry}
              material={materials.Metal_Red}
            />
            <mesh
              geometry={nodes.Object_216.geometry}
              material={materials.Black}
            />
          </group>
          <group
            position={[1.89, -1.51, -0.72]}
            rotation={[0, 0, -1.4]}
            scale={[0.29, 0.45, 0.29]}
          >
            <mesh
              geometry={nodes.Object_218.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_219.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_220.geometry}
              material={materials.White}
            />
          </group>
          <group
            position={[1.92, -1.68, 0.63]}
            rotation={[0, 0, -1.4]}
            scale={[0.29, 0.45, 0.29]}
          >
            <mesh
              geometry={nodes.Object_222.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_223.geometry}
              material={materials.Metal_Red}
            />
            <mesh
              geometry={nodes.Object_224.geometry}
              material={materials.Black}
            />
          </group>
          <group
            position={[1.92, -1.68, 0.47]}
            rotation={[0, 0, -1.4]}
            scale={[0.29, 0.45, 0.29]}
          >
            <mesh
              geometry={nodes.Object_226.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_227.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_228.geometry}
              material={materials.White}
            />
          </group>
          <group
            position={[1.92, -1.68, 0.18]}
            rotation={[0, 0, -1.4]}
            scale={[0.29, 0.45, 0.29]}
          >
            <mesh
              geometry={nodes.Object_230.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_231.geometry}
              material={materials.Metal_Red}
            />
            <mesh
              geometry={nodes.Object_232.geometry}
              material={materials.Black}
            />
          </group>
          <group
            position={[1.92, -1.68, 0.02]}
            rotation={[0, 0, -1.4]}
            scale={[0.29, 0.45, 0.29]}
          >
            <mesh
              geometry={nodes.Object_234.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_235.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_236.geometry}
              material={materials.White}
            />
          </group>
          <group position={[1.82, -1.37, -0.3]} rotation={[0, 0, 0.17]}>
            <mesh
              geometry={nodes.Object_238.geometry}
              material={materials.Grey}
            />
          </group>
          <group
            position={[1.78, -1.35, -0.76]}
            rotation={[-0.65, -0.1, -1.44]}
            scale={[0.22, 0.15, 0.22]}
          >
            <mesh
              geometry={nodes.Object_240.geometry}
              material={materials.Metal}
            />
          </group>
          <group
            position={[1.85, -1.81, -0.76]}
            rotation={[-0.16, -0.03, -1.4]}
            scale={[0.22, 0.15, 0.22]}
          >
            <mesh
              geometry={nodes.Object_242.geometry}
              material={materials.Metal}
            />
          </group>
          <group
            position={[1.78, -1.35, 0.76]}
            rotation={[-0.98, -0.14, -1.48]}
            scale={[0.22, 0.15, 0.22]}
          >
            <mesh
              geometry={nodes.Object_244.geometry}
              material={materials.Metal}
            />
          </group>
          <group
            position={[1.85, -1.81, 0.76]}
            rotation={[0.58, 0.09, -1.43]}
            scale={[0.22, 0.15, 0.22]}
          >
            <mesh
              geometry={nodes.Object_246.geometry}
              material={materials.Metal}
            />
          </group>
          <group
            position={[1.54, -1.25, 0.58]}
            rotation={[-Math.PI, 0, -0.21]}
            scale={[-0.04, 0.02, 0.04]}
          >
            <mesh
              geometry={nodes.Object_248.geometry}
              material={materials.Grey}
            />
          </group>
          <group
            position={[0.69, -1.44, 0.58]}
            rotation={[-Math.PI, 0, -0.21]}
            scale={[-0.04, 0.02, 0.04]}
          >
            <mesh
              geometry={nodes.Object_250.geometry}
              material={materials.Grey}
            />
          </group>
          <group
            position={[1.54, -1.25, -0.59]}
            rotation={[-Math.PI, 0, -0.21]}
            scale={[-0.04, 0.02, 0.04]}
          >
            <mesh
              geometry={nodes.Object_252.geometry}
              material={materials.Grey}
            />
          </group>
          <group
            position={[0.69, -1.44, -0.59]}
            rotation={[-Math.PI, 0, -0.21]}
            scale={[-0.04, 0.02, 0.04]}
          >
            <mesh
              geometry={nodes.Object_254.geometry}
              material={materials.Grey}
            />
          </group>
          <group
            position={[0.86, -1.3, 0.47]}
            rotation={[0, 0, 0.22]}
            scale={[0.52, 0.59, 0.52]}
          >
            <mesh
              geometry={nodes.Object_256.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_257.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_258.geometry}
              material={materials.Grey}
            />
          </group>
          <group
            position={[1.09, -1.25, 0.47]}
            rotation={[0, 0, 0.22]}
            scale={[0.52, 0.59, 0.52]}
          >
            <mesh
              geometry={nodes.Object_260.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_261.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_262.geometry}
              material={materials.Grey}
            />
          </group>
          <group
            position={[1.33, -1.19, 0.47]}
            rotation={[0, 0, 0.22]}
            scale={[0.52, 0.59, 0.52]}
          >
            <mesh
              geometry={nodes.Object_264.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_265.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_266.geometry}
              material={materials.White}
            />
          </group>
          <group
            position={[0.86, -1.3, 0.22]}
            rotation={[0, 0, 0.22]}
            scale={[0.52, 0.59, 0.52]}
          >
            <mesh
              geometry={nodes.Object_268.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_269.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_270.geometry}
              material={materials.Grey}
            />
          </group>
          <group
            position={[1.09, -1.25, 0.22]}
            rotation={[0, 0, 0.22]}
            scale={[0.52, 0.59, 0.52]}
          >
            <mesh
              geometry={nodes.Object_272.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_273.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_274.geometry}
              material={materials.Grey}
            />
          </group>
          <group
            position={[1.33, -1.19, 0.22]}
            rotation={[0, 0, 0.22]}
            scale={[0.52, 0.59, 0.52]}
          >
            <mesh
              geometry={nodes.Object_276.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_277.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_278.geometry}
              material={materials.White}
            />
          </group>
          <group
            position={[0.86, -1.3, -0.02]}
            rotation={[0, 0, 0.22]}
            scale={[0.52, 0.59, 0.52]}
          >
            <mesh
              geometry={nodes.Object_280.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_281.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_282.geometry}
              material={materials.Grey}
            />
          </group>
          <group
            position={[1.09, -1.25, -0.02]}
            rotation={[0, 0, 0.22]}
            scale={[0.52, 0.59, 0.52]}
          >
            <mesh
              geometry={nodes.Object_284.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_285.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_286.geometry}
              material={materials.Grey}
            />
          </group>
          <group
            position={[1.33, -1.19, -0.02]}
            rotation={[0, 0, 0.22]}
            scale={[0.52, 0.59, 0.52]}
          >
            <mesh
              geometry={nodes.Object_288.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_289.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_290.geometry}
              material={materials.White}
            />
          </group>
          <group position={[1.24, -1.17, -0.34]} rotation={[0, 0, 0.25]}>
            <mesh
              geometry={nodes.Object_292.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[1.88, -1.44, 0.63]}
            rotation={[0, 0, -1.4]}
            scale={[0.29, 0.45, 0.29]}
          >
            <mesh
              geometry={nodes.Object_294.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Object_295.geometry}
              material={materials.Purple_Dark}
            />
          </group>
          <group
            position={[1.83, -1.48, -0.3]}
            rotation={[0, 0, -1.4]}
            scale={[0.29, 0.45, 0.29]}
          >
            <mesh
              geometry={nodes.Object_297.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Object_298.geometry}
              material={materials.Purple_Dark}
            />
          </group>
          <group
            position={[1.88, -1.44, 0.47]}
            rotation={[0, 0, -1.4]}
            scale={[0.29, 0.45, 0.29]}
          >
            <mesh
              geometry={nodes.Object_300.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Object_301.geometry}
              material={materials.Purple_Dark}
            />
          </group>
          <group position={[1.94, -1.68, -0.2]} rotation={[0, 0, -1.4]}>
            <mesh
              geometry={nodes.Object_303.geometry}
              material={materials.Grey}
            />
            <mesh
              geometry={nodes.Object_304.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_305.geometry}
              material={materials.Purple_Dark}
            />
          </group>
          <group position={[1.94, -1.68, -0.36]} rotation={[0, 0, -1.4]}>
            <mesh
              geometry={nodes.Object_307.geometry}
              material={materials.Grey}
            />
            <mesh
              geometry={nodes.Object_308.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_309.geometry}
              material={materials.Purple_Dark}
            />
          </group>
          <group position={[1.94, -1.68, -0.62]} rotation={[0, 0, -1.4]}>
            <mesh
              geometry={nodes.Object_311.geometry}
              material={materials.Grey}
            />
            <mesh
              geometry={nodes.Object_312.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_313.geometry}
              material={materials.Purple_Dark}
            />
          </group>
          <group position={[1.9, -1.47, -0.27]} rotation={[0, 0, -1.4]}>
            <mesh
              geometry={nodes.Object_315.geometry}
              material={materials.Grey}
            />
            <mesh
              geometry={nodes.Object_316.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_317.geometry}
              material={materials.Purple_Dark}
            />
          </group>
          <group
            position={[1.8, -1.37, -0.55]}
            rotation={[Math.PI / 2, 0.13, -Math.PI / 2]}
            scale={0.06}
          >
            <mesh
              geometry={nodes.Object_319.geometry}
              material={materials.material_0}
            />
          </group>
          <group position={[2.07, -1.41, 0.63]}>
            <mesh
              geometry={nodes.Object_321.geometry}
              material={materials.Purple_Dark}
            />
          </group>
          <group position={[2.02, -1.45, -0.3]}>
            <mesh
              geometry={nodes.Object_323.geometry}
              material={materials.Purple_Dark}
            />
          </group>
          <group position={[2.07, -1.41, 0.47]}>
            <mesh
              geometry={nodes.Object_325.geometry}
              material={materials.Purple_Dark}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/robot.gltf");
