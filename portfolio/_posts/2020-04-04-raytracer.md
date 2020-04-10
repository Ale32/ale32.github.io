---
layout:     post
title:      Recursive Raytracer in C++
permalink:  portfolio/raytracer
date:       2020-04-04 11:00:00 +0100
category:   portfolio
---

Here is a classic.

During my studies I have developed a recursive raytracing renderer in C++.

The program render a scene from a formatted file (similar to an *.obj* file) and write color information into an image.
The input file was custom for educational purposes: it contained all the geometry information and materials parameters as well.

I've created everything from scratch: the objects and scene structure, the camera, the file parser, the material logic and the recursive algorithm.
No external library was used, due to the eductional scope of the project.

Here is an image rendered by the application:

<img src="/images/portfolio/raytracer_render.png" alt="Recursive Raytracer">