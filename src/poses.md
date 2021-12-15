---
title: Poses
layout: base.njk
tags: [navItem]
---
<header class="page-header">
  <h1 class="page-title">{{title}}</h1>
</header>



<section class="filterable">
  <div class="filters">
    <button class="button active" data-type="all">all</button>
    <button class="button" data-type="standing">standing</button>
    <button class="button" data-type="balancing">balancing</button>
    <button class="button" data-type="seated">seated</button>
    <button class="button" data-type="reclining">reclining</button>
  </div>
  <div class="cards">
    {%- for pose in collections.alphaList %}
      {% include "pose-card.njk" %}
    {%- endfor %}
  </div>
</section>



## All Poses
<ul>
  {%- for p in collections.alphaList %}
  <li>
  <a href="{{ p.url }}">
  {{ p.data.title }}
  </a>
  </li>
  {%- endfor %}
</ul>



<section class="standing">
  <h2>Standing</h2>
  <div class="posecard">
  {%- for pose in collections.standing %}
  {% include "pose-card.njk" %}
  {%- endfor %}
  </div>
</section>

<section class="seated">
  <h2>Seated</h2>
  <div class="posecard">
  {%- for pose in collections.seated %}
  {% include "pose-card.njk" %}
  {%- endfor %}
  </div>
</section>