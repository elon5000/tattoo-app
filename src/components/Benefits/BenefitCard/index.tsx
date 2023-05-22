
// * Modules
import { motion } from 'framer-motion'

// * Types
import { Benefit } from "@/shared/types"

type Props = {
    benefit: Benefit
}

const cardStyles = 'flex flex-col rounded-md items-center py-12 px-8 border-2 border-solid border-secondary-500'

export default function BenefitCard({ benefit }: Props) {
    return <motion.div
        key={benefit.title}
        className={cardStyles}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 }
        }}
    >
        {benefit.svg}
        <h5 className="font-extrabold mb-4 text-xl">{benefit.title}</h5>
        <p className="text-lg">{benefit.description}</p>
    </motion.div>
}