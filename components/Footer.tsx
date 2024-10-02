import { socialMedia } from '@/data/data';
import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <BackgroundBeamsWithCollision className='h-full p-10'>
    <footer className="w-full md:mb-5 " id="contact">
      <div className='flex flex-col items-center'>
        <h1 className="heading lg:max-w-[45vw]">Ready to take <span className="text-purple"> your</span> digital presence to the next level?</h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how i can help you achiev your goals.</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <button className="relative inline-flex h-12 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <a href="mailto:deepakch429.com"><span className="inline-flex h-full w-full cursor-pointer items-center justify-center  bg-slate-950 px-5 py-2 text-xl rounded-sm font-medium text-white backdrop-blur-3xl">
           Lets get in touch  &nbsp; <FaLocationArrow />
          </span></a>
        </button>
      </div >
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright &#169; 2024 Deepak Choudhary </p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map(({id,img,url}) => (
            <div key={id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300 mt-5">
              <Link href={url}><Image src={img} alt="" width={20} height={20} /></Link>
            </div>
          ))}
        </div>
      </div>
     
    </footer>
    </BackgroundBeamsWithCollision>
  )
}

export default Footer