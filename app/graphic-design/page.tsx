import PageHero from '@/components/pageHero/PageHero'
import styles from './page.module.css'
import ContactCard from '@/components/contactCard/ContactCard'
import ProjectLink from '@/components/projectLink/ProjectLink'
import DesignCard from '@/components/designCard/DesignCard'

export default function GraphicDesign() {
    return (
        <main
            className={styles.main}
        >

            <PageHero>

                <h1>
                    Graphic Design
                </h1>

                <p>
                    We deliver eye-catching branding materials that are tailored to meet your business objectives.
                </p>

            </PageHero>

            <section
                className={styles.card_grid}
            >

                <DesignCard
                    image='/image-change.jpg'
                    title='TIM BROWN'
                    description='A book cover designed for Tim Brown&apos;s new release, &apos;Change&apos;'
                />

                <DesignCard
                    image='/image-boxed-water.jpg'
                    title='BOXED WATER'
                    description='A simple packaging concept made for Boxed Water'
                />

                <DesignCard
                    image='/image-science.jpg'
                    title='SCIENCE!'
                    description='A poster made in collaboration with the Federal Art Project'
                />

            </section>

            <section
                className={styles.design_links}
            >

                <ProjectLink
                    background='app'
                    href='/app-design'
                >
                    APP DESIGN
                </ProjectLink>

                <ProjectLink
                    background='web'
                    href='/web-design'
                >
                    WEB DESIGN
                </ProjectLink>

            </section>

            <ContactCard />

        </main>
    )
}