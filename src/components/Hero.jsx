import React from 'react';
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon
} from '@heroicons/react/solid';
import bgImg from '../assets/cyber-bg.png';

const Hero = () => {
  return (
    <div name="home" className='w-full h-full bg-zinc-200
         flex flex-col justify-between'>
        
      <div className='grid md:grid-cols-2
           max-w-[1240px] m-auto-10 p-2'>

        {/* Left side */}
        <div className='flex flex-col justify-center
             md:items-start w-full px-2 py-8'>
            <p className='text-2xl '>
              Unique Sequencing & production
            </p>
            <h1 className='py-3 text-5xl
                md:text-7xl font-bold'>
              Cloud management
            </h1>
            <p className='text-2xl'>
              This is our tech brand.
            </p>
            <button className='py-3 px-6 
                    sm:w-[60%] my-4'>
              Get started
            </button>
        </div>

        {/* Right side */}
        <div>
          <img className='my-20 p-20 
          w-full mb-[-10]' 
          src={bgImg} alt="/" />
        </div>

        <div className='flex flex-col
        py-8 md:min-w-[748px] bottom-[5%] mx-1
        md:left-1/2 transform md:-translate-x-1/2
        bg-zinc-200 border border-slate-300 
        rounded-xl text-center shadow-xl lg:absolute 
        md:absolute ml-0'>

          <p>Data services</p>
          <div className='flex justify-between
          flex-wrap px-4'>
            <p className='flex px-4 py-2
            text-slate-600'> 
            <CloudUploadIcon className='h-6
            text-indigo-600'/> 
            App security</p>
            <p className='flex px-4 py-2
            text-slate-600'>
              <DatabaseIcon className='h-6
              text-indigo-600'/> 
            Dashboard design</p>
            <p className='flex px-4 py-2
            text-slate-600'>
              <PaperAirplaneIcon className='h-6
              text-indigo-600'/> 
            Cloud data</p>
            <p className='flex px-4 py-2
            text-slate-600'>
              <ServerIcon className='h-6
              text-indigo-600'/> 
            API</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Hero