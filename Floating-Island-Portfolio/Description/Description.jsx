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



================================================================

const { gl, viewport } = useThree();

* gl:
- refers to the WebGL context, which is essential for rendering 3D graphics in a web browser. 
- WebGL (Web Graphics Library) is a JavaScript API that allows for high-performance 3D graphics rendering within the browser.


* viewport:
- represents the area of the screen where the 3D scene will be rendered.
- It includes properties like width, height, and aspect ratio, which are crucial for setting up the camera and adjusting the rendering output to fit the screen size.



================================================================

* const clientX = e.touches ? e.touches[0].clientX : e.clientX;
-  this line of code determines whether the user interaction is via touch (on a touchscreen device) or via a mouse click.

- e.touches:  
  Represents an array of touch points associated with the event.

- e.touches[0].clientX:  
  Retrieves the X coordinate of the first touch point relative to the viewport.

- e.clientX: 
  Retrieves the X coordinate of the mouse pointer relative to the viewport.



* const delta = (clientX - lastX.current) / viewport.width;
- adjusting the rotation of an element based on user interaction

- calculated as the difference between the current `clientX` position and the previous `lastX.current` position, divided by the `viewport.width`.
- This calculation determines the amount of change in the horizontal position of the pointer relative to the viewport width.


* islandRef.current.rotation.y += delta * 0.01 * Math.PI;
- the rotation speed is adjusted based on the horizontal movement of the pointer.


* if (Math.abs(rotationSpeed.current) < 0.001) {}
- returns the absolute value of a number. 
- In this case, it is being used to ensure that the rotation speed is always positive, regardless of its initial sign.





=================================================================
=================================================================
=================================================================
* in                     Island.jsx
* useFrame section:
* const normalizedRotation =
*       ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);


? Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
- The goal is to ensure that the rotation value remains within a specific range to prevent potential issues with "very large" or "negative rotation values".


* rotation % (2 * Math.PI) 
  - calculates the remainder of the rotation value when divided by 2 * Math.PI
  
  This essentially wraps the rotation value around once it reaches a full circle (360 degrees) so that it stays within the range of "0" to 2 * Math.PI.


* (rotation % (2 * Math.PI)) + 2 * Math.PI 
  - adds   2 * Math.PI to the result from step 1.
  - This is done to ensure that the value "remains positive" and within the range of 0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.

* ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) 
  - applies another modulo operation to the value obtained in step 2. 
  - This step guarantees that the value always stays within the range of 0 to 2 * Math.PI, which is "equivalent to a "full-circle" in radians".




*  const dampingFactor = 0.95;
- is commonly used in the context of simulating physical interactions such as damping(adjustment) or friction within animations or simulations.

- When set to a value like 0.95, it determines the rate at which an object's velocity decreases over time, effectively controlling how quickly an object comes to rest or slows down.


* e.stopPropagation();
- used to prevent the further propagation(spreading) of an event through the DOM tree. 
- you are stopping this propagation process, ensuring that the event does not reach higher-level elements.

- When an event occurs on an element, such as a mouse click or key press, it typically triggers handlers on that element and then bubbles up through its parent elements. 




=================================================================
=================================================================

* in                     Plane.jsx

* const { actions } = useAnimations(animations, ref);
- useAnimations, enables you to work with animations in a Three.js environment. 

- This hook allows you to control and manage animations applied to 3D models within your scene. 

- provides functionality such as playing, pausing, stopping, or adjusting the speed of animations on your 3D models. 




=================================================================
=================================================================

* in                     Sky.jsx

* useFrame((_, delta) => {}
-  'delta' is a crucial parameter that helps maintain "smooth" and "consistent" animations in your 3D scene by adjusting the rotation speed based on the time elapsed between frames. 

- It ensures that animations are frame-rate independent and provide a more realistic and visually appealing user experience.




=================================================================
=================================================================

* in                     Bird.jsx


*/