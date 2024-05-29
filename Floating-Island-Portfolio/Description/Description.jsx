/* 
* Router:
- Router is a crucial component that enables navigation and routing within a single-page application. 
- It allows developers to create multiple pages or views that can be accessed through different URLs without the need to reload the entire page.

# npm install react-router-dom


* Routes:
- define the mapping between specific URLs and the components to be rendered when those URLs are accessed. 
- They act as a set of rules that determine which component should be displayed based on the current URL in the browser.

? improving search engine optimization (SEO) by providing clear URLs for each section of the application.



================================================================

* NavLink:
-  is a component provided by the React Router library that is used for creating navigation links in web applications.
- It is an extension of the standard HTML anchor tag (a) and is specifically designed for use in React applications to handle client-side routing.

- NavLink provides additional features compared to the traditional anchor tag, such as styling the active link based on the current URL, preventing the default behavior of reloading the page, and allowing for easy integration with React Router's routing capabilities.



================================================================

* React-three-fiber 
- is a React renderer for three.js.
- Build your scene declaratively with re-usable, self-contained components that react to state, are readily interactive and can participate in React's ecosystem.

# npm install @react-three/fiber
# npm install three @types/three @react-three/fiber  //using typescript, as well



================================================================

import { Canvas } from '@react-three/fiber';

* Canvas:
- to create and manage a WebGL-canvas within a React component, enabling the rendering of 3D scenes and animations using Three.js under the hood.




================================================================

import { Suspense } from 'react';

* Suspense:
- handle asynchronous operations such as "data fetching" or "code-splitting". 

- It allows developers to control the loading state of components that may have a delay in rendering their content.

- can create a better user experience by showing "loading-indicators" or "fallback-content" while waiting for data to be fetched or components to be loaded.



================================================================

* drei:
- whenever you rendering something within the Canvas it has to be a special 3D property
- so to turn jsx to 3D, we have to use react-three-drei
- A growing collection of useful helpers and fully functional, ready-made abstractions for @react-three/fiber.

- is a library that acts as a bridge between React and Three.js, a popular 3D graphics library. It provides React developers with a set of components and hooks that simplify the process of creating 3D scenes and animations within a React application.

# npm install @react-three/drei

Then:
import { Html } from '@react-three/drei';
? and wrap our code into    <Html></Html>



================================================================

* https://gltf.pmnd.rs/   | add animations to our meshes
- load glb-models into our Three.js scene
- turns .glb files into jsx component



================================================================

* Spring: to enable animations
- designed to facilitate the integration of "animations" and "transitions" into 3D scenes built with Three.js within a React application.
- a popular animation library for React

# npm install @react-spring/three

for example instead of having a static group of animations like this:
<group {...props} dispose={null}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.polySurface944_tree_body_0.geometry}
      material={materials.PaletteMaterial001}
    />
</group>

we can: 
import { a } from '@react-spring/three';

<a.group {...props} dispose={null}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.polySurface944_tree_body_0.geometry}
      material={materials.PaletteMaterial001}
    />
</a.group>

- now, this is an animated-group



================================================================

import { useFrame, useThree } from '@react-three/fiber';

* useFrame:
- This hook allows you to efficiently update and render animations within your Three.js scene. 

- By using `useFrame`, you can define functions that will be executed on every frame of the animation loop, enabling dynamic and interactive visual effects in your application.


* useThree:
- This hook provides access to essential Three.js elements such as the "renderer", "scene", "camera", and more. 

- With `useThree`, you can easily interact with and manipulate these components to customize your 3D scene according to your requirements.




================================================================

import { useGLTF } from '@react-three/drei';

* useGLTF:
- simplifies the process of loading 3D models in GLTF format into a Three.js scene within a React application.



================================================================

! handling ERRORs:

! Failed to parse source for import analysis because the content contains invalid JS syntax. You may need to install appropriate plugins to handle the .glb file format, or if it's an asset, add "** / *.glb" to `assetsInclude` in your configuration.

? go: vite.config.js   and add:
- assetsInclude: ['** /*.glb'],


! Could not load /island.glb: Unexpected token '<', "<!DOCTYPE "... is not valid JSON

? go Island.jsx   and modify:
- const { nodes, materials } = useGLTF('/island.glb');

to this:

- const { nodes, materials } = useGLTF(islandScene);



================================================================

* <primitive object={} />     component
- is utilized to render raw objects or complex scenes "without converting" them into React components. 
- By using <primitive>, you can efficiently integrate external 3D models or assets into your 3D scene while maintaining performance and flexibility.
*/