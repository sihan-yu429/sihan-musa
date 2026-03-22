---
layout: post
title: 'Philadelphia Tree Planting Planning & Request Platform (Web GIS)'
thumbnail: /assets/img/projects/proj-5/thumbnail.jpg
---

## Overview

A capstone project with **UC Green**, a Philadelphia nonprofit, to design and build an **integrated Web GIS platform** that streamlines the entire urban tree planting workflow — from site eligibility screening to application routing — in one place. Previously, this process relied on fragmented tools and heavy manual review. My role covered system logic design, geospatial data integration, and translating urban forestry policy into an automated decision engine.

---

## What I Built

- **Interactive Mapbox front end** — map rendering, dynamic layer control, address/geocode search, map-based point selection, and tight integration with the planting request workflow.
- **PostGIS spatial back end** — multi-source spatial data integration, location-based eligibility validation, application record management, and workflow status tracking.
- **Policy-driven decision engine** — 15+ planting policy rules that automate site eligibility checks and applicant routing, enabling **80%+ of requests to be processed without manual review**.
- **React front-end architecture** — modular UI components orchestrating map interaction, eligibility validation, and application submission routing.
- **Unified geospatial data pipeline** — consolidated 10+ datasets into a standardized urban forestry pipeline, reducing duplicate reports and non-eligible site requests, improving operational efficiency by **~22%**.

---

## Tech Stack

**Front end:** React · Mapbox GL JS
**Back end:** PostgreSQL · PostGIS
**Infrastructure:** Google Cloud (designed for deployment & future handoff)
**Data:** 10+ geospatial datasets (city parcels, tree canopy, zoning, infrastructure, etc.)

---

## Platform Demo

**Map Exploration & Layer Control**
<div style="text-align:center; margin: 1rem 0 1.5rem;">
  <img src="{{ '/assets/img/projects/proj-5/explore_trees.gif' | relative_url }}" alt="Map exploration and tree layer control" style="width:100%; max-width:800px; border-radius:10px; border:1px solid #eee;">
</div>

**Planting Request & Application Workflow**
<div style="text-align:center; margin: 1rem 0 1.5rem;">
  <img src="{{ '/assets/img/projects/proj-5/request_form.gif' | relative_url }}" alt="Tree planting request form and eligibility routing" style="width:100%; max-width:800px; border-radius:10px; border:1px solid #eee;">
</div>

**PostGIS Back End & Data Pipeline**
<div style="text-align:center; margin: 1rem 0 1.5rem;">
  <img src="{{ '/assets/img/projects/proj-5/backend.gif' | relative_url }}" alt="Backend spatial queries and data pipeline" style="width:100%; max-width:800px; border-radius:10px; border:1px solid #eee;">
</div>

---

## Role & Context

**Organization:** UC Green · Philadelphia, PA
**Title:** Geospatial Data Analyst (Capstone)
**Period:** Jan 2026 – Present

This platform is designed to be handed off to UC Green for production deployment, replacing a manual, multi-tool process with a single scalable system accessible to both staff and residents.
