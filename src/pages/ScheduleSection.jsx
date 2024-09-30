import React from 'react'
import { motion } from 'framer-motion'
import horizontal1 from '../image/horizontal1.jpg'

const ceremony = [
    {
        title: 'Holy Matrimony',
        day: 'Sabtu',
        date: '7 Desember 2024',
        time: '09.00 - 12.00',
        location: 'Gereja Katolik Kim Tae Gon',
        address: 'Jalan Puspa Gading Timur No.1 Blok H2, RT.5/RW.2, Pegangsaan Dua, Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14250'
    },
    {
        title: 'Receptions',
        day: 'Sabtu',
        date: '7 Desember 2024',
        time: '18.00 - Finish',
        location: 'Hotel Pullman',
        address: 'Jalan Puspa Gading Timur No.1 Blok H2, RT.5/RW.2, Pegangsaan Dua, Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14250'
    }
]

export default function ScheduleSection() {
    return (
        <section className='h-full bg-black/30 bg-cover bg-center bg-blend-multiply'>
            <div className='h-full p-8 mx-0 my-auto'>
                <div className='size-full flex flex-col gap-6'>
                    <div className='WeddingEvent'>
                        <div className="contain-card">
                            {ceremony.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="card-body">
                                        <p className='text-2xl'>{item.title}</p>
                                        <hr className='w-full my-4' />
                                        <div className='my-4'>
                                            <ul>
                                                <li>{item.day}</li>
                                                <li>{item.date}</li>
                                                <li>{item.time}</li>
                                            </ul>
                                        </div>
                                        <hr className='w-full my-4' />
                                        <p className='my-4 text-lg'>{item.location}</p>
                                        <p className='text-sm'>{item.address}</p>
                                        <button className="btn">Open google maps</button>
                                    </div>
                                </motion.div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
