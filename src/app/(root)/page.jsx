import SearchBar from "@/components/common/SearchBar";
import Tag from "@/components/common/Tag";
import HighlitedTitile from "@/components/common/Titles/HighlitedTitile";
import Title from "@/components/common/Titles/Title";
import YoutubeChannelCard from "@/components/layouts/YoutubeChannelCard/YoutubeChannelCard";
import FavouriteYoutubeChanels from "@/components/UI/Home/FavoriteChanels/FavouriteYoutubeChanels";
import ReacentContentSection from "@/components/UI/Home/ReacentContentSectiion/ReacentContentSection";
import Image from "next/image";

export default function Home() {

  const tags = ['Python', 'Javascript', 'React Js', 'Tailwind CSS' ,'Next Js' ]
  
  return (
    <div className="relative ">
      {/* hero section */}
      <section>
        {/* bacground glow */}
        <div className="flex justify-center">
          <div className="h-[1000px] w-[1000px] top-[-200px] opacity-[9%] absolute z-0 bg-glow"></div>
        </div>

        {/* contents in hero section */}
        <div className="h-[500px] flex flex-col items-center mt-10 relative">
          <Image
            src={"/background_mesh.png"}
            width={1000}
            height={1000}
            alt="background mesh image"
            className="w-10/12 object-cover absolute"
          />

          {/* text content */}
          <div className="h-[1000px] hero-text-content z-50 flex flex-col items-center justify-center">
            <div className="w-3/5">
              <Title />

              {/* search bar */}
              <div className="mt-7 w-full">
                <SearchBar />
              </div>

              {/* Tag section */}
              <div className="flex gap-2 justify-center mt-5 flex-wrap">
                {
                  tags.map((tag,index) => (
                    <Tag key={index} tag={tag} />
                  ))
                }
              </div>
              
            </div>
          </div>
        </div>
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
