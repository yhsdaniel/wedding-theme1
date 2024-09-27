import React from 'react'
import banner from '../image/banner.jpg'

export default function BannerSection({ isOpen, onClose }) {
  if(!isOpen) return null

  return (
    <section className={"h-screen bg-black/60 bg-fixed bg-cover bg-center bg-no-repeat bg-blend-multiply text-white flex flex-col justify-center items-center text-center"} style={{ backgroundImage: `url(${banner})` }}>
      {/* <img src={banner} alt="banner" className='size-full object-cover mix-blend-multiply bg-fixed' /> */}
      <div className='mx-[10%] mt-auto absolute'>
        <p>THE WEDDING OF</p>
        <h1 className='text-5xl'>Daniel & Listi</h1>
        <p className='my-10'>We joyfully invite you to share in our happiness as we unite in marriage.</p>
        <p className='my-10 text-xl'>7 Desember 2024</p>
        <button className='py-2 px-4 bg-white text-black rounded-xl opacity-75 hover:opacity-100 duration-150 ease-in-out' onClick={onClose}>Open invitation</button>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 absolute bottom-0 animate-bounce">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
      </svg> */}
    </section>
  )
}
