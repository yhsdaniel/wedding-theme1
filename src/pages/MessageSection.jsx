import React from 'react';
import { motion } from 'framer-motion'
import jenny from '../image/jenny-bg.png'
import frem from '../image/frem.png'
import CountDown from '../components/CountDown';

export default function MessageSection() {
    const database = {
        manName: 'Daniel',
        womanName: 'Listi',
        message: 'Towards a Special Day and we hope you are part of our special day'
    }

    return (
        <section className='relative bg-left sm:bg-center bg-cover h-screen' style={{ backgroundImage: `url(${jenny})` }}>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className='relative text-center bg-center bg-95% sm:bg-50% bg-no-repeat flex flex-col justify-center items-center h-full text-lg text-[#cc9842]'
                style={{ backgroundImage: `url(${frem})` }}
            >
                <div className='flex flex-col justify-start items-center'>
                    <p className='m-2 text-[2em]'>{database.manName}</p>
                    <p className='m-2 text-[2em]'>&</p>
                    <p className='m-2 text-[2em]'>{database.womanName}</p>
                    <p className='w-6/12 sm:w-8/12 text-sm mt-4'>{database.message}</p>
                    <div className='absolute bottom-24 sm:bottom-28 flex justify-center items-center'>
                        <CountDown targetDate={'Dec 7, 2024 09:00:00'} />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}