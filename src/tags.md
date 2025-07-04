---
title: Tags Index
layout: main.liquid
---
<!-- this is the tag index list-->
# Tags




NO FILTERS
{% assign collectionKeys = collections | getKeys %}
all the keys: {{collectionKeys}}

{% for someTag in collections  %}
{{ someTag }}
{% for item in someTag %}
{{ item }}
{% endfor %}
{% endfor %}


GET KEYS FILTER
{% for tag in collections | getKeys %}
{{ tag }} 
{% endfor %}


