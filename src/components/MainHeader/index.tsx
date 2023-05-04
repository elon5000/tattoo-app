
// * Cmps
import MainNavBar from '../MainNavBar'

// * Images
import Logo from '../../assets/Logo.png'

type Props = {}

export default function MainHeader(props: Props) {

    const flexClassStr = 'flex items-center justify-between'

    return <header>
        <div className={`${flexClassStr} fixed top-0 z-30 w-full py-6`}>
            <img src={Logo} alt="Logo" />
            <MainNavBar />
        </div>
    </header>
}