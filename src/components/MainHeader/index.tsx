
// * Cmps
import MainNavBar from '../MainNavBar'

// * Images
import Logo from '../../assets/Logo.png'

type Props = {}

export default function MainHeader(props: Props) {

    return <header className="fixed w-full top-0 z-30">
        <div className="main-layout flex-between gap-16 mx-auto py-6">
            <img src={Logo} alt="Logo" />
            <MainNavBar />
        </div>
    </header>
}