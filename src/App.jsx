import './App.css'
import { useState } from 'react'
import BannerSection from './pages/BannerSection'
import GallerySection from './pages/GallerySection'
import ScheduleSection from './pages/ScheduleSection'
import MessageSection from './pages/MessageSection'
import music from '../public/upload/music.mp3'
import BannerFixed from './pages/BannerFixed'

function App() {
  const [isOpen, setIsOpen] = useState(true)
  let wonAudio = new Audio(music)

  const handleClose = () => {
    setIsOpen(false)
    wonAudio.play()
  }

  return (
    <>
      <BannerSection isOpen={isOpen} onClose={handleClose} />
      {!isOpen && (
        <div className='flex relative'>
          <div className='h-screen hidden sm:block sm:w-8/12 relative'>
            <BannerFixed />
          </div>
          <div className='h-full sm:w-4/12 relative'>
            <ScheduleSection />
            <GallerySection />
            <MessageSection />
          </div>
        </div>
      )}
    </>
  )
}

export default App
