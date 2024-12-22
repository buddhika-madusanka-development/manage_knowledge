import Footer from '@/Components/layouts/Footer/Footer'
import Header from '@/Components/layouts/Header/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>

        {/* Include Header */}
        <Header />
        
        <div className='w-11/12 mx-auto'>
            {/* Include Children content */}
            {children}
        </div>

        <div className='mt-auto'>
            {/* Include Footer */}
            <Footer />
        </div>
        
    </div>
  )
}

export default layout