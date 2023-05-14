
// * Cmps
import { Link } from './Link'
import ActionButton from '../ActionButton'

// * Hooks
import { useRef } from 'react'
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

export default function MainNavBar({ selectedPage, isMainNavOpen, setSelectedPage, setIsMainNavOpen }: Props) {

    const navRef = useRef<HTMLElement | null>(null)
    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')

    const onToggleModal = (ev: React.MouseEvent<HTMLElement>) => {
        ev.stopPropagation()
        if (isMainNavOpen && navRef.current) {
            navRef.current.classList.add('animate-slide-out-right')
        }
        if (!isAboveMediumScreen) {
            const delay = isMainNavOpen ? 300 : 0
            setTimeout(() => setIsMainNavOpen(!isMainNavOpen), delay)
        }
    }

    const MainNavBtnIcon = isMainNavOpen ? XMarkIcon : Bars3Icon
    const darkScreenStyles = (!isAboveMediumScreen && isMainNavOpen) ?
        'fixed w-full h-full inset-0 bg-zinc-950/90 cursor-pointer'
        : 'relative bg-transparent flex-1'
    const navStyles = `flex-between cursor-default ${(!isAboveMediumScreen && isMainNavOpen) ?
        'justify-around flex-col h-full absolute w-3/5 bg-primary-100 top-0 end-0 animate-slide-in-left'
        : 'mx-auto w-full justify-end'}`
    const navUlStyles = isAboveMediumScreen ? 'flex-between gap-8 mx-auto w-1/2 text-sm'
        : 'flex-between flex-col max-h-[400px] gap-8 flex-1 text-xl'

    const toggleModalBtnStyles = `w-12 p-2 hover:text-primary-300 ${isMainNavOpen ? 'self-start' : 'justify-self-end rounded-full bg-primary-500 text-primary-100 hover:bg-zinc-950/90'}`

    return <div onClick={onToggleModal} className={darkScreenStyles}>
        <nav ref={navRef} className={navStyles}>
            {!isAboveMediumScreen && <button
                title="Toggle navigation bar"
                className={toggleModalBtnStyles}
                onClick={onToggleModal}>
                <MainNavBtnIcon />
            </button>}
            {((isMainNavOpen && !isAboveMediumScreen) || isAboveMediumScreen) && <>
                <ul className={navUlStyles}>
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