import { useState } from "react"

type message = {
    name: string
    email: string
    phone: string
    message: string
}

export const useForm = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const submit = (msg: message) => {
        setLoading(true)

        setTimeout(() => {
            console.log(msg)

            setLoading(false)
            setSuccess(true)
        }, 750)
    }
    
    return {
        loading,
        success,
        submit
    }
}