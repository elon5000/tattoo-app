// * Hooks
import { useState } from 'react'

// * Cmps
import MainHeader from '@/components/MainHeader'

export default function App() {

  const [selectedPage, setSelectedPage] = useState<string>('/')

  return <div className="app bg-gray-20">
    <MainHeader selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
  </div>
}

