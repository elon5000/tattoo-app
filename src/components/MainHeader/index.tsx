
// * Cmps
import MainNavBar from '../MainNavBar'

// * Images
import Logo from '../../assets/Logo.png'

// * Types
import { SelectedPage } from '../../shared/types'

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

export default function MainHeader(props: Props) {

    const { selectedPage, setSelectedPage } = props

    return <header className="fixed w-full top-0 z-30">
        <div className="main-layout flex-between gap-16 mx-auto py-6">
            <img src={Logo} alt="Logo" />
            <MainNavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </div>
    </header>
}