---
layout: default
title: People
description: Meet the USC IMPACT LAB team.
permalink: /people/
---

<section class="subpage-hero section-band">
  <div class="subpage-hero-inner">
    <p class="eyebrow">People</p>
    <h1>Lab members</h1>
    <p>
      USC IMPACT LAB brings together researchers working on intelligent machines, AI agents,
      autonomous systems, and future engineering missions.
    </p>
  </div>
</section>

<section class="section" aria-labelledby="current-members-title">
  <div class="section-heading">
    <p class="eyebrow">Team</p>
    <h2 id="current-members-title">Current members</h2>
  </div>

  <div class="people-grid people-page-grid">
    {% for person in site.data.people %}
      {% if person.group == 'current' %}
        <article class="person-card">
          {% if person.image %}
            <img class="person-photo" src="{{ person.image | relative_url }}" alt="{{ person.name }}">
          {% else %}
            <div class="avatar">{{ person.initials }}</div>
          {% endif %}
          <h3>{{ person.name }}</h3>
          <p>{{ person.role }}</p>
          {% if person.office %}
            <p class="person-meta">Office: {{ person.office }}</p>
          {% endif %}
          <a href="{{ person.url }}">{{ person.link_label }}</a>
        </article>
      {% endif %}
    {% endfor %}
  </div>
</section>

<section class="section people-alumni" aria-labelledby="alumni-title">
  <div class="section-heading">
    <p class="eyebrow">Alumni</p>
    <h2 id="alumni-title">Former members</h2>
  </div>

  <div class="people-grid people-page-grid">
    {% for person in site.data.people %}
      {% if person.group == 'alumni' %}
        <article class="person-card">
          {% if person.image %}
            <img class="person-photo" src="{{ person.image | relative_url }}" alt="{{ person.name }}">
          {% else %}
            <div class="avatar">{{ person.initials }}</div>
          {% endif %}
          <h3>{{ person.name }}</h3>
          <p>{{ person.role }}</p>
          {% if person.office %}
            <p class="person-meta">Office: {{ person.office }}</p>
          {% endif %}
          <a href="{{ person.url }}">{{ person.link_label }}</a>
        </article>
      {% endif %}
    {% endfor %}
  </div>
</section>
