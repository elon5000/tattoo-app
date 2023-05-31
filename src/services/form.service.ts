
// * Modules
import axios from 'axios'

// * Types
import { Form } from '@/shared/types'

const API_KEY = 'f619ceafe0dd650b3f0b9c9d110b836b1f34372dab70127645350059b3c056d4'

async function postForm(form: Form) {
    try {
        const url = `https://formsubmit.co/${API_KEY}`
        await axios.post(url, form, {
            headers: {
                Accept: 'application/json',
            }
        })
    } catch (err) {
        throw new Error('Request failed')
    }
}


function validateMobile(mobile: string) {
    const israeliMobileRegex = /^05\d\s?(-)?\d{2}\1?\d{2}\1?\d{3}$/
    const internationalMobileRegex = /^\+\d{1,3}\s?\d{1,14}(\s?\d{1,13})?$/
    return israeliMobileRegex.test(mobile) || internationalMobileRegex.test(mobile)
}

function validateEmail(email: string) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email)
}


function validateName(username: string) {
    return username.length > 0
}

function getEmptyForm() {
    return {
        name: '',
        email: '',
        mobile: '',
        message: ''
    }
}


export const formService = {
    postForm,
    getEmptyForm,
    validateName,
    validateEmail,
    validateMobile
}