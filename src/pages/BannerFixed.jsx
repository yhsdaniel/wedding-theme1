import React from 'react'
import banner from '../image/banner.jpg'

export default function BannerFixed() {
  return (
    <div className='h-full w-full fixed bg-black/50 bg-blend-multiply bg-no-repeat bg-center bg-cover bg-fixed flex justify-center items-center' style={{ backgroundImage: `url(${banner})` }}>
        <ul>
            <li>Daniel</li>
            <li>&</li>
            <li>Listi</li>
        </ul>
    </div>
  )
}
