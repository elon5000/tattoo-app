
// * Cmps
import MainNavBar from '../MainNavBar'

// * Images
import Logo from '@/assets/Logo.png'

// * Types
import { SelectedPage } from '@/shared/types'

type Props = {
    isTopOfPage: boolean
    isMainNavOpen: boolean
    selectedPage: SelectedPage
    setIsMainNavOpen: (value: boolean) => void
    setSelectedPage: (value: SelectedPage) => void
}


export default function MainHeader({ isTopOfPage, selectedPage, isMainNavOpen, setSelectedPage, setIsMainNavOpen }: Props) {
    
    const headerStyles = `fixed w-full top-0 z-30 ${isTopOfPage ? '' : 'bg-secondary-400'}`
    
    return <header className={headerStyles}>
        <div className="main-layout flex-between gap-16 mx-auto py-6">
            <img title="Logo" className="w-24" src={Logo} alt="Logo" />
            <MainNavBar
                selectedPage={selectedPage}
                isMainNavOpen={isMainNavOpen}
                setSelectedPage={setSelectedPage}
                setIsMainNavOpen={setIsMainNavOpen} />
        </div>
    </header>
}