
// * Modules
import { motion } from 'framer-motion'

type Props = {}

export default function Flashes(props: Props) {

    return <section className="card flex my-14 flex-col gap-10">
        <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
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
    </section>
}