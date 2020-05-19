---
layout:     portfolio-post
title:      Graphics and Rendering
subtitle:   "Personal projects I've done related to real time graphics and rendering: from C++ offline raytracers to OpenGL rendering engine."
permalink:  /portfolio/graphics_and_rendering
date:       2020-01-05 11:00:00 +0100
category:   portfolio
thumbnail:  /images/portfolio/pbs.png
comments:   false
---

### Physically Based Shading in three.js

This is the work I've done as a thesis for my graduation in **Virtual Reality Programming and 3D Graphics**.

It consists in a **GLSL-ES** program used in a [three.js](https://threejs.org/) scene (revision 67, since this code was developed in late 2014) for web representation of a physically based shading model.

The goal of this was to study shading models from SIGGRAPH notes (most of them [here](https://blog.selfshadow.com/publications/s2013-shading-course/)) and to approach shaders development in order to implement the theory. I've learned a lot about physically based shading theory thanks to [Sébastien Lagarde articles](https://seblagarde.wordpress.com/2011/08/17/hello-world/).

You can find some of code I've developend in my github [PBS_threejs](https://github.com/Ale32/PBS_threejs) repo. Back in 2014, the physical shader was not implemented in three.js.

Here is a video showing the application running on Chrome: [Physically Based Shading in Three.js](https://www.youtube.com/watch?v=eIMQb5TRfQg):

<iframe width="720" height="450" src="https://www.youtube.com/embed/eIMQb5TRfQg" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>

<br>
<hr>
<br>

### OpenGL Rendering Engine

I've contributed in some bits of a friend's - [Damiano Massarelli](https://damiano-massarelli.github.io/) - rendering engine called **SRE**.

The engine supports several features:

- Game Objects and Components
- Model loading (through Assimp)
- Scene Graph
- Event Listener
- Skeletal Animation
- Post processing effects: FXAA, SSAO, Motion Blur, Gamma Correction and Tone Mapping, Bloom
- Bump Mapping
- Shallow water rendering
- Particle Systems
- PBR Materials

Here is the github repo: [SRE](https://github.com/damiano-massarelli/sre).

<img src="https://raw.githubusercontent.com/damiano-massarelli/sre/master/readme/sponza_water.png" alt="SRE Rendering Engine">

<br>
<hr>
<br>

### Raytracer renderer from [Peter Shirley's mini books series](https://www.amazon.com/gp/product/B078MM5PZF?ref_=dbs_r_series&storeType=ebooks)

During my spare time I've written with a friend a raytracer inspired by the [Peter Shirley books](https://www.amazon.com/gp/product/B078MM5PZF?ref_=dbs_r_series&storeType=ebooks):

1. Ray Tracing in One Weekend
2. Ray Tracing - The Next Week
3. Ray Tracing - The Rest Of Your Life

The books are actually free, and they are a really good resource to understand from the basics of a good ray tracer to a bunch of techniques like anti aliasing, blur, transparency and volumetric rendering.

To improve the renderer performance, I've started implementing the [SIMD (Single instruction, multiple data)](https://en.wikipedia.org/wiki/SIMD) approach to speed up the algorithm.

Here is my [repo on GitHub](https://github.com/raytracingDevTeam/raytracing).

<img src="https://camo.githubusercontent.com/8856ff1dac19b09bfb7e3a2b10c395078865f369/68747470733a2f2f692e696d6775722e636f6d2f4b4c58314b76362e706e67" alt="Raytracing In One Weekend">

<br>
<hr>
<br>

### Recursive Raytracer in C++

Here is a classic. A C++ renderer that implements a raytracer for educational purposes.

The program render a scene from a formatted file (similar to an *.obj* file) and write color information into an image.
The input file was custom for educational purposes: it contained all the geometry information and materials parameters as well.

I've created everything from scratch: the objects and scene structure, the camera, the file parser, the material logic and the recursive algorithm.
No external library was used, due to the eductional scope of the project.

Here is an image rendered by the application:

<img src="/images/portfolio/raytracer_render.png" alt="Recursive Raytracer">