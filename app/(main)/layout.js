import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='container mx-auto my-32 px-10'>
      {children}
    </div>
  )
}

export default MainLayout
