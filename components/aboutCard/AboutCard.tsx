import { ReactNode } from 'react'
import styles from './aboutCard.module.css'

export default function AboutCard({
    children
}: {
    children: ReactNode
}) {
    return (
        <div
            className={styles.card}
        >
            
            {children}

        </div>
    )
}