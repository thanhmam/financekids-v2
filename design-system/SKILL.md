---
name: xuxu-design
description: Use this skill to generate well-branded interfaces and assets for XuXu — a Duolingo-style gamified financial-literacy app for Vietnamese kids (6–16). Contains essential design guidelines, colors, type, fonts, the CSS coin mascot, and UI kit components for prototyping or production.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (token CSS under `tokens/`, component sources under `components/`, foundation specimen cards under `guidelines/`, and the interactive app recreation under `ui_kits/xuxu-app/`).

XuXu is a bright, chunky, kid-friendly Vietnamese product. Its hallmarks: a leaf-green primary (`#16C172`) + gold "xu" coin (`#FFC93C`) on a soft green canvas (`#F4F8EF`); rounded **Baloo 2** display type (weight 800) with **Nunito** body; the signature **"3D press"** buttons (solid no-blur colored drop-shadow that sinks on press); 4px card bottom borders; emoji + unicode glyphs as iconography; and the CSS-drawn **XuXu coin mascot**. All copy is warm, encouraging, second-person Vietnamese.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view — link `styles.css` and load `_ds_bundle.js`, then read components from `window.XuXuDesignSystem_72e90e` (see any `components/**/*.card.html`). If working on production code, copy the token CSS and component sources and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a few clarifying questions (audience, surface, fidelity, variations), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
