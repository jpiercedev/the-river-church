import { dailyVerse } from "@/lib/content";

export default function DailyVerse() {
  return (
    <div className="daily-verse">
      <div className="verse-label">Daily Verse</div>
      <div className="verse-copy">
        <span>&ldquo;{dailyVerse.text}&rdquo;</span>
        <b>{dailyVerse.reference}</b>
      </div>
    </div>
  );
}
