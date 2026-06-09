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

<section class="section publications-page" aria-label="Publication lists">
  {% assign current_year = site.time | date: "%Y" | plus: 0 %}
  {% assign previous_year = current_year | minus: 1 %}
  {% assign recent_papers = site.data.publications | where_exp: "publication", "publication.year >= previous_year" | sort: "year" | reverse %}
  {% assign journal_papers = site.data.publications | where: "type", "journal" %}
  {% assign book_chapters = site.data.publications | where: "type", "book_chapter" %}
  {% assign conference_papers = site.data.publications | where: "type", "conference" %}
  {% assign other_papers = site.data.publications | where: "type", "other" %}

  <nav class="publication-jump-bar" aria-label="Jump to publication section">
    <a href="#recent-papers-title">Recent Papers</a>
    <a href="#journal-papers-title">Journal Papers</a>
    <a href="#book-chapters-title">Book Chapters</a>
    <a href="#conference-papers-title">Conference Papers</a>
    <a href="#other-papers-title">Other Papers</a>
  </nav>

  <section class="publication-type-section" aria-labelledby="recent-papers-title">
    <h1 id="recent-papers-title">Recent papers</h1>
    <div class="publication-list">
      {% for publication in recent_papers %}
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

  <section class="publication-type-section" aria-labelledby="journal-papers-title">
    <h1 id="journal-papers-title">Journal papers</h1>
    <div class="publication-list">
      {% for publication in journal_papers %}
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

  <section class="publication-type-section" aria-labelledby="book-chapters-title">
    <h1 id="book-chapters-title">Book chapters</h1>
    <div class="publication-list">
      {% for publication in book_chapters %}
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

  <section class="publication-type-section" aria-labelledby="conference-papers-title">
    <h1 id="conference-papers-title">Conference papers</h1>
    <div class="publication-list">
      {% for publication in conference_papers %}
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

  <section class="publication-type-section" aria-labelledby="other-papers-title">
    <h1 id="other-papers-title">Other papers</h1>
    <div class="publication-list">
      {% for publication in other_papers %}
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
</section>
