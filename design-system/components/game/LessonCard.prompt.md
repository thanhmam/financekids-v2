A lesson tile for the learning feed — emoji icon, title/subtitle, age chip, XP footer, and a Học/Chơi-lại CTA.

```jsx
<LessonCard
  lesson={{ title: "Tiền là gì?", subtitle: "Hiểu về tiền", ageGroup: "6-8", icon: "💰", bgColor: "#FFF9E6", xp: 100 }}
  onClick={() => go(lesson.id)}
/>
<LessonCard completed lesson={lesson} />
```

`completed` turns the card green with a ✓ corner. Age chip color is keyed off `lesson.ageGroup` (6-8 / 9-12 / 13-16). Lay out in a 2-col (mobile) or 3-col (desktop) grid.
