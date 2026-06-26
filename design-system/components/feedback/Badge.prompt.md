Achievement tile for the profile badge grid — earned (tinted emoji) or locked (greyed 🔒 + "Bí ẩn").

```jsx
<Badge emoji="🌱" label="Bắt đầu" tone="green" />
<Badge emoji="⭐" label="500 XP" tone="gold" />
<Badge label="Bí ẩn" earned={false} />
```

Tones tint the earned state: `green`, `gold`, `streak`, `violet`, `info`, `life`. Omit `label` for a bare tile. `size` defaults to 56.
