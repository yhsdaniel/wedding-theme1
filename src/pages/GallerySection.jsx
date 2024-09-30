import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import horizontal1 from '../image/horizontal1.jpg'
import vertical1 from '../image/vertical1.jpg'
import vertical2 from '../image/vertical2.jpg'
import vertical3 from '../image/vertical3.jpg'
import vertical4 from '../image/vertical4.jpg'
import banner from '../image/banner.jpg'

const items = [
    {
        id: 1,
        image: horizontal1,
        classname: 'cursor-pointer row-span-2',
        duration: 0.2
    },
    {
        id: 2,
        image: vertical1,
        classname: 'cursor-pointer row-span-1',
        duration: 0.2
    },
    {
        id: 3,
        image: vertical2,
        classname: 'cursor-pointer row-span-1',
        duration: 0.2
    },
    {
        id: 4,
        image: vertical3,
        classname: 'cursor-pointer',
        duration: 0.3
    },
    {
        id: 5,
        image: vertical4,
        classname: 'cursor-pointer',
        duration: 0.3
    },
    {
        id: 6,
        image: banner,
        classname: 'cursor-pointer row-span-2',
        duration: 0.3
    },
]

export default function GallerySection() {
    const [selectedId, setSelectedId] = useState(null)
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = (selectItem) => {
        setIsOpen(!isOpen);
        setSelectedId(selectItem)
    };

    return (
        <section className='h-full bg-black/30 p-8 md:p-4 flex flex-col justify-center items-center'>
            <span className='text-xl sm:text-4xl text-white my-8'>Gallery</span>
            <div className='grid grid-rows-4 grid-flow-col gap-2'>
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        layoutId={item.id}
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
            </div>
        </section>
        // <AnimatePresence>
        //     {isOpen && (
        //         <div key={index}>
        //             {/* Modal content */}
        //             <motion.div
        //                 layout={item.id}
        //                 className="modal"
        //                 initial={{ opacity: 0, scale: 0.8 }}
        //                 animate={{ opacity: 1, scale: 1 }}
        //                 exit={{ opacity: 0, scale: 0.8 }}
        //                 transition={{ duration: 0.3 }}
        //             >
        //                 <img
        //                     src={item.image}
        //                     alt="image grid"
        //                     width={768}
        //                     height={1181}
        //                     loading='lazy'
        //                     className='rounded-lg'
        //                 />
        //                 <button onClick={toggleModal(item.id)}>Close Modal</button>
        //             </motion.div>
        //         </div>
        //     )}
        // </AnimatePresence>
    )
}
