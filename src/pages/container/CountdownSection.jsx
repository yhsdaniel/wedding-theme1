import React from 'react';
import { motion } from 'framer-motion'
import CountDown from '../../components/CountDown';
import data from '../../dataForWedding.json'
import TitleComponent from '../../components/ui/TitleComponent';

export default function CountdownSection() {
    return (
        <section className='relative h-full flex flex-col justify-center items-center'>
            <TitleComponent>
                Countdown
            </TitleComponent>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className='relative text-center flex flex-col justify-center items-center text-lg text-white'
            >
                <div className='flex flex-col justify-center items-center bg-black/30 mx-12 max-lg:mx-8 my-auto rounded-3xl shadow-whiteShadow'>
                    <div className='w-full my-8 flex flex-col justify-center items-center'>
                        <p className='m-2 text-3xl tracking-widest font-greatvibes'>{data.men.name}</p>
                        <p className='m-2 text-3xl font-greatvibes'>&</p>
                        <p className='m-2 text-3xl tracking-widest font-greatvibes'>{data.women.name}</p>
                        <p className='w-9/12 text-sm mt-4'>Towards a Special Day and we hope you are part of our special day</p>
                    </div>
                    <div className='w-full my-8 flex justify-center items-center'>
                        <CountDown targetDate={'Dec 7, 2024 09:00:00'} />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}