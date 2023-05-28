// * Hooks
import { useState, useEffect } from 'react'

// * Cmps
import Home from '@/components/Home'
import Flashes from '@/components/Flashes'
import Benefits from '@/components/Benefits'
import MainHeader from '@/components/MainHeader'

// * Types
import { SelectedPage } from './shared/types'

export default function App() {

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const [isMainNavOpen, setIsMainNavOpen] = useState<boolean>(false)
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div className="app h-fit">
    <MainHeader
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      isMainNavOpen={isMainNavOpen}
      setSelectedPage={setSelectedPage}
      setIsMainNavOpen={setIsMainNavOpen}
    />
    <Home
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
    <Benefits
      setSelectedPage={setSelectedPage}
    />
    <Flashes />
  </div>
}

