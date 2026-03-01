---
layout: post
title: 'Philadelphia Housing Prediction'
thumbnail: /assets/img/projects/proj-2/thumbnail.jpg
---
## Overview
Built and validated a Philadelphia housing price prediction pipeline using structural attributes, ACS neighborhood context, and engineered spatial accessibility features.

## What I did
- Cleaned **583,776** OPA property records and filtered to **25,585** sales records, then spatially joined tract-level ACS variables.
- Estimated and compared **4** linear model specifications; evaluated with **10-fold cross-validation**.
- Interpreted drivers (standardized coefficients) and ran diagnostics (residuals, QQ plot, Cook’s distance) to assess bias/outliers and limitations.

## Results
Best-performing model achieved **R² ≈ 0.612**, **MAE ≈ $81,139**, **RMSE ≈ $129,019**.

## Tools
R · regression modeling · feature engineering (buffers/KNN) · cross-validation · model diagnostics · interpretability

<a class="btn" href="https://musa-5080-fall-2025.github.io/portfolio-setup-sihan-yu429/assignments/midterm/Yu_Sihan_Appendix.html" target="_blank" rel="noopener">
  View Full Appendix
</a>