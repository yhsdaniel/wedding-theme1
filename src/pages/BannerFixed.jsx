import React from 'react'
import banner from '../image/banner.jpg'
import data from '../dataForWedding.json'
import { motion } from 'framer-motion'

export default function BannerFixed() {
  return (
    <div className='h-full md:w-7/12 lg:w-8/12 fixed bg-black/60 bg-no-repeat bg-cover bg-center bg-blend-multiply flex flex-col justify-center items-center text-white' style={{ backgroundImage: `url(${banner})` }}>
      <motion.p
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 1 }}
        transition={{ duration: 1, delay: 4 }}
        viewport={{ once: true }}
      >
        The Wedding of
      </motion.p>
      <motion.p
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 1 }}
        transition={{ duration: 1, delay: 4.2 }}
        viewport={{ once: true }}
        className='text-4xl my-4 font-greatvibes'
      >
        {data.men.name} &nbsp; & &nbsp; {data.women.name}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 1 }}
        transition={{ duration: 1, delay: 4.4 }}
        viewport={{ once: true }}
      >
        {data.date}
      </motion.p>
    </div>
  )
}
