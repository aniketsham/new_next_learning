import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MovingCard from "@/components/MovingCard";
import StickyScrollDemo from "@/components/StickyScrollDemo";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <StickyScrollDemo/>
      <MovingCard/>
      <UpcomingWebinar/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
