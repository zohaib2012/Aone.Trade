
// // import React from 'react'

// import { Link } from "react-router-dom"

// const TradingPlatformHero = () => {


//   return (
//     <div>


//       <div className="relative">
//         {/* Video Section */}
//         <div className="relative h-screen w-full overflow-hidden">
//           {/* Video for larger screens */}
//           <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover hidden md:block">
//             <source src="public/Aonetrade.webm" type="video/mp4" />
//           </video>

//           {/* Fallback image for mobile */}
//           <div className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden" style={{ backgroundImage: 'url("public/Aonetrade.webm")' }}></div>

//           {/* Overlay content */}
//           <div className="absolute inset-0 flex flex-col justify-between z-10">
//             {/* Top content (logos) */}
//             <div className="flex justify-between items-start p-3">
//               <img className='w-32 h-32 mx-44 my-24' src="public/A-One - Logo-02.svg" alt="error" />
// <div className="felx items-center">
  
//               <div className="text-white mt-24 text-2xl font-semibold">Boost Your Trade</div>
//               <div className="text-white  text-5xl font-semibold">upto a 10% Equity Reward!</div>
// </div>
              
//               <img className='w-80 h-80 mx-28' src="https://direct-website.azureedge.net/assets/img/svelte-home/hero/5-stars-banner-logos-inverted.svg" alt="" />
//             </div>

//             {/* Bottom content (heading and button) */}
//             <div className='flex  justify-between pb-44'>
//               <h1 className='mx-28 text-3xl text-white font-semibold'>
//                 The Worlds
//                 <div className=' text-white text-7xl font-bold'>
//                   Number One Broker <span className='bg-red-500 w-10'></span>
//                 </div>
//               </h1>
//               <Link to={"/register"}>
//               <button className='w-36  mx-44 h-12 rounded-3xl bg-blue-500 hover:scale-110 text-white'>
//                 Trade Like A Pro!
//               </button>
//               </Link>
//             </div>

//             <div>

//             </div>

//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default TradingPlatformHero





import React from 'react'
import { Link } from "react-router-dom"

const TradingPlatformHero = () => {
  return (
    <div>
      <div className="relative">
        {/* Video Section */}
        <div className="relative h-[600px] w-full overflow-hidden">
          {/* Video for larger screens */}
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover hidden md:block">
            <source src="frontend/public/Aonetradevideo.mp4" type="video/mp4" />
          </video>

          {/* Fallback image for mobile */}
          <div className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden" style={{ backgroundImage: 'url("public/Aonetrade.webm")' }}></div>

          {/* Dark overlay to improve text visibility on mobile */}
          <div className="absolute inset-0 bg-black opacity-30 md:opacity-10"></div>

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-between z-10">
            {/* Top content (logos) - Responsive for mobile */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start p-3">
              {/* Logo - Centered on mobile */}
              <img 
                className='w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-44 my-6 md:my-24' 
                src="/public/landingpagelogo.svg" 
                alt="logo" 
              />
              
              {/* Center text - Centered on mobile */}
              <div className="flex flex-col items-center md:items-start mt-4 md:mt-24">
                <div className="text-white text-xl md:text-2xl font-semibold text-center md:text-left">
                  Boost Your Trade
                </div>
                <div className="text-white text-3xl md:text-5xl font-semibold text-center md:text-left">
                  upto a 10% Equity Reward!
                </div>
              </div>
              
              {/* Stars image - Hidden on mobile, visible on larger screens */}
              <img 
                className='hidden md:block w-80 h-80 mx-28' 
                src="https://direct-website.azureedge.net/assets/img/svelte-home/hero/5-stars-banner-logos-inverted.svg" 
                alt="" 
              />
            </div>

            {/* Bottom content - Stack vertically on mobile */}
            <div className='flex flex-col md:flex-row items-center md:justify-between pb-16 md:pb-44'>
              {/* Heading - Centered on mobile */}
              <h1 className='text-center md:text-left mx-4 md:mx-28 mb-8 md:mb-0'>
                <div className='text-2xl md:text-3xl text-white font-semibold'>
                  The Worlds
                </div>
                <div className='text-4xl md:text-7xl text-white font-bold'>
                  Number One Broker <span className='bg-red-500 w-10'></span>
                </div>
              </h1>
              
              {/* Button - Full width on mobile */}
              <Link to={"/register"} className="w-full px-6 md:px-0 md:w-auto">
                <button className='w-full md:w-36 h-12 rounded-3xl bg-blue-500 hover:scale-110 text-white md:mx-44'>
                  Trade Like A Pro!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradingPlatformHero