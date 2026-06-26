XuXu's coin mascot — use anywhere the brand needs a friendly face (headers, onboarding, empty states, quiz prompts, result screens).

```jsx
<XuXuMascot size={96} mood="excited" />
<XuXuMascot size={40} />                 // inline header avatar, happy
<XuXuMascot size={130} mood="sad" />     // out-of-hearts modal
```

Moods: `happy` (default, gains blush + sparkle ≥80px), `excited` (star eyes — rewards), `sad` (flat eyes + tear). Pass `float` for the gentle idle bob. Pure CSS, scales to any `size`.
