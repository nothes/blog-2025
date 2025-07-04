---
title: Tags Index
layout: main.liquid
---
<!-- this is the tag index list-->
# Tags

{% for tag in collections | getKeys | filterTags | sortAlphabetically %}
{% assign tagName = tag[0] %}
<!--this returns an array, the first object is the name, the rest are... the posts? -->
{% capture tagUrl %}/tags/{{ tagName }}/{% endcapture %}
	<li><a href="{{ tagUrl }}" class="post-tag">{{ tagName }}</a></li>
{% endfor %}

