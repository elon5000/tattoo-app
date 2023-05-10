
// * Cmps
import { Link } from './Link'

// * Hooks
import useMediaQuery from '@/hooks/useMediaQuery'

// * Svgs
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

// * Types
import { SelectedPage } from '../../shared/types'

type Props = {
    isMainNavOpen: boolean
    selectedPage: SelectedPage
    setIsMainNavOpen: (value: boolean) => void
    setSelectedPage: (value: SelectedPage) => void
}

export default function MainNavBar(props: Props) {

    const { selectedPage, isMainNavOpen, setSelectedPage, setIsMainNavOpen } = props
    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')

    const onToggleModal = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.stopPropagation()
        setIsMainNavOpen(!isMainNavOpen)
    }

    const MainNavBtnIcon = isMainNavOpen ? XMarkIcon : Bars3Icon

    return <nav className="flex-between mx-auto w-full">
        {!isAboveMediumScreen && <button onClick={onToggleModal}>
            <MainNavBtnIcon className="w-10" />
            </button>}
        <ul className="flex-between gap-8 mx-auto w-1/2 text-sm">
            <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} pageName="home" />
            <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} pageName="benefits" />
            <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} pageName="our classes" />
            <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} pageName="contact us" />
        </ul>
        <div className="flex-between gap-8">
            <button>Login</button>
            <button>Become a member</button>
        </div>
    </nav>
}