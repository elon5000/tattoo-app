
function validateMobile(mobile: string) {
    const israeliMobileRegex = /^05\d\s?(-)?\d{2}\1?\d{2}\1?\d{3}$/
    const internationalMobileRegex = /^\+\d{1,3}\s?\d{1,14}(\s?\d{1,13})?$/
    console.log('israeliMobileRegex.test(mobile):', israeliMobileRegex.test(mobile))
    return israeliMobileRegex.test(mobile) || internationalMobileRegex.test(mobile)
}


function validateName(username: string) {
    return username.length > 0
}

function getEmptyForm() {
    return {
        name: '',
        mobile: '',
        message: ''
    }
}


export const formService = {
    getEmptyForm,
    validateName,
    validateMobile
}