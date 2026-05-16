---
layout: default
title: Publications
description: Publications from USC IMPACT LAB.
permalink: /publications/
---

<section class="subpage-hero section-band">
  <div class="subpage-hero-inner">
    <p class="eyebrow">Publications</p>
    <h1>Research publications</h1>
    <p>
      Selected papers, articles, and research outputs from USC IMPACT LAB.
    </p>
  </div>
</section>

<section class="section publications-page" aria-labelledby="publications-page-title">
  <div class="section-heading">
    <p class="eyebrow">Selected work</p>
    <h2 id="publications-page-title">Publications</h2>
  </div>

  <div class="publication-list">
    {% for publication in site.data.publications %}
      <article>
        <p class="pub-year">{{ publication.year }}</p>
        <h3>{{ publication.title }}</h3>
        <p class="pub-citation">
          {{ publication.citation }}
          {% if publication.links %}
            {% for link in publication.links %}
              <a class="pub-link-inline" href="{{ link.url }}">{{ link.label }}</a>
            {% endfor %}
          {% endif %}
        </p>
      </article>
    {% endfor %}
  </div>
</section>
