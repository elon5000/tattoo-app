
// * Cmps
import MainNavBar from '../MainNavBar'

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

    const headerStyles = `fixed w-full top-0 z-30 ${isTopOfPage ? '' : 'bg-gray-300-trans'}`
    const h1LogoStyles = `text-xl font-bold uppercase ${!isTopOfPage ? 'text-gray-20' : ''}`

    return <header className={headerStyles}>
        <div className="main-layout items-center flex-between gap-16 mx-auto py-6">
            <h1 title="Logo" className={h1LogoStyles}>Koolkat</h1>
            <MainNavBar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                isMainNavOpen={isMainNavOpen}
                setSelectedPage={setSelectedPage}
                setIsMainNavOpen={setIsMainNavOpen} />
        </div>
    </header>
}