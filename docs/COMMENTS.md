# Code Commentary

Technical notes extracted from source files for reference.

---

## `src/app/App.tsx`

### Active section tracking
The scroll handler uses a **40% viewport threshold** (`rect.top <= window.innerHeight * 0.4`) to determine the active section. A section becomes "active" when its top edge crosses the 40% mark from the top of the viewport — earlier than center — which feels more natural during downward scrolling.

### Scroll progress bar
The progress bar uses `transition-none` (no CSS transition) on the width property. This avoids the bar lagging behind the actual scroll position, which would be distracting if a transition were applied.

---

## `src/app/components/page-landing.tsx`

### Section list stagger delay
Each section row in the landing navigation list uses a staggered entrance animation. The delay is calculated as `ANIMATION.landingNavBase + i * ANIMATION.landingNavStagger` (1900ms base + 100ms per item). This creates a cascade effect where items appear one after another rather than all at once.

### Entrance animations
All animated elements use `opacity-0 animate-appear` with `animationDelay` set via inline style. The `animate-appear` class is defined in `src/styles/index.css` and uses a keyframe that transitions from opacity 0 to 1. Delays are sourced from `ANIMATION` constants in `src/lib/constants.ts`.

---

## `src/app/components/page-home.tsx`

### AnimatedCounter trigger
`AnimatedCounter` counts up from 0 to the target value when the element enters the viewport. It uses an `IntersectionObserver` internally (see `src/app/components/animated-counter.tsx`). The counter only triggers once — subsequent viewport re-entries don't reset it.

### `statItems` memoization
`statItems` is memoized with `useMemo` depending only on `lang`. The array contains translated strings and is recreated only when the language changes, avoiding unnecessary re-renders of the stats grid.

---

## `src/app/components/page-about.tsx` / `page-contact.tsx`

### `contactItems` memoization
Both pages define `contactItems` arrays containing JSX icons and translated labels. These are wrapped in `useMemo` to avoid recreating the array (and its JSX elements) on every render. The dependency is `[lang]` only.

---

## `src/styles/index.css`

### Dot-grid: two separate CSS classes
The dot-grid background is implemented as **two separate CSS classes** (`dot-grid-light` and `dot-grid-dark`) rather than one class with a CSS variable for the dot color. This is a workaround for a Safari bug where CSS custom properties (`var(--color)`) are not interpolated correctly inside `radial-gradient()` definitions. Using two hardcoded classes avoids the issue entirely.
