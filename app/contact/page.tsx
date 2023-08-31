import LocationGrid from '@/components/locationGrid/LocationGrid'
import ContactForm from '@/components/contactForm/ContactForm'
import styles from './contact.module.css'

export default function Contact() {
    return (
        <main
            className={styles.main}
        >

            <ContactForm />

            <LocationGrid />

        </main>
    )
}