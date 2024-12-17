import React from "react";
import HighlitedTitile from "@/components/common/Titles/HighlitedTitile";
import YoutubeChannelCard from "@/components/layouts/YoutubeChannelCard/YoutubeChannelCard";

const FavouriteYoutubeChanels = () => {
  return (
    <div>
      <HighlitedTitile title="Favourite" highlightText="Youtube Channels" />
      <div className="chanel-cards mt-8 md:grid md:grid-cols-4 lg:grid-cols-5 gap-5">
        <YoutubeChannelCard
          name={"Javascript mastery"}
          link={"#"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur placeat nobis mollitia?"
          }
        />
        <YoutubeChannelCard />
        <YoutubeChannelCard />
        <YoutubeChannelCard />
        <YoutubeChannelCard />
      </div>
    </div>
  );
};

export default FavouriteYoutubeChanels;
