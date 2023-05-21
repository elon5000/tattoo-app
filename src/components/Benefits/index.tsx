
// * Components
import BenefitCard from './BenefitCard'


// * Modules
import { motion } from 'framer-motion'

// * Types
import { SelectedPage, Benefit } from '@/shared/types'

// * SVGs
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

export default function Benefits({ selectedPage, setSelectedPage }: Props) {

    const benefits: Benefit[] = [
        {
            svg: <HomeModernIcon className="circle-icon" />,
            title: 'State of the art Facilities',
            description: 'Koolkat\'s artistry extends from Tel Aviv\'s Boldline studio to global tattoo platforms. This global exposure enriches his designs, ensuring you receive a unique, world-class tattoo experience.'
        },
        {
            svg: <UserGroupIcon className="circle-icon" />,
            title: 'Hundreds of customers',
            description: 'Koolkat\'s experience tattooing hundreds of clients ensures skillful craftsmanship. With each tattoo, he hones his expertise, guaranteeing newcomers benefit from refined technique and artistry in their tattoo journey.'
        },
        {
            svg: <AcademicCapIcon className="circle-icon" />,
            title: 'Expert tattoo artist',
            description: 'Koolkat\'s years of tattooing experience means a mastery of technique and design. Newcomers can trust in his established expertise, providing peace of mind for their first tattoo experience.'
        },
    ]

    return <motion.section
        id="benefits"
        className="main-layout min-h-full py-6"
        onViewportEnter={() => { setSelectedPage(SelectedPage.Benefits) }}
    >
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 }
            }}>
            <h3 className="header-title">More than just a tattoo</h3>
            <p className='font-bold mb-12 text-lg'>Koolkat Tattoo Shop offers versatile tattoo services. Choose a custom design, pick from our pre-made flashes, or bring your own idea. With international acclaim and vast experience, particularly in Europe, Koolkat ensures your unique vision comes to life on your skin.</p>
            <ul className="flex flex-col md:flex-row gap-8">
                {benefits.map((benefit, idx) => <BenefitCard key={idx} benefit={benefit} />)}
            </ul>
        </motion.div>
    </motion.section>
}