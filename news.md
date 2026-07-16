---
layout: default
title: News
description: News and updates from USC IMPACT LAB.
permalink: /news/
---

<section class="subpage-hero section-band">
  <div class="subpage-hero-inner">
    <p class="eyebrow">News</p>
    <h1>News</h1>
    <p>
      Updates from USC IMPACT LAB, including publications, project milestones,
      student achievements, opportunities, and lab announcements.
    </p>
  </div>
</section>

<section class="section news-page" aria-label="News items">
  <div class="news-list">
    {% for item in site.data.news %}
      {% assign news_anchor = item.date | date: "%Y-%m-%d" | append: "-" | append: item.title | slugify %}
      <article class="news-card-full" id="{{ news_anchor }}">
        {% if item.image %}
          <figure{% if item.image_fit == "contain" %} class="image-contain"{% endif %}>
            <a class="news-image-link" href="{{ item.image | relative_url }}">
              <img src="{{ item.image | relative_url }}" alt="{{ item.alt | default: item.title }}">
            </a>
          </figure>
        {% endif %}
        <div class="news-card-content">
          <time datetime="{{ item.date }}">{{ item.date | date: "%b %-d, %Y" }}</time>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description | default: item.summary }}</p>
          {% if item.links %}
            <div class="news-card-links">
              {% for link in item.links %}
                <a href="{{ link.url }}">{{ link.label }}</a>
              {% endfor %}
            </div>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>
