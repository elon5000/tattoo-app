
// * Components
import Form from '../Form'

// * Hooks
import { useState, useEffect } from 'react'

// * Modules
import { motion } from "framer-motion"

// * Types
import { SelectedPage } from "@/shared/types"
import { formService } from '@/services/form.service'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

type Form = {
    name: string
    mobile: string
    message: string
}

export default function ContactUs({ setSelectedPage }: Props) {

    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)

    return <motion.section
        id={SelectedPage.ContactUs}
        onViewportEnter={() => { setSelectedPage(SelectedPage.ContactUs) }}
        className="main-layout py-12 flex flex-col gap-6"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
        variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 }
        }}
    >
        <h3 className="card-title"><span className="text-red-100">Schedule a consultation</span> to get inked</h3>
        <p className="card-paragraph mb-1">
            Leave your details to make your first step into a new tattoo adventure with Koolkat. <br />
            You can add any description or though you have and we'll make sure to put it on your body.
        </p>
        {!isFormSubmitted && <Form setIsFormSubmitted={setIsFormSubmitted} />}
        {isFormSubmitted && <h3 className="text-center py-6">Request has been sent successfully ✅</h3>}
    </motion.section>
}