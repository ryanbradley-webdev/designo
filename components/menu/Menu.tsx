import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu({
    isVisible
}: {
    isVisible: boolean
}) {
    return (
        <nav
            className={styles.menu}
            aria-hidden={!isVisible}
        >

            <Link
                href='/about'
            >
                OUR COMPANY
            </Link>

            <Link
                href='/locations'
            >
                LOCATIONS
            </Link>

            <Link
                href='/contact'
            >
                CONTACT
            </Link>

        </nav>
    )
}