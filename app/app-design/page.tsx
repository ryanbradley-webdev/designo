import PageHero from '@/components/pageHero/PageHero'
import styles from './page.module.css'
import ContactCard from '@/components/contactCard/ContactCard'
import ProjectLink from '@/components/projectLink/ProjectLink'
import DesignCard from '@/components/designCard/DesignCard'

export default function AppDesign() {
    return (
        <main
            className={styles.main}
        >

            <PageHero>

                <h1>
                    App Design
                </h1>

                <p>
                    Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.
                </p>

            </PageHero>

            <section
                className={styles.card_grid}
            >

                <DesignCard
                    image='/image-airfilter.jpg'
                    title='AIRFILTER'
                    description='Solving the problem of poor indoor air quality by filtering the air'
                />

                <DesignCard
                    image='/image-eyecam.jpg'
                    title='EYECAM'
                    description='Product that lets you edit your favorite photos and videos at any time'
                />

                <DesignCard
                    image='/image-faceit.jpg'
                    title='FACEIT'
                    description='Get to meet your favorite internet superstar with the faceit app'
                />

                <DesignCard
                    image='/image-todo.jpg'
                    title='TODO'
                    description='A todo app that features cloud sync with light and dark mode'
                />

                <DesignCard
                    image='/image-loopstudios.jpg'
                    title='LOOPSTUDIOS'
                    description='A VR experience app made for Loopstudios'
                />

            </section>

            <section
                className={styles.design_links}
            >

                <ProjectLink
                    background='web'
                    href='/web-design'
                >
                    WEB DESIGN
                </ProjectLink>

                <ProjectLink
                    background='graphic'
                    href='/graphic-design'
                >
                    GRAPHIC DESIGN
                </ProjectLink>

            </section>

            <ContactCard />

        </main>
    )
}