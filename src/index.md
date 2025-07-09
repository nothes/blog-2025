---
title: Musings and Mumblings
layout: main.liquid
---

{% assign blogs = collections.blog | reverse %}
{% for post in blogs  %}

[{{ post.data.title }}]( {{ post.url}} ) <span class="byline">
{{ post.data.date | date_to_string: "ordinal", "US"  }}
</span>

<span class="excerpt">

{% excerpt post %}

</span>

{% endfor %}

[Browse by tag](/tags/)