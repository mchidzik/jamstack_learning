---
title: Welcome
date: Created
layout: page

tags:
 - item1
 - item2

links:
 - { link: "http://aws.amazon.com", name: "AWS" }
 - { link: "http://www.hashicorp.com", name: "Hashicorp" }
---

# {{ title }}
**Date**: {{ page.date.toUTCString() }}

**By**: {{ pkg.author }}

The learning is on!

<ul>
  {% for item in tags %}
  <li>{{ item }}</li>
  {% endfor %}
</ul>

<div>
  {% for link in links %}
  <a href="{{ link.link }}">{{ link.name }}</a>
  {% endfor %}
</div>

<div>
  <a href="tools">Tools</a>
</div>