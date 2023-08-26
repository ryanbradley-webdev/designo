'use client'

import { useRef, useState } from 'react'
import Button from '../button/Button'
import ErrorMsg from './ErrorMsg'
import styles from './contactForm.module.css'

export default function ContactForm() {
    const [nameInvalid, setNameInvalid] = useState(false)
    const [emailInvalid, setEmailInvalid] = useState(false)
    const [phoneInvalid, setPhoneInvalid] = useState(false)
    const [messageInvalid, setMessageInvalid] = useState(false)

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const validateInput = (e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let validateAll = false
        let isValid = true

        if (!e) {
            validateAll = true
        }

        const id = e?.target.id

        if (validateAll || id === 'name') {
            const nameIsInvalid = nameRef.current?.value === undefined || nameRef.current?.value === ''

            if (nameIsInvalid) {
                isValid = false
            }

            setNameInvalid(nameIsInvalid)
        }

        if (validateAll || id === 'email') {
            const emailIsInvalid = emailRef.current?.value === undefined || emailRef.current?.value === ''

            if (emailIsInvalid) {
                isValid = false
            }

            setEmailInvalid(emailIsInvalid)
        }

        if (validateAll || id === 'phone') {
            const phoneIsInvalid = phoneRef.current?.value === undefined || phoneRef.current?.value === ''

            if (phoneIsInvalid) {
                isValid = false
            }

            setPhoneInvalid(phoneIsInvalid)
        }

        if (validateAll || id === 'message') {
            const messageIsInvalid = messageRef.current?.value === undefined || messageRef.current?.value === ''

            if (messageIsInvalid) {
                isValid = false
            }

            setMessageInvalid(messageIsInvalid)
        }

        return isValid
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateInput()) {
            return
        }

        const contactMsg = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            phone: phoneRef.current?.value,
            message: messageRef.current?.value
        }

        console.log(contactMsg)
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >

            <section
                className={styles.heading}
            >

                <h1>
                    Contact Us
                </h1>

                <p>
                    Ready to take it to the next level? Let&apos;s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that&apos;s relatable to your users, drop us a line.
                </p>

            </section>

            <fieldset
                className={styles.fields}
            >
                <div>

                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder='Name'
                        data-invalid={nameInvalid}
                        ref={nameRef}
                        onChange={validateInput}
                    />

                    <ErrorMsg />

                </div>

                <div>

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Email Address'
                        data-invalid={emailInvalid}
                        ref={emailRef}
                        onChange={validateInput}
                    />

                    <ErrorMsg />

                </div>

                <div>

                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder='Phone'
                        data-invalid={phoneInvalid}
                        ref={phoneRef}
                        onChange={validateInput}
                    />

                    <ErrorMsg />

                </div>

                <div>

                    <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        placeholder='Your Message'
                        data-invalid={messageInvalid}
                        ref={messageRef}
                        onChange={validateInput}
                    ></textarea>

                    <ErrorMsg />

                </div>

                <Button
                    color='white'
                >
                    SUBMIT
                </Button>

            </fieldset>

        </form>
    )
}