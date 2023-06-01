
function debounce(func: Function, timeout: number = 300) {
    let timer: NodeJS.Timeout | null = null
    return (...args: any[]) => {
       if (timer) clearTimeout(timer)
        timer = setTimeout(() => { func(...args) }, timeout)
    }
}

export const utilService = {
    debounce
}