import DailyVerse from "@/components/DailyVerse";
import Hero from "@/components/Hero";
import MissionIntro from "@/components/MissionIntro";
import LatestMessage from "@/components/LatestMessage";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import BookBanner from "@/components/BookBanner";
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
      <Gallery />
      <BookBanner />
      <Location />
      <PlanYourVisit />
    </>
  );
}
