---
layout: post
title: 'Pittsburgh Landslide Susceptibility Mapping (ML + Remote Sensing)'
thumbnail: /assets/img/projects/proj-3/thumbnail.jpg
---

## Overview

Built a reproducible **urban-scale landslide susceptibility mapping pipeline** for Pittsburgh using open data — integrating terrain analysis, remote sensing, and machine learning to generate a city-wide probability map. Pittsburgh is one of the more landslide-prone cities in the U.S., with risk shaped by steep slopes, river valley erosion, geology, and urban development disturbance. The goal: a spatial risk product that can support prioritized inspection, risk screening, and mitigation planning.

---

## What I Did

- **Feature engineering** — derived terrain and environmental predictors (slope, curvature, NDVI, distance to roads/rivers) from USGS DEM; extracted binary vegetation cover from NAIP imagery via supervised classification in QGIS, achieving **77% classification accuracy**.
- **CNN classification** — developed a CNN-based land cover model in **PyTorch**, building a full ML pipeline: data loading, preprocessing, train/val/test splitting, and evaluation to enhance feature extraction from remote sensing imagery.
- **Geospatial ML pipeline** — integrated DEM, NAIP imagery, OpenStreetMap roads/rivers, and **5,642 historical landslide records** to train a landslide susceptibility model and produce spatial risk maps across Pittsburgh.
- **Incremental model comparison** — evaluated four models of increasing complexity (baseline slope/vegetation → +NDVI/curvature → +road/river distance → Random Forest), with ROC–AUC improving from **0.774 → 0.879** as features were added.

---

## Data & Tools

**Data:** USGS DEM · NAIP imagery · OpenStreetMap (roads, rivers) · Pittsburgh boundary · 5,642 historical landslide records
**Tools:** Python (PyTorch, scikit-learn, GeoPandas, rasterio) · QGIS · Random Forest · CNN

---

## Key Results

- Final Random Forest model reached **AUC = 0.879**, capturing non-linear interactions between terrain, vegetation, and proximity factors.
- High-susceptibility zones concentrated on **steep slopes, road-cut areas, and river valley margins** — consistent with local landslide formation mechanisms.
- The incremental feature addition approach clearly demonstrated each factor's contribution to model discriminability.

---

## Key Figures

**Terrain & Vegetation Predictors**

<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:12px; margin: 1rem 0 1.5rem;">

  <a href="{{ '/assets/img/projects/proj-3/slope.jpg' | relative_url }}" target="_blank" rel="noopener"
     style="text-decoration:none; color:inherit; border:1px solid #eee; border-radius:10px; overflow:hidden;">
    <img src="{{ '/assets/img/projects/proj-3/slope.jpg' | relative_url }}" alt="Slope" style="width:100%; display:block;">
    <div style="padding:8px 12px; font-size:0.9rem; opacity:0.85;">Slope</div>
  </a>

  <a href="{{ '/assets/img/projects/proj-3/curvature.jpg' | relative_url }}" target="_blank" rel="noopener"
     style="text-decoration:none; color:inherit; border:1px solid #eee; border-radius:10px; overflow:hidden;">
    <img src="{{ '/assets/img/projects/proj-3/curvature.jpg' | relative_url }}" alt="Curvature" style="width:100%; display:block;">
    <div style="padding:8px 12px; font-size:0.9rem; opacity:0.85;">Curvature</div>
  </a>

  <a href="{{ '/assets/img/projects/proj-3/ndvi.jpg' | relative_url }}" target="_blank" rel="noopener"
     style="text-decoration:none; color:inherit; border:1px solid #eee; border-radius:10px; overflow:hidden;">
    <img src="{{ '/assets/img/projects/proj-3/ndvi.jpg' | relative_url }}" alt="NDVI" style="width:100%; display:block;">
    <div style="padding:8px 12px; font-size:0.9rem; opacity:0.85;">NDVI</div>
  </a>

  <a href="{{ '/assets/img/projects/proj-3/vegetation_baresoil.jpg' | relative_url }}" target="_blank" rel="noopener"
     style="text-decoration:none; color:inherit; border:1px solid #eee; border-radius:10px; overflow:hidden;">
    <img src="{{ '/assets/img/projects/proj-3/vegetation_baresoil.jpg' | relative_url }}" alt="Vegetation / Bare Soil classification" style="width:100%; display:block;">
    <div style="padding:8px 12px; font-size:0.9rem; opacity:0.85;">Vegetation / Bare Soil (supervised classification)</div>
  </a>

</div>

**Model Performance & Validation**

<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:12px; margin: 1rem 0 1.5rem;">

  <a href="{{ '/assets/img/projects/proj-3/model_ROC.jpg' | relative_url }}" target="_blank" rel="noopener"
     style="text-decoration:none; color:inherit; border:1px solid #eee; border-radius:10px; overflow:hidden;">
    <img src="{{ '/assets/img/projects/proj-3/model_ROC.jpg' | relative_url }}" alt="ROC curves for all models" style="width:100%; display:block;">
    <div style="padding:8px 12px; font-size:0.9rem; opacity:0.85;">ROC curves — incremental model comparison (AUC 0.774 → 0.879)</div>
  </a>

  <a href="{{ '/assets/img/projects/proj-3/comparisonwith_officialmap.jpg' | relative_url }}" target="_blank" rel="noopener"
     style="text-decoration:none; color:inherit; border:1px solid #eee; border-radius:10px; overflow:hidden;">
    <img src="{{ '/assets/img/projects/proj-3/comparisonwith_officialmap.jpg' | relative_url }}" alt="Comparison with official landslide map" style="width:100%; display:block;">
    <div style="padding:8px 12px; font-size:0.9rem; opacity:0.85;">Susceptibility map vs. official landslide inventory</div>
  </a>

</div>

---

## Limitations & Future Work

Known limitations include incomplete landslide inventory, uncertainty from pseudo-absence sampling, and temporal/resolution inconsistencies across data sources. Future improvements could incorporate rainfall, soil properties, geology, and spatial cross-validation to improve reliability.
