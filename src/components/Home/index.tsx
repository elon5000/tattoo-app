
// * Hooks
import useMediaQuery from '@/hooks/useMediaQuery'

// * Components
import ActionButton from '../ActionButton'

// * Types
import { SelectedPage } from '@/shared/types.ts'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

export default function Home({ setSelectedPage }: Props) {

    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

    const sectionStyles = 'main-layout mx-auto gap-16 bg-gray- pt-36 pb-10 md:h-full md:pb-0'
    return <section
    className={sectionStyles}
    id="home">
        <div>
            <h1 className="text-6xl mb-2 uppercase">KoolKat Tattoos</h1>
            <h3 className="text-4xl mb-6">Old school steady hand.</h3>
            <p className="font-montserrat">Welcome to Koolkat, where ink drips old-school and style bleeds cool. Strap in and let our tattoos do the loud talking.</p>
        </div>
    </section>
}