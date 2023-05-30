
// * Components
import ImgGallery from '../ImgGallery'

// * Modules
import { motion } from 'framer-motion'

// * Types
import { SelectedPage } from '@/shared/types'

// * Assets
import Sailor from '@/assets/Sailor.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}


export default function Portfolio({ setSelectedPage } : Props) {

    const imgs: string[] = [Sailor, HomePageGraphic, Sailor, HomePageGraphic, Sailor, HomePageGraphic, Sailor, HomePageGraphic]

    return <section className="min-h-full py-14 w-full bg-gray-500-trans flex my-14 flex-col gap-10">
        <motion.div
            className="main-layout flex flex-col gap-6 text-gray-20"
            initial="hidden"
            whileInView="visible"
            onViewportEnter={() => { setSelectedPage(SelectedPage.Portfolio) }}
            id="portfolio"
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 }
            }}
        >
            <h3 className="card-title">Flashes and Artwork</h3>
            <p className="card-paragraph">
                Discover Your Next Tattoo - Explore Koolkat's Diverse Flashes Today!
            </p>
        </motion.div>
        <motion.div
            className="mt-10 h-[300px] w-full overflow-x-auto overflow-y-hidden"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 }
            }}
        >
            <ImgGallery imgs={imgs} />
        </motion.div>
    </section>
}