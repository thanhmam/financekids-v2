Rounded progress fill with the brand's inset white shine — lesson progress, daily goals, task completion.

```jsx
<ProgressBar value={64} />
<ProgressBar value={40} tone="streak" />
<ProgressBar value={80} tone="onDark" />   // on a dark (#15392A) card
```

`value` is 0–100. Tones: `green` (default), `streak`, `gems`, `onDark` (lightens the track for dark surfaces). Set `height` for chunkier bars.
