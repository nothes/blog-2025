---
title: NEW BLOG WHO DIS
layout: layout.liquid
---

I've not done this whole styling and design in a very long time -- this thing is bound to be ugly for awhile, in the grand tradition of such things. Plz Enjoy, Anyway. :P 

<ul>
{% for post in collections.blog %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
