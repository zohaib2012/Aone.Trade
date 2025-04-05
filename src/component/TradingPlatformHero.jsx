
// import React from 'react'

import { Link } from "react-router-dom"

const TradingPlatformHero = () => {


  return (
    <div>


      <div className="relative">
        {/* Video Section */}
        <div className="relative h-screen w-full overflow-hidden">
          {/* Video for larger screens */}
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover hidden md:block">
            <source src="public/Aonetrade.webm" type="video/mp4" />
          </video>

          {/* Fallback image for mobile */}
          <div className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden" style={{ backgroundImage: 'url("public/Aonetrade.webm")' }}></div>

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-between z-10">
            {/* Top content (logos) */}
            <div className="flex justify-between items-start p-3">
              <img className='w-32 h-32 mx-44 my-24' src="public/A-One - Logo-02.svg" alt="error" />
<div className="felx items-center">
  
              <div className="text-white mt-24 text-2xl font-semibold">Boost Your Trade</div>
              <div className="text-white  text-5xl font-semibold">upto a 10% Equity Reward!</div>
</div>
              
              <img className='w-80 h-80 mx-28' src="https://direct-website.azureedge.net/assets/img/svelte-home/hero/5-stars-banner-logos-inverted.svg" alt="" />
            </div>

            {/* Bottom content (heading and button) */}
            <div className='flex  justify-between pb-44'>
              <h1 className='mx-28 text-3xl text-white font-semibold'>
                The Worlds
                <div className=' text-white text-7xl font-bold'>
                  Number One Broker <span className='bg-red-500 w-10'></span>
                </div>
              </h1>
              <Link to={"/register"}>
              <button className='w-36  mx-44 h-12 rounded-3xl bg-blue-500 hover:scale-110 text-white'>
                Trade Like A Pro!
              </button>
              </Link>
            </div>

            <div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default TradingPlatformHero


