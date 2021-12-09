---
layout: base.njk
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - navItem
permalink: /tags/{{ tag }}/
---
<h1>Pages tagged “{{ tag }}”</h1>

<ol>
{% set taglist = collections[ tag ] %}
{% for post in taglist | reverse %}
  <li><a href="{{ post.url | url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ol>