import LocationGrid from '@/components/locationGrid/LocationGrid'
import styles from './page.module.css'
import ContactForm from '@/components/contactForm/ContactForm'

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