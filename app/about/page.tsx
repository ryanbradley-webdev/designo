import AboutCard from '@/components/aboutCard/AboutCard'
import styles from './page.module.css'
import ContactCard from '@/components/contactCard/ContactCard'
import LocationGrid from '@/components/locationGrid/LocationGrid'

export default function About() {
    return (
        <main
            className={styles.main}
        >

            <AboutCard>

                <div>

                    <h1>
                        About Us
                    </h1>

                    <p>
                        Founded in 2010, we are a creative agency that produces lasting results for our clients. We&apos;ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We&apos;re always looking forward to creating brands, products, and digital experiences that connect with our clients&apos; audiences.
                    </p>

                </div>

            </AboutCard>

            <AboutCard>

                <div>

                    <h2>
                        World-class talent
                    </h2>

                    <p>
                        We are a crew of strategists, problem-solvers, and technologists. Every design is thoughfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
                    </p>

                    <br />

                    <p>
                        Our team is multi-disciplinary and we are not merely interested in form - content and meaning are just as important. We give great importance to craftmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand&apos;s story and mission.
                    </p>

                </div>

            </AboutCard>

            <LocationGrid />

            <AboutCard>

                <div>

                    <h2>
                        The real deal
                    </h2>

                    <p>
                        As strategic partners in our clients&apos; businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.
                    </p>

                    <br />

                    <p>
                        We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
                    </p>

                </div>

            </AboutCard>

            <ContactCard />

        </main>
    )
}