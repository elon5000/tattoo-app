
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

    const onToggleModal = (ev: React.MouseEvent<HTMLElement>) => {
        ev.stopPropagation()
        if (!isAboveMediumScreen) setIsMainNavOpen(!isMainNavOpen)
    }

    const MainNavBtnIcon = isMainNavOpen ? XMarkIcon : Bars3Icon
    const darkScreenClassNameStr = (!isAboveMediumScreen && isMainNavOpen) ?
        'fixed w-full h-full inset-0 bg-zinc-950/90'
        : ''
    const navClassStr = `flex-between ${(!isAboveMediumScreen && isMainNavOpen) ?
        'flex-col h-full absolute w-3/5 bg-white top-0 end-0' : 'mx-auto w-full'}`
    const navUlClassNameStr = isAboveMediumScreen ? 'flex-between gap-8 mx-auto w-1/2 text-sm'
        : 'flex-between flex-col gap-8 text-xl'

        const toggleModalBtnClassStr = `w-14 p-2 ${isMainNavOpen ? 'absolute start-0' : ''}`

    return <div onClick={onToggleModal} className={darkScreenClassNameStr}>
        <nav className={navClassStr}>
            {!isAboveMediumScreen && <button className={toggleModalBtnClassStr} onClick={onToggleModal}>
                <MainNavBtnIcon />
            </button>}
            {((isMainNavOpen && !isAboveMediumScreen) || isAboveMediumScreen) && <>
                <ul className={navUlClassNameStr}>
                    <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} pageName="home" />
                    <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} pageName="benefits" />
                    <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} pageName="our classes" />
                    <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} pageName="contact us" />
                </ul>
                <div className={`flex-between ${(!isAboveMediumScreen && isMainNavOpen) ? 'flex-col text-xl' : ''} gap-8`}>
                    <button>Login</button>
                    <button>Become a member</button>
                </div>
            </>
            }
        </nav>
    </div>
}