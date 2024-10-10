import React from 'react'
import { motion } from 'framer-motion'
import horizontal1 from '../../image/horizontal1.jpg'

export default function ThankyouSection() {
    return (
        <section className='relative h-screen text-white text-center flex flex-col justify-start items-center'>
            <div className='p-8 flex flex-col justify-center items-center'>
                <motion.h1 
                    initial={{ opacity: 0, translateX: 100 }}
                    whileInView={{ opacity: 1, translateX: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className='text-lg my-8'
                >
                    Thank you for your prayer
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, translateX: -100 }}
                    whileInView={{ opacity: 1, translateX: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className='text-xs'
                >
                    Both of us are really waiting to see you at our wedding. We hope you become a witness in a new our life.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, translateX: 100 }}
                    whileInView={{ opacity: 1, translateX: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className='my-8'
                >
                    Regards,
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className='w-56 h-80 bg-white p-2 pb-8'
                >
                    <img src={horizontal1} alt="Thanks Image" className='size-full' />
                    <p className='text-3xl text-black font-greatvibes'>Daniel & Listi</p>
                </motion.div>
            </div>
        </section>
    )
}
