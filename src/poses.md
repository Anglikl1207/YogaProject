---
title: Poses
layout: base.njk
tags: [navItem]
---

# {{title}}


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