import React from 'react'
import { motion } from 'framer-motion'
import banner from '../image/banner.jpg'
import data from '../dataForWedding.json'
import arrow from '../image/arrow-animation.gif'

export default function IntroduceSection() {
    return (
        <section className='h-screen bg-black/50 text-white bg-cover bg-center bg-blend-multiply' style={{ backgroundImage: `url(${banner})` }}>
            <div className='h-full px-8 mx-0 my-auto'>
                <div className='size-full flex flex-col justify-end items-center'>
                    <span>The Wedding of</span>
                    <div className='flex justify-center items-center'>
                        <motion.p
                            initial={{ opacity: 0, translateX: -100 }}
                            animate={{ opacity: 1, translateX: 1 }}
                            transition={{ duration: 1 }}
                            className='text-xl'
                        >
                            {data.men}
                        </motion.p>
                        <p className='text-xs mx-2'>{data.date}</p>
                        <motion.p
                            initial={{ opacity: 0, translateX: 100 }}
                            animate={{ opacity: 1, translateX: 1 }}
                            transition={{ duration: 1 }}
                            className='text-xl'
                        >
                            {data.women}
                        </motion.p>
                    </div>
                    <hr className='w-full my-4' />
                    <motion.p
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className='italic text-center text-sm my-8'
                    >
                        {data.quotes}
                    </motion.p>
                    <img src={arrow} width={50} alt="Arrow Gif" />
                </div>
            </div>
        </section>
    )
}
