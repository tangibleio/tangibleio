import { useRef } from "react";
import { RGBELoader } from "three-stdlib";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  useFBO,
  Center,
  Text3D,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
} from "@react-three/drei";
import { MeshRefractionMaterial } from "./shaders/MeshRefractionMaterial";

export function App() {
  const text = "Tangible";
  const shadow = "#630b29";
  const autoRotate = true;
  const config = {
    clearcoat: 1,
    clearcoatRoughness: 0.5,
    uRefractPower: 2,
    uTransparent: 2.5,
    uIntensity: 1.3,
    uNoise: 0.05,
    gNoise: 0.05,
    uSat: 1.0,
    uColor: "#e91e63",
    gColor: "#000000",
  };

  return (
    <Canvas
      shadows
      orthographic
      camera={{ position: [-20, 0, 50], zoom: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <color attach="background" args={["#f2f2f5"]} />
      {/** The text and the grid */}
      <Text
        config={config}
        rotation={[-Math.PI / 4, 0, 0]}
        position={[0, 0, 5]}
      >
        {text}
      </Text>
      {/** Controls */}
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={-0.3}
        enableZoom={false}
        enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
      <Environment resolution={32}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <Lightformer
            intensity={10}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={4}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={20}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={10}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 2, 1]}
          />
          <Lightformer
            type="ring"
            intensity={10}
            rotation-y={Math.PI / 2}
            position={[-0.1, -1, -5]}
            scale={10}
          />
        </group>
      </Environment>
      <AccumulativeShadows
        temporal
        frames={100}
        color={shadow}
        colorBlend={5}
        toneMapped={true}
        alphaTest={1.1}
        opacity={0.5}
        scale={500}
        position={[1, -1, 2]}
      >
        <RandomizedLight
          amount={4}
          radius={10}
          ambient={0.5}
          intensity={1}
          position={[0, 10, -10]}
          size={15}
          mapSize={1024}
          bias={0.0001}
        />
      </AccumulativeShadows>
    </Canvas>
  );
}

function Text({
  children,
  config,
  font = "/Inter_Medium_Regular.json",
  ...props
}) {
  const ref = useRef();
  const fbo = useFBO(1024);
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );

  let oldBg;
  useFrame((state) => {
    // Hide the outer groups contents
    ref.current.visible = false;
    // Set render target to the local buffer
    state.gl.setRenderTarget(fbo);
    // Save the current background and set the HDR as the new BG
    // This is what creates the reflections
    oldBg = state.scene.background;
    state.scene.background = texture;
    // Render into the buffer
    state.gl.render(state.scene, state.camera);
    // Set old state back
    state.scene.background = oldBg;
    state.gl.setRenderTarget(null);
    ref.current.visible = true;
  });

  const { width, height } = useThree((state) => state.viewport);
  console.log(width, height);
  // screen aspect ratio
  const aspect = width / height;

  return (
    <>
      <group ref={ref}>
        <Center scale={[0.8, 0.9, 1.5]} front top {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={5.5 * aspect}
            letterSpacing={-0.175}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}
          >
            {children}
            {/** Pass the rendered buffer into the refraction shader */}
            <MeshRefractionMaterial uSceneTex={fbo.texture} {...config} />
          </Text3D>
        </Center>
      </group>
    </>
  );
}
