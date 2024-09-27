import './App.css'
import { useState } from 'react'
import BannerSection from './pages/BannerSection'
import CountDownSection from './pages/CountDownSection'
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
      <BannerSection isOpen={isOpen} onClose={handleClose}/>
      {!isOpen && (
        <div className='flex'>
          <div className='w-9/12 relative'>
            <BannerFixed />
          </div>
          <div className='w-3/12 relative'>
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
