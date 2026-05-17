---
layout: default
title: People
description: Meet the USC IMPACT LAB team.
permalink: /people/
---

<section class="subpage-hero section-band">
  <div class="subpage-hero-inner">
    <p class="eyebrow">People</p>
    <h1>People</h1>
    <p>
      USC IMPACT LAB brings together researchers working on intelligent machines, AI agents,
      autonomous systems, and future engineering missions.
    </p>
  </div>
</section>

<section class="section people-page" aria-label="People lists by type">
  <nav class="people-jump-bar" aria-label="Jump to people section">
    <a href="#lab-members-title">Lab Members</a>
    <a href="#collaborators-title">Collaborators</a>
    <a href="#former-lab-members-title">Former Lab Members</a>
  </nav>

  {% assign lab_members = site.data.people | where: "group", "current" %}
  {% assign former_members = site.data.people | where: "group", "alumni" %}

  <section class="people-type-section" aria-labelledby="lab-members-title">
  <div class="section-heading">
    <p class="eyebrow">Team</p>
    <h2 id="lab-members-title">Lab members</h2>
  </div>

  <div class="people-grid people-page-grid">
    {% for person in lab_members %}
      <article class="person-card">
        {% if person.image %}
          {% if person.profile_url %}
            <a class="person-photo-link" href="{{ person.profile_url | relative_url }}" aria-label="Open {{ person.name }} profile">
              <img class="person-photo" src="{{ person.image | relative_url }}" alt="{{ person.name }}">
            </a>
          {% else %}
            <img class="person-photo" src="{{ person.image | relative_url }}" alt="{{ person.name }}">
          {% endif %}
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
    {% endfor %}
  </div>
  </section>

  <section class="people-type-section" aria-labelledby="collaborators-title">
  <div class="section-heading">
    <p class="eyebrow">Industry</p>
    <h2 id="collaborators-title">Collaborators</h2>
  </div>

  <div class="sponsor-grid collaborator-grid">
    {% for collaborator in site.data.collaborators %}
      <article class="sponsor-card">
        {% if collaborator.url %}
          <a class="sponsor-logo-link" href="{{ collaborator.url }}" aria-label="Visit {{ collaborator.name }} site">
        {% endif %}
          <div class="sponsor-logo-wrap{% if collaborator.images.size > 1 %} sponsor-logo-group{% endif %}">
            {% for image in collaborator.images %}
              <img src="{{ image | relative_url }}" alt="{{ collaborator.name }} logo">
            {% endfor %}
          </div>
        {% if collaborator.url %}
          </a>
        {% endif %}
        <h3>{{ collaborator.short_name }}</h3>
        <p>{{ collaborator.name }}</p>
      </article>
    {% endfor %}
  </div>
  </section>

  <section class="people-type-section people-alumni" aria-labelledby="former-lab-members-title">
  <div class="section-heading">
    <p class="eyebrow">Alumni</p>
    <h2 id="former-lab-members-title">Former lab members</h2>
  </div>

  <div class="people-grid people-page-grid">
    {% for person in former_members %}
      <article class="person-card">
        {% if person.image %}
          {% if person.profile_url %}
            <a class="person-photo-link" href="{{ person.profile_url | relative_url }}" aria-label="Open {{ person.name }} profile">
              <img class="person-photo" src="{{ person.image | relative_url }}" alt="{{ person.name }}">
            </a>
          {% else %}
            <img class="person-photo" src="{{ person.image | relative_url }}" alt="{{ person.name }}">
          {% endif %}
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
    {% endfor %}
  </div>
  </section>
</section>
