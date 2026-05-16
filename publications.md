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

  {% assign journal_papers = site.data.publications | where: "type", "journal" %}
  {% assign book_chapters = site.data.publications | where: "type", "book_chapter" %}
  {% assign conference_papers = site.data.publications | where: "type", "conference" %}
  {% assign other_papers = site.data.publications | where: "type", "other" %}

  <section class="publication-type-section" aria-labelledby="journal-papers-title">
    <h3 id="journal-papers-title">Journal Papers</h3>
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
    <h3 id="book-chapters-title">Book Chapters</h3>
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
    <h3 id="conference-papers-title">Conference Papers</h3>
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
    <h3 id="other-papers-title">Other Papers</h3>
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
