A single answer button in the multiple-choice mini-game; the `state` prop drives reveal styling.

```jsx
<QuizOption index={0} state="selected" onClick={...}>Mua đồ ăn</QuizOption>
// after checking:
<QuizOption index={0} state="correct">Mua đồ ăn</QuizOption>
<QuizOption index={1} state="wrong">Dùng để vẽ</QuizOption>
<QuizOption index={2} state="dimmed">Dùng để uống</QuizOption>
```

States: `idle`, `selected` (green, pre-check), then on reveal `correct` (✓), `wrong` (✗ red), `dimmed` (faded others). Stack with ~11px gap.
