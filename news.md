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
      <article class="news-card-full">
        {% if item.image %}
          <figure>
            <img src="{{ item.image | relative_url }}" alt="{{ item.alt | default: item.title }}">
          </figure>
        {% endif %}
        <div class="news-card-content">
          <time datetime="{{ item.date }}">{{ item.date | date: "%b %-d, %Y" }}</time>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description | default: item.summary }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
