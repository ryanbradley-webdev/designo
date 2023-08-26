import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu({
    isVisible,
    toggleMenu
}: {
    isVisible: boolean
    toggleMenu: () => void
}) {
    return (
        <nav
            className={styles.menu}
            aria-hidden={!isVisible}
        >

            <Link
                href='/about'
                onClick={toggleMenu}
            >
                OUR COMPANY
            </Link>

            <Link
                href='/locations'
                onClick={toggleMenu}
            >
                LOCATIONS
            </Link>

            <Link
                href='/contact'
                onClick={toggleMenu}
            >
                CONTACT
            </Link>

        </nav>
    )
}