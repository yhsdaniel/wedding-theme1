import React from 'react'
import { motion } from 'framer-motion'
import bgcountdown from '../image/bg-countdown.png'
import CountDown from '../components/CountDown'

export default function CountDownSection() {
    return (
        <section className='h-full bg-white/30 bg-cover bg-right sm:bg-center bg-blend-lighten' style={{ backgroundImage: `url(${bgcountdown})` }}>
            <div className='max-h-96 h-screen flex justify-center items-center'>
                <CountDown targetDate={'Dec 7, 2024 09:00:00'} />
            </div>
        </section>
    )
}
