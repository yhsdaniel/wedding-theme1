import React from 'react'
import { motion } from 'framer-motion'
import data from '../dataForWedding.json'

const ceremony = [
    {
        title: 'Holy Matrimony',
        date: data.date,
        time: data.church.time,
        location: data.church.name,
        address: data.church.address,
        google: data.church.googlemaps
    },
    {
        title: 'Receptions',
        date: data.date,
        time: data.reseptions.time,
        location: data.reseptions.name,
        address: data.reseptions.address,
        google: data.reseptions.googlemaps
    }
]

export default function ScheduleSection() {
    return (
        <section className='h-full mx-[8%] my-auto flex flex-col justify-center items-center'>
            <h1 className='text-2xl text-white my-8'>Schedule</h1>
            <div className='size-full flex flex-col gap-6'>
                <div className='WeddingEvent'>
                    <div className="contain-card">
                        {ceremony?.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5 }}
                                viewport={{ once: true }}
                                className="card-body"
                            >
                                <p className='text-2xl'>{item.title}</p>
                                <div className='my-4'>
                                    <ul>
                                        <li>{item.date}</li>
                                        <li>{item.time}</li>
                                    </ul>
                                </div>
                                <p className='my-4 text-lg'>{item.location}</p>
                                <p className='text-sm'>{item.address}</p>
                                <a href={item.google} className="btn">Open google maps</a>
                            </motion.div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
