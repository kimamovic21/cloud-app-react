import React from 'react';
import {CheckIcon, XIcon, Xicon} from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div name="pricing" className='w-full text-white my-24'>

        <div className='w-full h-[800px]
        bg-slate-900 absolute
        mix-blend-overlay'></div>

        <div className='max-w-[1240px]
        mx-auto py-12'>

            <div className='text-center 
            py-8 text-slate-100'>
                <h2 className='text-3xl uppercase'>
                    Pricing</h2>
                <h3 className='text-5xl font-bold
                text-white py-8'>
                    The right price for your research</h3>
                <p className='text-3xl'>
                   Lorem ipsum dolor sit amet 
                   consectetur, adipisicing elit.
                   Quam, amet perferendis inventore
                   consectetur ad dolorum aliquam 
                   cum nemo consequatur ab.</p>
            </div>

            <div className='grid md:grid-cols-2'>

                <div className='bg-white
                text-slate-900 m-4 p-8
                rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 
                    bg-indigo-200 text-indigo-900 
                    rounded-2xl text-sm'>
                        Standard</span>
                    <div>
                        <p className='text-5xl font-bold
                        py-4 flex'>
                            $49,90
                        <span className='text-xl text-slate-500
                        flex flex-col justify-end'>
                            /mo</span> </p>
                    </div>
                    <p className='text-2xl py-8
                    text-slate-500'>
                       Lorem ipsum dolor sit amet 
                       consectetur adipisicing elit. 
                       Tempora, expedita.</p>
                    <div className='text-2xl flex 
                        flex-col justify-between'>
                        <div>
                        <p className='flex py-4'>
                            <CheckIcon className='w-7
                            mr-5 text-green-500'/>
                           Lorem, ipsum.</p>
                        <p className='flex py-4'>
                            <CheckIcon className='w-7
                            mr-5 text-green-500'/>
                           Lorem, ipsum dolor.</p>
                        <p className='flex py-4'>
                            <CheckIcon className='w-7
                            mr-5 text-green-500'/>
                           Lorem ipsum dolor sit.</p>
                        <p className='flex py-4'>
                            <CheckIcon className='w-7
                            mr-5 text-green-500'/>
                           Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'>
                            <XIcon className='w-6
                            mr-5 text-red-500'/>
                           Lorem ipsum dolor sit
                            amet consectetur.</p>
                        <p className='flex py-4'>
                            <XIcon className='w-7
                            mr-5 text-red-500'/>
                            Lorem ipsum dolor sit amet 
                            consectetur adipisicing.</p>
                        <p className='flex py-4'>
                            <XIcon className='w-7
                            mr-5 text-red-500'/>
                            Lorem ipsum dolor, sit amet 
                            consectetur adipisicing elit.</p>
                        </div>
                         <div>
                            <button className='w-full
                                pt-4 py-4 mt-12'>
                                Get started
                            </button>
                         </div>
                    </div>
                </div>

                <div className='bg-white
                text-slate-900 m-4 p-8
                rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 
                    bg-indigo-200 text-indigo-900 
                    rounded-2xl text-sm'>
                        Premium</span>
                    <div>
                        <p className='text-5xl font-bold
                        py-4 flex'>
                            $89,90 
                        <span className='text-xl text-slate-500
                        flex flex-col justify-end'>
                            /mo</span> </p>
                    </div>
                    <p className='text-2xl py-8
                    text-slate-500'>
                       Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Amet itaque illum minus id quas quod!</p>
                    <div className='text-2xl'>
                        <p className='flex py-4'>
                            <CheckIcon className='w-7
                            mr-5 text-green-500'/>
                           Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'>
                            <CheckIcon className='w-7
                            mr-5 text-green-500'/>
                           Lorem ipsum dolor sit amet consectetur.</p>
                        <p className='flex py-4'>
                            <CheckIcon className='w-7
                            mr-5 text-green-500'/>
                           Lorem, ipsum dolor sit amet 
                           consectetur adipisicing.</p>
                        <p className='flex py-4'>
                            <CheckIcon className='w-7
                            mr-5 text-green-500'/>
                           Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.</p>
                        <p className='flex py-4'>
                            <CheckIcon className='w-7
                            mr-5 text-green-500'/>
                           Lorem ipsum dolor sit amet consectetur 
                           adipisicing elit. Ipsam.</p>
                        <p className='flex py-4'>
                           <CheckIcon className='w-7
                           mr-5 text-green-500'/>
                           Lorem ipsum, dolor sit amet consectetur 
                           adipisicing elit. Nobis, atque!</p>
                        <button className='w-full
                         py-4 my-4 '>
                            Get started
                        </button>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Pricing