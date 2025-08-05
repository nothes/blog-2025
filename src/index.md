---
title: Musings and Mumblings
layout: main.liquid

pagination: 
    data: collections.blog
    size: 20
    reverse: true
---

{% assign blogs = pagination.items %}
{% for post in blogs  %}

[{{ post.data.title }}]( {{ post.url}} ) <span class="byline">
{{ post.data.date | date_to_string: "ordinal", "US"  }}
</span>

<span class="excerpt">

{% excerpt post %}

</span>

{% endfor %}

<a href="{{ pagination.href.first }}">First</a> <a href="{{ pagination.href.previous }}">Previous</a> <a href="{{ pagination.href.next }}">Next</a> <a href="{{ pagination.href.last }}">Last</a>

[Browse by tag](/tags/)