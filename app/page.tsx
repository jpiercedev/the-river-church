import DailyVerse from "@/components/DailyVerse";
import Hero from "@/components/Hero";
import MissionIntro from "@/components/MissionIntro";
import LatestMessage from "@/components/LatestMessage";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Location from "@/components/Location";
import PlanYourVisit from "@/components/PlanYourVisit";

export default function HomePage() {
  return (
    <>
      <DailyVerse />
      <Hero />
      <MissionIntro />
      <LatestMessage />
      <Events />
      <Team />
      <Location />
      <PlanYourVisit />
    </>
  );
}
