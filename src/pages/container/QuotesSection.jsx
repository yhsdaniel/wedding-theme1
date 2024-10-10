import React from 'react'
import { motion } from 'framer-motion'
import banner from '../../image/banner.jpg'
import arrow from '../../image/arrow-animation.gif'
import data from '../../dataForWedding.json'

export default function QuotesSection() {
    return (
        <section className='h-screen bg-black/50 text-white bg-cover bg-center bg-blend-multiply' style={{ backgroundImage: `url(${banner})` }}>
            <div className='h-full p-4 md:p-8 mx-0 my-auto'>
                <div className='size-full flex flex-col justify-end items-center'>
                    <span>The Wedding of</span>
                    <div className='w-full flex justify-center items-center font-greatvibes'>
                        <motion.p
                            initial={{ opacity: 0, translateX: -100 }}
                            whileInView={{ opacity: 1, translateX: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                            viewport={{ once: true }}
                            className='text-3xl tracking-wider'
                        >
                            {data.men.name}
                        </motion.p>
                        <p className='text-3xl text-center mx-4'>&</p>
                        <motion.p
                            initial={{ opacity: 0, translateX: 100 }}
                            whileInView={{ opacity: 1, translateX: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                            viewport={{ once: true }}
                            className='text-3xl tracking-wider'
                        >
                            {data.women.name}
                        </motion.p>
                    </div>
                    <hr className='w-full my-4' />
                    <motion.p
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 2.2 }}
                        viewport={{ once: true }}
                        className='italic text-center text-sm my-8'
                    >
                        "{data.quotes}"
                    </motion.p>
                    <img src={arrow} width={50} alt="Arrow Gif" />
                </div>
            </div>
        </section>
    )
}
