---
layout: default
title: Projects
description: Ongoing and previous research projects at USC IMPACT LAB.
permalink: /projects/
---

<section class="subpage-hero section-band">
  <div class="subpage-hero-inner">
    <p class="eyebrow">Projects</p>
    <h1>Research projects</h1>
    <p>
      Current and previous projects that translate IMPACT LAB research into
      intelligent engineering design, manufacturing, robotics, and autonomous
      systems.
    </p>
  </div>
</section>

<section class="section projects-page" aria-label="Research projects">
  <nav class="research-jump-bar" aria-label="Jump to project section">
    <a href="#ongoing-projects">Ongoing projects</a>
    <a href="#previous-projects">Previous projects</a>
  </nav>

  <div class="research-intro">
    <p>
      Our projects bring together AI, computing technologies, engineering
      modeling, and human-centered workflows to support design, analysis,
      manufacturing, robotic operations, and autonomous engineering systems.
    </p>
  </div>

  <section class="project-type-section" id="ongoing-projects" aria-labelledby="ongoing-projects-title">
    <h2 id="ongoing-projects-title">Ongoing projects</h2>
    <div class="project-overview-list">
      {% assign ongoing_projects = site.data.projects | where: "category", "ongoing" %}
      {% for project in ongoing_projects %}
        <article class="project-overview-card" id="{{ project.title | slugify }}">
          <div class="project-overview-content">
            <p class="eyebrow">{{ project.tag }}</p>
            <h3>{{ project.title }}</h3>
            <p>{{ project.summary }}</p>
            {% if project.links %}
              <div class="project-overview-links">
                {% for link in project.links %}
                  <a href="{{ link.url }}">{{ link.label }}</a>
                {% endfor %}
              </div>
            {% endif %}
          </div>
          <figure>
            <img src="{{ project.image | relative_url }}" alt="{{ project.alt }}">
          </figure>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="project-type-section" id="previous-projects" aria-labelledby="previous-projects-title">
    <h2 id="previous-projects-title">Previous projects</h2>
    <div class="project-overview-list">
      {% assign previous_projects = site.data.projects | where: "category", "previous" %}
      {% for project in previous_projects %}
        <article class="project-overview-card" id="{{ project.title | slugify }}">
          <div class="project-overview-content">
            <p class="eyebrow">{{ project.tag }}</p>
            <h3>{{ project.title }}</h3>
            <p>{{ project.summary }}</p>
            {% if project.links %}
              <div class="project-overview-links">
                {% for link in project.links %}
                  <a href="{{ link.url }}">{{ link.label }}</a>
                {% endfor %}
              </div>
            {% endif %}
          </div>
          <figure>
            <img src="{{ project.image | relative_url }}" alt="{{ project.alt }}">
          </figure>
        </article>
      {% endfor %}
    </div>
  </section>
</section>
