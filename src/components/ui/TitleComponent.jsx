import React from 'react'
import { motion } from 'framer-motion'

export default function TitleComponent({ children }) {
    return (
        <motion.h1
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 1 }}
            transition={{ duration: 1 }}
            className='text-3xl text-white text-center my-8 font-parisienne'
        >
            {children}
        </motion.h1>
    )
}
