import React from 'react'
import coinImage from '../assets/th.jpeg'

const Home = () => {
  return (
    <main className='w-full min-h-[89vh] bg-black text-white'>
      <div className='h-[85vh] flex items-center justify-center flex-col'>
        <img src={coinImage} className='min-w-[25%] bg-black rounded-full grayscale animate-bounce-custom' alt="" />
        <span className='mt-10 text-3xl font-sans'><b> Crypto Tracker </b></span>
      </div>
    </main>
  )
}

export default Home