
// * Hooks
import useMediaQuery from '@/hooks/useMediaQuery'

// * Components
import ActionButton from '../ActionButton'
import { Link } from '../MainNavBar/Link'

// * Imgs
import HomePageGraphic from '@/assets/HomePageGraphic.png'

// * Types
import { SelectedPage } from '@/shared/types.ts'

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

export default function Home({ setSelectedPage, selectedPage }: Props) {

    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

    const sectionStyles = `flex main-layout mx-auto gap-16 bg-gray- pt-36 pb-10 md:h-full md:pb-0 ${isAboveMediumScreens ? 'flex-row' : 'flex-col'}`
    return <section
        className={sectionStyles}
        id="home">
        <div>
            <h1 className="cursor-default text-6xl mb-2 uppercase">KoolKat Tattoos</h1>
            <h3 className="cursor-default text-4xl mb-6">Old school steady hand.</h3>
            <p className="cursor-default font-montserrat mb-8">Welcome to Koolkat, where ink drips old-school and style bleeds cool. Strap in and let our tattoos do the loud talking.</p>
            <div className='flex w-full max-w-[300px] justify-between items-center'>
                <ActionButton children="Book now" setSelectedPage={setSelectedPage} value={SelectedPage.Signup} />
                <div className="underline">
                    <Link pageName="our classes" setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
                </div>
            </div>
        </div>
        <img src={HomePageGraphic} alt="Homepage" />
    </section>
}