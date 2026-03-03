---
layout: post
title: 'Flood Risk & Megaproject Impacts — Mandalay, Myanmar (HEC-RAS 2D)'
thumbnail: /assets/img/projects/mandalay/thumbnail.jpg
---

## Overview
Built a **2D unsteady-flow HEC-RAS** model for the Mandalay–Amarapura reach of the Irrawaddy River to quantify inundation patterns across **5/10/20/50/100-year** return periods and evaluate how the **Amarapura Urban Development Project** (terrain modification/riverbank elevation) may redistribute flood risk and **increase flow velocity**. Land-use exposure was interpreted using a **Sentinel-2 supervised classification**.

<div style="text-align: center; margin: 1.5rem 0;">
  <a href="/assets/files/Dissertation_final.pdf" class="button" target="_blank" rel="noopener">View Full Dissertation (PDF)</a>
</div>

---

## What I did
- Developed a **2D unsteady-flow hydraulic model** in **HEC-RAS** for Mandalay–Amarapura.
- Validated simulated flood extents using observed flood events (flood footprint comparison).
- Estimated return-period peak flows using **Log-Pearson Type III** and generated synthetic hydrographs.
- Classified land use from **Sentinel-2 (10 m)** and analyzed inundation exposure by land cover.
- Simulated **megaproject terrain modification** scenarios and compared **before/after** inundation and velocity impacts.

---

## Data & Tools
**Data:** GRDC discharge (Sagaing station) · ALOS PALSAR DEM (12.5 m) · Sentinel-2 (10 m) · observed flood extent references  
**Tools:** HEC-RAS (2D) · ArcGIS Pro · Python/R (processing & charts)

---

## Key results
### Flood frequency (peak discharge)
Log-Pearson Type III peak discharges (m³/s):
- 5-year: **27,173.75**
- 10-year: **28,719.30**
- 20-year: **29,964.95**
- 50-year: **31,325.67**
- 100-year: **32,204.80**

### Return-period inundation change (5-yr vs 100-yr)
- **Urban Mandalay:** inundated area **9.36 → 12.2 km²**; flooded share **8.4% → 11.0%**
- **Urban Amarapura:** inundated area **3.76 → 3.91 km²**; flooded share **37.0% → 38.5%**

### Land-use classification quality
- Overall accuracy: **76%**
- Built-up classes performed strongly (e.g., buildings PA 89%; roads/tarmac PA 100%)

### Megaproject impacts (terrain modification)
- The modified project footprint becomes **less flood-prone** in simulations.
- Peak velocities approach **~4 m/s** under the megaproject scenario for the **20-year** event.
- For larger events (e.g., 50-year), terrain modification can **expand downstream inundation** and affect parts of urban Mandalay.

---

## Key figures (quick gallery)
<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:12px; margin-top: 1rem;">

  <a href="/assets/img/projects/mandalay/fig_model_domain.png" target="_blank" rel="noopener"
     style="text-decoration:none; color:inherit; border:1px solid #eee; border-radius:12px; overflow:hidden;">
    <img src="/assets/img/projects/mandalay/fig_model_domain.png" alt="Model domain" style="width:100%; display:block;">
    <div style="padding:10px 12px; font-size:0.95rem; opacity:0.85;">Model domain and study area (Mandalay–Amarapura)</div>
  </a>

  <a href="/assets/img/projects/mandalay/fig_return_period_extent_5yr_vs_100yr.png" target="_blank" rel="noopener"
     style="text-decoration:none; color:inherit; border:1px solid #eee; border-radius:12px; overflow:hidden;">
    <img src="/assets/img/projects/mandalay/fig_return_period_extent_5yr_vs_100yr.png" alt="Return period comparison" style="width:100%; display:block;">
    <div style="padding:10px 12px; font-size:0.95rem; opacity:0.85;">Flood extent comparison: 5-year vs 100-year</div>
  </a>

  <a href="/assets/img/projects/mandalay/fig_megaproject_before_after_inundation.png" target="_blank" rel="noopener"
     style="text-decoration:none; color:inherit; border:1px solid #eee; border-radius:12px; overflow:hidden;">
    <img src="/assets/img/projects/mandalay/fig_megaproject_before_after_inundation.png" alt="Megaproject before/after inundation" style="width:100%; display:block;">
    <div style="padding:10px 12px; font-size:0.95rem; opacity:0.85;">Megaproject scenario: inundation before vs after</div>
  </a>

  <a href="/assets/img/projects/mandalay/fig_megaproject_velocity_20yr.png" target="_blank" rel="noopener"
     style="text-decoration:none; color:inherit; border:1px solid #eee; border-radius:12px; overflow:hidden;">
    <img src="/assets/img/projects/mandalay/fig_megaproject_velocity_20yr.png" alt="Megaproject velocity (20-year)" style="width:100%; display:block;">
    <div style="padding:10px 12px; font-size:0.95rem; opacity:0.85;">Peak velocity under megaproject scenario (20-year event)</div>
  </a>

</div>

---

<div style="text-align: center; margin: 2rem 0;">
  <a href="/assets/files/Dissertation_final.pdf" class="button" target="_blank" rel="noopener">Read the Full Dissertation</a>
</div>