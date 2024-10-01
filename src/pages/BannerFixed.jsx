import React from 'react'
import banner from '../image/banner.jpg'
import data from '../dataForWedding.json'

export default function BannerFixed() {
  return (
    <div className='h-full w-8/12 fixed bg-black/60 bg-no-repeat bg-cover bg-center bg-blend-multiply flex flex-col justify-center items-center text-white' style={{ backgroundImage: `url(${banner})` }}>
      <p>The Wedding of</p>
      <p className='text-3xl my-4'>{data.men.name} & {data.women.name}</p>
      <p>{data.date}</p>
    </div>
  )
}
