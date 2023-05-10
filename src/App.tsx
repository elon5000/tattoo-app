// * Hooks
import { useState } from 'react'

// * Cmps
import MainHeader from '@/components/MainHeader'

// * Types
import { SelectedPage } from './shared/types'

export default function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isMainNavOpen, setIsMainNavOpen] = useState<boolean>(false)

  return <div className="app bg-gray-20">
    <MainHeader
      selectedPage={selectedPage}
      isMainNavOpen={isMainNavOpen}
      setSelectedPage={setSelectedPage}
      setIsMainNavOpen={setIsMainNavOpen} />
  </div>
}

