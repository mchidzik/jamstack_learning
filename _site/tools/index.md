---
title: Tools
layout: page
---

# {{title}}

<div class="container mt-4">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
  {% for tool in tools %}
  <div class="col mb-4">
    <div class="card h-100" >
      <div class="card-body">
        <h5 class="card-title my-0">{{ tool.title | safe }}</h5>
        <p class="card-text">{{ tool.description | safe }}</p>
      </div>
    </div>
  </div>
  {% endfor %}
  </div>