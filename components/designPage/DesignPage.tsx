import { ReactNode } from 'react'
import ContactCard from '../contactCard/ContactCard'
import PageHero from '../pageHero/PageHero'
import ProjectLink from '../projectLink/ProjectLink'
import styles from './designPage.module.css'

export default function DesignPage({
    title,
    subtitle,
    cards,
    links
}: {
    title: string
    subtitle: string
    cards: ReactNode[]
    links: ReactNode[]
}) {
    return (
        <main
            className={styles.main}
        >

            <PageHero>

                <h1>
                    {title}
                </h1>

                <p>
                    {subtitle}
                </p>

            </PageHero>

            <section
                className={styles.card_grid}
            >

                {cards}

            </section>

            <section
                className={styles.design_links}
            >

                {links}

            </section>

            <ContactCard />

        </main>
    )
}