import React, { useEffect, useState } from 'react'
import jenny from '../image/jenny-bg.png'
import { motion } from 'framer-motion'
import { supabase } from '../supabase'
import GenerateAvatar from '../components/ui/GenerateAvatar'
import toast from 'react-hot-toast'

export default function RSVPSection() {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        attendance: 'true',
        guest: '1'
    })
    const [isVisible, setIsVisible] = useState('true')
    // const [name, setName] = useState('')
    // const [message, setMessage] = useState('')
    // const [attendance, setAttendance] = useState(true)
    // const [guest, setGuest] = useState("1")
    const [dataAttendance, setDataAttendance] = useState([])

    async function getAllAttendance() {
        try {
            const { data, error } = await supabase.from('attendance').select('*')
            setDataAttendance(data)
            setIsVisible( formData.attendance === 'true')

            if (error) throw error
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllAttendance()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        const booleanValue = value === 'true'
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        
        console.log('value', value)
        setIsVisible(booleanValue)
        console.log('booleanValue', booleanValue)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data, error } = await supabase.from('attendance').insert({ name: formData.name, message: formData.message, attendance: formData.attendance, guest: formData.guest })
            dataAttendance.push(data)
            setFormData({
                name: '',
                message: '',
                attendance: 'true',
                guest: '1'
            })
            setIsVisible( formData.attendance === 'true')
            toast.success('Thank you for your prayers')

            if (error) throw error
        } catch (error) {
            console.log(error)
        }

        getAllAttendance()
    }

    return (
        <section className='h-screen p-4 bg-cover bg-left-top bg-no-repeat bg-blend-multiply'>
            <motion.h1
                initial={{ opacity: 0, translateX: 100 }}
                whileInView={{ opacity: 1, translateX: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className='text-2xl text-white text-center my-8'
            >
                Konfirmasi Kehadiran & Ucapan
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, translateX: 100 }}
                whileInView={{ opacity: 1, translateX: 1 }}
                transition={{ duration: 1 }}
                className='p-8 m-4 bg-black/40 rounded-2xl'
            >
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Nama</label>
                        <input type="name" id="name" name='name' value={formData.name} className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 bg-transparent placeholder:text-white/50" placeholder="Nama ..." onChange={handleChange} />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Ucapan:</label>
                        <textarea id="message" name='message' rows="4" value={formData.message} className="block p-2 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-transparent placeholder:text-white/50" placeholder="Ucapan..." onChange={handleChange}></textarea>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="attendance" className="block mb-2 text-sm font-medium text-white">Konfirmasi kehadiran</label>
                        <select id="attendance" name='attendance' value={formData.attendance} className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 bg-transparent placeholder:text-white/50" required onChange={handleChange}>
                            <option value='true'>Hadir</option>
                            <option value='false'>Tidak hadir</option>
                        </select>
                    </div>
                    {/* {isVisible === true && (
                        <div className='mb-5'>
                            <label htmlFor="guest" className="block mb-2 text-sm font-medium text-white">Tamu</label>
                            <select id="guest" name='guest' value={formData.guest} className="border border-gray-300 text-white text-sm rounded-lg block w-full p-2 bg-transparent placeholder:text-white/50" required onChange={handleChange}>
                                <option value={"1"}>1</option>
                                <option value={"2"}>2</option>
                                <option value={"3"}>3</option>
                                <option value={"4"}>4</option>
                                <option value={"5"}>5</option>
                                <option value={"6"}>6</option>
                                <option value={"7"}>7</option>
                                <option value={"8"}>8</option>
                                <option value={"9"}>9</option>
                                <option value={"10"}>10</option>
                            </select>
                        </div>
                    )} */}
                    <button type="submit" className="text-white bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center duration-150 ease-in-out" onClick={handleSubmit}>Submit</button>
                </form>
                <div className='my-6 max-w-sm mx-auto bg-white/10 rounded-xl'>
                    <div className='max-h-96 overflow-y-auto overflow-x-auto border border-white/30 rounded-xl'>
                        {dataAttendance?.map(value => (
                            <div key={value.id} className='px-4 py-2 flex text-sm text-white'>
                                <div className='w-2/12 flex justify-center items-start'>
                                    <GenerateAvatar name={value.name} />
                                </div>
                                <div className='flex-1 p-4 bg-white/10 rounded-lg shadow-slate-100 shadow-md'>
                                    <p className='font-bold text-base'>{value.name}</p>
                                    <p className='break-words'>{value.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
