import React from 'react';
import { motion } from 'framer-motion'
import jenny from '../image/jenny-bg.png'
import frem from '../image/frem.png'
import CountDown from '../components/CountDown';
import data from '../dataForWedding.json'

export default function CountdownSection() {
    return (
        <section className='relative h-screen flex flex-col justify-center items-center'>
            <h1 className='text-xl sm:text-4xl text-white my-8'>Countdown</h1>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className='relative text-center flex flex-col justify-center items-center text-lg text-white'
            >
                <div className='flex flex-col justify-center items-center bg-black/30 mx-12 my-auto rounded-3xl shadow-whiteShadow'>
                    <div className='my-8 flex flex-col justify-center items-center'>
                        <p className='m-2 text-[2em]'>{data.men.name}</p>
                        <p className='m-2 text-[2em]'>&</p>
                        <p className='m-2 text-[2em]'>{data.women.name}</p>
                        <p className='w-8/12 text-sm mt-4'>Towards a Special Day and we hope you are part of our special day</p>
                    </div>
                    <div className='my-8 flex justify-center items-center'>
                        <CountDown targetDate={'Dec 7, 2024 09:00:00'} />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}