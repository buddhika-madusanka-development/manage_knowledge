import React from 'react'

// import components from components folder
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        {/* Insert header into root route group */}
        <Header />

        {children}

        {/* Insert footer into root route group */}
        <Footer />
    </div>
  )
}

export default layout