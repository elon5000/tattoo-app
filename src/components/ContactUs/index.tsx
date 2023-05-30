
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

    const [form, setForm] = useState<Form>(formService.getEmptyForm())
    const [isNameValid, setIsNameValid] = useState<boolean>(false)
    const [isMobileValid, setIsMobileValid] = useState<boolean>(false)
    const [isFormSubmmited, setIsFormSubmitted] = useState<boolean>(false)
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true)

    useEffect(checkDisabled, [form])

    function onHandleChange({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name: field, value } = target
        if (field === 'name') setIsNameValid(formService.validateName(value))
        if (field === 'mobile') setIsMobileValid(formService.validateMobile(value))
        setForm((prevForm) => ({ ...prevForm, [field]: value }))
    }

    function checkDisabled() {
        if (!isNameValid) return setIsSubmitDisabled(true)
        if (!isMobileValid) return setIsSubmitDisabled(true)
        setIsSubmitDisabled(false)
    }

    function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault()
        setIsFormSubmitted(true)
        console.log('form submitted', form)
    }

    const submitBtnStyles = 'mt-3 disabled:cursor-not-allowed font-bold uppercase text-2xl disabled:bg-gray-100 bg-primary-500 text-gray-20 hover:bg-red-100 w-[220px] p-2 rounded-lg'

    return <motion.section
        id={SelectedPage.ContactUs}
        onViewportEnter={() => { setSelectedPage(SelectedPage.ContactUs) }}
        className="main-layout py-8 flex flex-col gap-4">
        <h3 className="card-title"><span className="text-red-100">Schedule a consultation</span> to get inked</h3>
        <p className="card-paragraph">
            Leave your details to make your first step into a new tattoo adventure with Koolkat. <br />
            You can add any description or though you have and we'll make sure to put it on your body.
        </p>
        <form onSubmit={onSubmit} className="flex flex-col items-center gap-4" action="">
            <div className="form-input-container">
                {!isNameValid && <p className="invalid-input-warning">*Please fill this field</p>}
                <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="name"
                    value={form.name}
                    onChange={onHandleChange}
                />
            </div>
            <div className="form-input-container">
            {!isMobileValid && <p className="invalid-input-warning">*Please make sure your number is valid</p>}
            <input
                type="tel"
                name="mobile"
                className="form-input"
                placeholder="mobile"
                value={form.mobile}
                onChange={onHandleChange}

            />
            </div>
            <textarea
                name="message"
                className="form-input"
                value={form.message}
                rows={6}
                placeholder="message"
                onChange={onHandleChange}
            />
            <button
                type="submit"
                className={submitBtnStyles}
                disabled={isSubmitDisabled}
            >
                Submit
            </button>
        </form>
    </motion.section>
}