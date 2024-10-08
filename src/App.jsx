import './App.css'
import { useEffect, useState } from 'react'
import BannerSection from './pages/BannerSection'
import GallerySection from './pages/GallerySection'
import ScheduleSection from './pages/ScheduleSection'
import CountdownSection from './pages/CountdownSection'
import BannerFixed from './pages/BannerFixed'
import music from '../public/upload/music.mp3'
import horizontal1 from './image/horizontal1.jpg'
import IntroduceSection from './pages/IntroduceSection'
import QuotesSection from './pages/QuotesSection'
import WeddingGiftSection from './pages/WeddingGiftSection'
import RSVPSection from './pages/RSVPSection'
import ThankyouSection from './pages/ThankyouSection'

function App() {
  const [isAnimation, setIsAnimation] = useState('')
  let wonAudio = new Audio(music)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  const handleClose = () => {
    setIsAnimation('animate-scrollTop')
    document.body.style.overflow = 'auto'
    wonAudio.play()
    window.scrollTo(0, 0)
  }

  return (
    <>
      <BannerSection onClose={handleClose} animationScroll={isAnimation} />
      <div className='flex relative overflow-x-hidden'>
        <div className='h-screen hidden sm:block md:w-7/12 lg:w-8/12 relative'>
          <BannerFixed />
        </div>
        <div className='size-full md:w-5/12 lg:w-4/12 relative'>
          <div className='size-full bg-black/60 bg-blend-multiply bg-fixed bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${horizontal1})` }}>
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

export default App
