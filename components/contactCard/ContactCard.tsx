import Link from 'next/link'
import Button from '../button/Button'
import styles from './contactCard.module.css'

export default function ContactCard() {
    return (
        <div
            className={styles.card}
        >
            
            <div>

                <h2>
                    Let&apos;s talk about your project
                </h2>

                <p>
                    Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                </p>

            </div>

            <Link
                href='/contact'
            >
                <Button
                    color='white'
                >
                    GET IN TOUCH
                </Button>
            </Link>

        </div>
    )
}