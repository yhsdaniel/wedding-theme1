import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ImageGallery } from 'react-image-grid-gallery'
import horizontal1 from '../../image/horizontal1.jpg'
import vertical1 from '../../image/vertical1.jpg'
import vertical2 from '../../image/vertical2.jpg'
import vertical3 from '../../image/vertical3.jpg'
import vertical4 from '../../image/vertical4.jpg'
import banner from '../../image/banner.jpg'

const images = [
    {
        alt: "Image1 alt text",
        src: horizontal1,
    },
    {
        alt: "Image2 alt text",
        src: vertical1,
    },
    {
        alt: "Image3 alt text",
        src: vertical2,
    },
    {
        alt: "Image4 alt text",
        src: vertical3,
    },
    {
        alt: "Image5 alt text",
        src: vertical4,
    },
    {
        alt: "Image6 alt text",
        src: banner,
    },
]

export default function GallerySection() {
    return (
        <section className='h-full px-4 py-8 flex flex-col justify-center items-center'>
            <h1 className='text-2xl text-white my-8'>Gallery</h1>
            <ImageGallery 
                imagesInfoArray={images}
                columnCount={2}
                columnWidth={150}
                gapSize={10}
            />
            {/* <div className='grid grid-rows-4 grid-flow-col gap-4'>
                {images.map((item, index) => (
                    <motion.div
                        key={index}
                        layoutId={index}
                        initial={{ opacity: 0, translateY: 100 }}
                        whileInView={{ opacity: 1, translateY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={item.classname}
                        onClick={() => toggleModal(item.id)}
                    >
                        <img
                            src={item.image}
                            alt="image grid"
                            width={500}
                            height={900}
                            loading='lazy'
                            className='rounded-lg size-full'
                        />
                    </motion.div>
                ))}
            </div> */}
        </section>
    )
}
