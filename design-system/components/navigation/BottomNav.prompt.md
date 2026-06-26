The mobile 5-tab bottom navigation bar. Position it inside a `position:relative` screen container (it pins to the bottom).

```jsx
<BottomNav active="home" onSelect={setRoute} />
```

Default tabs: home ⌂, explore ◆, tasks ▲ (orange), leaderboard ♛ (violet), profile (gold coin avatar). The active glyph tab fills with its accent; profile gains a green ring. Pass a custom `tabs` array to change them.
