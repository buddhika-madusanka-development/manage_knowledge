import Link from "next/link";
import React from "react";

const Tag = ({ tag }) => {
  return (
    tag && (
        <div className="bg-base border-tag border-[1px] px-5 py-1 rounded-full text-mute hover:bg-accent-color hover:text-base duration-500">
          <Link href={`/Contents/${tag.toLowerCase()}`}>{tag}</Link>
        </div>
    )    
  );
};

export default Tag;
