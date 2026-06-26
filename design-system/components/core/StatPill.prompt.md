Rounded header stat chip — streak, xu balance, or XP.

```jsx
<StatPill kind="streak" value={7} />
<StatPill kind="xu" value={1250} />
<StatPill kind="xp" value={3200} />
```

`kind` picks the preset icon + tint (`streak` orange ▲, `xu` gold coin, `xp` gold ★). Numbers are auto vi-VN formatted. Override `icon`/`bg`/`border` for a custom pill.
