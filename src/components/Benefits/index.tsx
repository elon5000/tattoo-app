
// * Modules
import { motion } from 'framer-motion'

// * Types
import { SelectedPage } from '@/shared/types'

// * SVGs
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

export default function Benefits({ selectedPage, setSelectedPage }: Props) {
    return <motion.section
        id="benefits"
        className="main-layout min-h-full py-20"
        onViewportEnter={() => { setSelectedPage(SelectedPage.Benefits) }}
    >
        <motion.div>
            <h3 className="uppercase font-extrabold text-4xl my-4">More than just a tattoo</h3>
            <p className='font-bold text-xl'>Koolkat Tattoo Shop offers versatile tattoo services. Choose a custom design, pick from our pre-made flashes, or bring your own idea. With international acclaim and vast experience, particularly in Europe, Koolkat ensures your unique vision comes to life on your skin.</p>
        </motion.div>
    </motion.section>
}