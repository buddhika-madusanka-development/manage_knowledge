import React from 'react'

const HighlitedTitile = ({title, highlightText}) => {
  return (
    <div>
      <h1 className='text-4xl font-bold'>{title} <span className='text-primary'>{highlightText}</span></h1>
    </div>
  )
}

export default HighlitedTitile