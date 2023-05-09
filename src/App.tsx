// * Hooks
import { useState } from 'react'

// * Cmps
import MainHeader from '@/components/MainHeader'

// * Types
import { SelectedPage } from './shared/types'

export default function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return <div className="app bg-gray-20">
    <MainHeader selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
  </div>
}

