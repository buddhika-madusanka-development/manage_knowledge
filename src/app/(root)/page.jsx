import HeroSection from "@/components/common/HeroSection/HeroSection";
import SearchBar from "@/components/common/SearchBar";
import Tag from "@/components/common/Tag";
import Title from "@/components/common/Titles/Title";
import FavouriteYoutubeChanels from "@/components/UI/Home/FavoriteChanels/FavouriteYoutubeChanels";
import ReacentContentSection from "@/components/UI/Home/ReacentContentSectiion/ReacentContentSection";


export default function Home() {
    
  return (
    <div className="relative ">
      {/* hero section */}
      <section>
        <HeroSection />
      </section>

      {/* Favourite youtube chanels section */}
      <section className="youtube-channels mt-10">
        <FavouriteYoutubeChanels />
      </section>

      {/* Resent video content section */}
      <section className="recent-content-section mt-10">
        <ReacentContentSection />
      </section>
      
    </div>
  );
}
