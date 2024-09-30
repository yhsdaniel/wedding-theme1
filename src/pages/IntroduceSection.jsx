import React from 'react'
import { motion } from 'framer-motion'
import data from '../dataForWedding.json'
import imageformen from '../image/men.jpg'
import imageforwomen from '../image/women.jpg'

export default function IntroduceSection() {
    return (
        <div className='h-full p-8 flex flex-col justify-center items-center'>
            <motion.img
                src={imageformen}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                width={200}
                height={200}
                className='size-80 rounded-full object-cover m-4'
            />
            <div className='text-white text-center text-sm'>
                <motion.p 
                    initial={{ opacity: 0, translateX: -100 }}
                    whileInView={{ opacity: 1, translateX: 1 }}
                    transition={{ duration: 1 }}
                >
                    {data.fullnameformen}
                </motion.p>
                <div className='my-4'>
                    <p>Anak dari :</p>
                    <motion.p 
                        initial={{ opacity: 0, translateX: -100 }}
                        whileInView={{ opacity: 1, translateX: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Bapak {data.fatherformen}
                    </motion.p>
                    &
                    <motion.p 
                        initial={{ opacity: 0, translateX: 100 }}
                        whileInView={{ opacity: 1, translateX: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Ibu {data.motherformen}
                    </motion.p>
                </div>
            </div>
            <motion.img
                src={imageforwomen}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                width={200}
                height={200}
                className='size-80 rounded-full object-cover m-4'
            />
            <div className='text-white text-center text-sm'>
                <motion.p 
                    initial={{ opacity: 0, translateX: -100 }}
                    whileInView={{ opacity: 1, translateX: 1 }}
                    transition={{ duration: 1 }}
                >
                    {data.fullnameforwomen}
                </motion.p>
                <div className='my-4'>
                    <p>Anak dari :</p>
                    <motion.p 
                        initial={{ opacity: 0, translateX: -100 }}
                        whileInView={{ opacity: 1, translateX: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Bapak {data.fatherforwomen}
                    </motion.p>
                    &
                    <motion.p 
                        initial={{ opacity: 0, translateX: 100 }}
                        whileInView={{ opacity: 1, translateX: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Ibu {data.motherforwomen}
                    </motion.p>
                </div>
            </div>
        </div>
    )
}
