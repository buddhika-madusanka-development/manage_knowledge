import HighlitedTitile from '@/components/common/Titles/HighlitedTitile'
import YoutubeVideoCard from '@/components/layouts/YoutubeVideoCard/YoutubeVideoCard'
import React from 'react'

const ReacentContentSection = () => {
  return (
    <div>
        <HighlitedTitile title='Featured' highlightText='Youtube Contents' />

        <div className="youtube-card-section grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
            <YoutubeVideoCard />
            <YoutubeVideoCard />
            <YoutubeVideoCard />
            <YoutubeVideoCard />
        </div>
        
    </div>
  )
}

export default ReacentContentSection