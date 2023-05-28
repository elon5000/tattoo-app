
// * Components
import BenefitCard from './BenefitCard'
import ActionButton from '../ActionButton'

// * Images
import Rose from '@/assets/Rose.png'
import Snake from '@/assets/Snake.png'
import Mom from '@/assets/Mom.png'

// * Modules
import { motion } from 'framer-motion'

// * Types
import { SelectedPage, Benefit } from '@/shared/types'

// * SVGs
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

export default function Benefits({ setSelectedPage }: Props) {

    const benefits: Array<Benefit> = [
        {
            svg: <HomeModernIcon className="circle-icon" />,
            title: 'Many art Facilities',
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
        className="card"
        onViewportEnter={() => { setSelectedPage(SelectedPage.Benefits) }}
    >
        <motion.div
            className="cursor-default"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 }
            }}>
            <h3 className="header-title">More than just a tattoo</h3>
            <p className="card-paragraph">Koolkat Tattoo Shop offers versatile tattoo services. Choose a custom design, pick from our pre-made flashes, or bring your own idea. With international acclaim and vast experience, particularly in Europe, Koolkat ensures your unique vision comes to life on your skin.</p>
            <ul className="flex flex-col md:flex-row gap-8 mb-16">
                {benefits.map((benefit, idx) => <BenefitCard key={idx} benefit={benefit} />)}
            </ul>
        </motion.div>

        <motion.div
            className="flex-between flex-col gap-12 md:flex-row"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 }
            }}
        >
            <img
                className="w-full max-w-[480px] h-fit md:max-w-[50%]"
                src={Rose}
                alt="Rose graphics" />
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <h3 className="relative font-extrabold uppercase text-3xl cursor-default">
                        Hundreds of customers getting <span className="text-red-100">inked</span>.
                        <img className="absolute bottom-[64%] hidden md:block left-12 rotate-90 max-w-[2.2vw]" src={Snake} alt="Snake graphics" />
                    </h3>
                    <p className="font-bold text-lg cursor-default">
                        Embrace the benefits of choosing Koolkat's Tattoo Shop. Revel in the fusion of traditional tattoos and edgy street art, guided by Koolkat's experienced hand. With a legacy of hundreds of satisfied customers, your trust in us turns into bold, unique, and inspiring ink stories. Here, we don't just ink skin - we honor your journey. Dive into the Koolkat experience, where our customer is the canvas of our artistry!
                    </p>
                </div>
                <motion.div
                    className="relative w-fit py-2"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0, x: -60 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <ActionButton
                        title="Contact Us"
                        children="Schedule now"
                        value={SelectedPage.ContactUs}
                        setSelectedPage={setSelectedPage}
                    />
                    <img src={Mom} className="absolute -top-[60%] left-[116%] max-w-[68%]" alt="Dagger graphic" />
                </motion.div>
            </div>
        </motion.div>
    </motion.section>
}