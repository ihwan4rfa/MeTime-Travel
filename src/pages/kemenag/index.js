import React from 'react'
import Navbar from '@/components/Elements/Navbar'
import Header from '@/components/Elements/Header'

const index = () => {
  return (
    <div className='flex flex-col w-screen h-screen bg-gray-100'>
      <Navbar />
      <Header />
    </div>
  )
}

export default index
