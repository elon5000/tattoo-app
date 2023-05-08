
// * Cmps
import { Link } from './Link'

// * Svgs
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


type Props = {
    selectedPage: string
    setSelectedPage: (value: string) => void
}

export default function MainNavBar(props: Props) {

    const { selectedPage, setSelectedPage } = props

    

    return <nav className="flex-between mx-auto w-full">
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