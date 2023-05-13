
// * Cmps
import { Link } from './Link'
import ActionButton from '../ActionButton'

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
        'fixed w-full h-full inset-0 bg-zinc-950/90 cursor-pointer'
        : 'relative bg-transparent flex-1'
    const navClassStr = `flex-between ${(!isAboveMediumScreen && isMainNavOpen) ?
        'py-12 flex-col h-full absolute w-3/5 bg-white top-0 end-0 animate-slide-in-left'
        : 'mx-auto w-full'}`
    const navUlClassNameStr = isAboveMediumScreen ? 'flex-between gap-8 mx-auto w-1/2 text-sm'
        : 'flex-between flex-col gap-8 text-xl'

    const toggleModalBtnClassStr = `w-12 p-2 absolute ${isMainNavOpen ? 'start-0' : 'end-0 rounded-full bg-primary-500 text-primary-100 hover:bg-zinc-950/90'}`

    return <div onClick={onToggleModal} className={darkScreenClassNameStr}>
        <nav className={navClassStr}>
            {!isAboveMediumScreen && <button
            title="Toggle navigation bar"
                className={toggleModalBtnClassStr}
                onClick={onToggleModal}>
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
                <ActionButton value={SelectedPage.Login} children="Login" setSelectedPage={setSelectedPage} />
                <ActionButton value={SelectedPage.Signup} children="Become a member" setSelectedPage={setSelectedPage} />
                </div>
            </>
            }
        </nav>
    </div>
}