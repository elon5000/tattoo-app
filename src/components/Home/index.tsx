
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
    const isMiniScreens = useMediaQuery('(max-width: 370px)')

    const sectionStyles = `flex main-layout mx-auto gap-12 h-fit pb-10 md:h-full md:pb-0 ${isAboveMediumScreens ? 'flex-row mt-36' : 'flex-col mt-28'}`
    const h1Styles = `logo relative md:before:content-["KoolKat_Tattoos"] before:max-w-[100%] before:absolute before:-top-16 before:-left-8 cursor-default ${isMiniScreens ? 'text-5xl': 'text-7xl'} before:text-9xl before:text-gray-20-trans before:z-[-1] mb-2 uppercase`
    const imgStyles = `object-contain ${isAboveMediumScreens ? 'max-w-[600px]' : 'w-full'}`
    return <section
        className={sectionStyles}
        id="home">
        <div>
            <h1 className={h1Styles}>KoolKat Tattoos</h1>
            <h3 className="cursor-default text-4xl mb-6">Old school steady hand.</h3>
            <p className="cursor-default font-montserrat mb-8">Welcome to Koolkat, where ink drips old-school and style bleeds cool. Strap in and let our tattoos do the loud talking.</p>
            <div className='flex w-full max-w-[230px] justify-between items-center'>
                <ActionButton children="Book now" setSelectedPage={setSelectedPage} title="Contact us for booking" value={SelectedPage.ContactUs} />
                <div className="underline">
                    <Link pageName={SelectedPage.Portfolio} setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
                </div>
            </div>
        </div>
        <img src={HomePageGraphic} className={imgStyles} alt="Homepage graphics" />
    </section>
}