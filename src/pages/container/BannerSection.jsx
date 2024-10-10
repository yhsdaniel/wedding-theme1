import React from 'react'
import { motion } from 'framer-motion'
import data from '../../dataForWedding.json'
import banner from '../../image/banner.jpg'

export default function BannerSection({ onClose, animationScroll }) {
  return (
    <section className={`${animationScroll} h-screen w-full fixed z-[200] bg-black/60 bg-fixed bg-cover bg-center bg-no-repeat bg-blend-multiply text-white flex flex-col justify-center items-center text-center`} style={{ backgroundImage: `url(${banner})` }}>
      <div className='mx-[10%] my-auto'>
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p>THE WEDDING OF</p>
          <h1 className='text-5xl my-4 tracking-wider font-greatvibes'>
            {data.men.name} & {data.women.name}
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='my-10'
        >
          We joyfully invite you to share in our happiness as we unite in marriage.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className='my-10 text-xl'
        >
          {data.date}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.75, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className='py-2 px-4 bg-white text-black rounded-xl opacity-75 hover:opacity-100 ease-in-out'
          onClick={onClose}
        >
          Buka Undangan
        </motion.button>
      </div>
    </section>
  )
}
