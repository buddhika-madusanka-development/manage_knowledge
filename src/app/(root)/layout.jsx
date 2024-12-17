import React from 'react'

// import components from components folder
import Header from '@/components/layouts/Header/Header'
import Footer from '@/components/layouts/Footer/Footer'

const layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        {/* Insert header into root route group */}
        <Header />

        <div className="w-11/12 mx-auto">
          {children}
        </div>

        {/* Insert footer into root route group */}
        <Footer />
    </div>
  )
}

export default layout