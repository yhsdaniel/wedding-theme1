import './App.css'
import { useEffect, useState } from 'react'
import BannerSection from './pages/BannerSection'
import GallerySection from './pages/GallerySection'
import ScheduleSection from './pages/ScheduleSection'
import MessageSection from './pages/MessageSection'
import BannerFixed from './pages/BannerFixed'
import music from '../public/upload/music.mp3'
import horizontal1 from './image/horizontal1.jpg'
import banner from './image/banner.jpg'
import IntroduceSection from './pages/IntroduceSection'

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
  }

  return (
    <>
      <BannerSection onClose={handleClose} animationScroll={isAnimation} />
      <div className='flex relative'>
        <div className='h-screen hidden sm:block sm:w-8/12 relative'>
          <BannerFixed />
        </div>
        <div className='h-full sm:w-4/12 relative'>
          <div className='bg-black/50 bg-blend-multiply bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${banner})` }}>
            <IntroduceSection />
          </div>
          <div className='bg-black/50 bg-blend-multiply bg-fixed bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${horizontal1})` }}>
            <ScheduleSection />
            <GallerySection />
            <MessageSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
