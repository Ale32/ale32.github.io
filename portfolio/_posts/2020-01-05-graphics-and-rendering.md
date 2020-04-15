---
layout:     portfolio-post
title:      Physically Based Shading in three.js
subtitle:   A glsl-es physical shader that works on web browser.
permalink:  /portfolio/graphics_and_rendering
date:       2020-01-05 11:00:00 +0100
category:   portfolio
thumbnail:  /images/portfolio/pbs.png
---

This is the work I’ve done as a thesis for my graduation in **Virtual Reality Programming and 3D Graphics**.

It consists in a **GLSL-ES** program used in a [three.js](https://threejs.org/) scene (revision 67, since this code was developed in late 2014) for web representation of a physically based shading model.

The goal of this was to study shading models from SIGGRAPH notes (most of them [here](https://blog.selfshadow.com/publications/s2013-shading-course/)) and to approach shaders development in order to implement the theory. I've learned a lot about physically based shading theory thanks to [Sébastien Lagarde articles](https://seblagarde.wordpress.com/2011/08/17/hello-world/). You can find some of code I've developend in my github [PBS_threejs](https://github.com/Ale32/PBS_threejs) repo. Back in 2014, the physical shader was not implemented in three.js.

Here is a video showing the application running on Chrome: [Physically Based Shading in Three.js](https://www.youtube.com/watch?v=eIMQb5TRfQg):

<iframe width="720" height="450" src="https://www.youtube.com/embed/eIMQb5TRfQg" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
