import React, { useEffect, useState } from 'react'
import jenny from '../image/jenny-bg.png'
import { motion } from 'framer-motion'
import { supabase } from '../supabase'
import GenerateAvatar from '../components/ui/GenerateAvatar'

export default function RSVPSection() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [attendance, setAttendance] = useState(true)
    const [dataAttendance, setDataAttendance] = useState([])

    async function getAllAttendance() {
        try {
            const { data, error } = await supabase.from('attendance').select('*')
            setDataAttendance(data)

            if (error) throw error
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllAttendance()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data, error } = await supabase.from('attendance').insert({ name: name, message: message, attendance: attendance })
            dataAttendance.push(data)

            if (error) throw error
        } catch (error) {
            console.log(error)
        }

        getAllAttendance()
    }

    return (
        <section className='h-full p-4 bg-black/70 bg-cover bg-no-repeat bg-blend-multiply' style={{ backgroundImage: `url(${jenny})` }}>
            <h1 className='text-2xl text-white text-center my-8'>Konfirmasi Kehadiran & Ucapan</h1>
            <motion.div
                initial={{ opacity: 0, translateX: 100 }}
                whileInView={{ opacity: 1, translateX: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='p-8 m-4 bg-black/40 rounded-2xl'
            >
                <form className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Nama</label>
                        <input type="name" id="name" value={name} className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 bg-transparent placeholder:text-white/50" placeholder="Nama ..." onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Pesan:</label>
                        <textarea id="message" rows="4" value={message} className="block p-2 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-transparent placeholder:text-white/50" placeholder="Ucapan..." onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="attend" className="block mb-2 text-sm font-medium text-white">Konfirmasi kehadiran</label>
                        <select id="attend" className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 bg-transparent placeholder:text-white/50" onChange={e => setAttendance(e.target.value)}>
                            <option value={true}>Hadir</option>
                            <option value={false}>Tidak hadir</option>
                        </select>
                    </div>
                    <button type="submit" className="text-white bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center duration-150 ease-in-out" onClick={handleSubmit}>Submit</button>
                </form>
                <div className='my-6 max-w-sm mx-auto'>
                    <div className='max-h-96 overflow-y-auto overflow-x-auto border border-white/30 rounded-xl'>
                        {dataAttendance?.map(value => (
                            <div key={value.id} className='my-4 p-4 flex text-sm text-white'>
                                <div className='w-2/12 flex justify-center items-start'>
                                    <GenerateAvatar name={value.name} />
                                </div>
                                <div className='flex-1'>
                                    <p className='font-bold text-base'>{value.name}</p>
                                    <p>{value.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
