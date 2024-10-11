import React from 'react'
import { useEffect, useState } from 'react'
import BannerSection from './container/BannerSection'
import GallerySection from './container/GallerySection'
import ScheduleSection from './container/ScheduleSection'
import CountdownSection from './container/CountdownSection'
import BannerFixed from '../pages/BannerFixed'
import music from '../upload/music.mp3'
import image1 from '../image/potrait-1.jpg'
import IntroduceSection from './container/IntroduceSection'
import QuotesSection from './container/QuotesSection'
import WeddingGiftSection from './container/WeddingGiftSection'
import RSVPSection from './container/RSVPSection'
import ThankyouSection from './container/ThankyouSection'
import { supabase } from '../supabase'
import { useParams } from 'react-router-dom'

export default function MainPage() {
  const { username } = useParams()
  const [userData, setUserData] = useState(null)
  const [isAnimation, setIsAnimation] = useState('')
  let wonAudio = new Audio(music)

  const fetchUserData = async () => {
    const { data: user, error } = await supabase.from('bride').select('*').eq('username', username).single()

    if (error) {
      console.log(error)
    } else {
      setUserData(user)
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    fetchUserData()
  }, [])

  const handleClose = () => {
    setIsAnimation('animate-scrollTop')
    document.body.style.overflow = 'auto'
    wonAudio.play()
    window.scrollTo(0, 0)
  }

  if (userData) {
    return (
      <>
        <BannerSection onClose={handleClose} animationScroll={isAnimation} />
        <div className='flex relative overflow-x-hidden'>
          <div className='h-screen hidden sm:block md:w-7/12 lg:w-8/12 relative'>
            <BannerFixed />
          </div>
          <div className='size-full md:w-5/12 lg:w-4/12 relative'>
            <div className='size-full bg-black/60 bg-blend-multiply bg-fixed bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${image1})` }}>
              <QuotesSection />
              <IntroduceSection />
              <ScheduleSection />
              <GallerySection />
              <CountdownSection />
              <WeddingGiftSection />
              <RSVPSection />
              <ThankyouSection />
            </div>
          </div>
        </div>
      </>
    )
  }
}
