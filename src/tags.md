---
title: Tags Index
layout: main.liquid
---
<!-- this is the tag index list-->
# Tags

{% assign collectionKeys = collections | getKeys | filterTags | sortAlphabetically %}
{% for tag in  collectionKeys %}
{% capture tagUrl %}/tags/{{ tag }}/{% endcapture %}
	<li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}</a></li>
{% endfor %}