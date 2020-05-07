---
layout: page
---

<img src="/images/xkcd_comic.jpg" alt="xkcd comic">

<br>

**Welcome!**

This is my minimal color-less site where I would like to share thoughts/rants/brain dumps about my works in the [blog]({{ "blog" | relative_url }}) section. The main topics will be *real time rendering*, *Unreal Engine*, and *C++/Python*.

Check out my job experiences and education in the [about me]({{ "about" | relative_url }}) and the [portfolio]({{ "portfolio" | relative_url }}) pages.

<br>

### Contacts

#### Email

<a class="u-email" href="mailto:{{ site.email }}">{{ site.email }}</a>

#### Social

<div>{%- include social.html -%}</div>


<div id='canvas-holder' style="position:relative; width: 100%;"></div>

<script src="/js/lib/three.min.js"></script>
<script src="/js/testScene.js"></script>
