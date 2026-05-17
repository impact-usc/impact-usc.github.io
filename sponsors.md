---
layout: default
title: Sponsors
description: Current and past project sponsors of USC IMPACT LAB.
permalink: /sponsors/
---

<section class="subpage-hero section-band">
  <div class="subpage-hero-inner">
    <p class="eyebrow">Sponsors</p>
    <h1>Project sponsors</h1>
    <p>
      Current and past project sponsors who have supported USC IMPACT LAB research
      in intelligent engineering systems, autonomous systems, design methodology,
      and collaborative engineering.
    </p>
  </div>
</section>

<section class="section sponsors-page" aria-labelledby="sponsors-title">
  <div class="section-heading">
    <p class="eyebrow">Support</p>
    <h2 id="sponsors-title">Current and past project sponsors</h2>
  </div>

  <div class="sponsor-grid">
    {% for sponsor in site.data.sponsors %}
      <article class="sponsor-card">
        <div class="sponsor-logo-wrap{% if sponsor.images.size > 1 %} sponsor-logo-group{% endif %}">
          {% for image in sponsor.images %}
            <img src="{{ image | relative_url }}" alt="{{ sponsor.name }} logo">
          {% endfor %}
        </div>
        <h3>{{ sponsor.name }}</h3>
        {% if sponsor.url %}
          <a href="{{ sponsor.url }}">Visit sponsor site</a>
        {% endif %}
      </article>
    {% endfor %}
  </div>
</section>
