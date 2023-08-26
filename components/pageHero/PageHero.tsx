import { ReactNode } from 'react'
import styles from './pageHero.module.css'

export default function PageHero({
    children
}: {
    children: ReactNode
}) {
    return (
        <section
            className={styles.hero}
        >
            
            {children}

        </section>
    )
}