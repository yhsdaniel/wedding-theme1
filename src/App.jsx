import './App.css'
import { useEffect, useState } from 'react'
import BannerSection from './pages/BannerSection'
import GallerySection from './pages/GallerySection'
import ScheduleSection from './pages/ScheduleSection'
import MessageSection from './pages/MessageSection'
import BannerFixed from './pages/BannerFixed'
import music from '../public/upload/music.mp3'
import horizontal1 from './image/horizontal1.jpg'
import IntroduceSection from './pages/IntroduceSection'
import QuotesSection from './pages/QuotesSection'
import BankSection from './pages/BankSection'
import RSVPSection from './pages/RSVPSection'

function App() {
  const [isOpen, setIsOpen] = useState(true)
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
        <div className='h-screen hidden sm:block sm:w-8/12 relative'>
          <BannerFixed />
        </div>
        <div className='h-full sm:w-4/12 relative' >
          <div className='size-full bg-black/60 bg-blend-multiply bg-fixed bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${horizontal1})` }}>
            <QuotesSection />
            <IntroduceSection />
            <ScheduleSection />
            <GallerySection />
            <MessageSection />
            <BankSection />
            <RSVPSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
