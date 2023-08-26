'use client'

import { useMediaQuery } from 'usehooks-ts'
import Image from 'next/image'
import ContactCard from '@/components/contactCard/ContactCard'
import styles from './page.module.css'

export default function Locations() {
    const largeScreen = useMediaQuery('(min-width: 769px)')

    return (
        <main
            className={styles.main}
        >

            <section
                className={styles.location}
            >

                <Image
                    src={largeScreen ? '/image-map-canada-desktop.png' : '/image-map-canada-tablet.png'}
                    alt=''
                    height={largeScreen ? 320 : 326}
                    width={largeScreen ? 375 : 689}
                />

                <div>

                    <h2>
                        Canada
                    </h2>

                    <div>

                        <strong>
                            Designo Central Office
                        </strong>

                        <p>
                            3886 Wellington Street
                        </p>

                        <p>
                            Toronto, Ontario M9C 3J5
                        </p>

                    </div>

                    <div>

                        <strong>
                            Contact
                        </strong>

                        <p>
                            P : &#43;1 253-863-8967
                        </p>

                        <p>
                            M : contact@designo.co
                        </p>

                    </div>

                </div>

            </section>

            <section
                className={styles.location}
            >

                <Image
                    src={largeScreen ? '/image-map-australia-desktop.png' : '/image-map-australia-tablet.png'}
                    alt=''
                    height={largeScreen ? 320 : 326}
                    width={largeScreen ? 375 : 689}
                />

                <div>

                    <h2>
                        Australia
                    </h2>

                    <div>

                        <strong>
                            Designo AU Office
                        </strong>

                        <p>
                            19 Balonne Street
                        </p>

                        <p>
                            New South Wales 2443
                        </p>

                    </div>

                    <div>

                        <strong>
                            Contact
                        </strong>

                        <p>
                            P : (02) 6720 9092
                        </p>

                        <p>
                            M : contact@designo.au
                        </p>

                    </div>

                </div>

            </section>

            <section
                className={styles.location}
            >

                <Image
                    src={largeScreen ? '/image-map-united-kingdom-desktop.png' : '/image-map-united-kingdom-tablet.png'}
                    alt=''
                    height={largeScreen ? 320 : 326}
                    width={largeScreen ? 375 : 689}
                />

                <div>

                    <h2>
                        United Kingdom
                    </h2>

                    <div>

                        <strong>
                            Designo UK Office
                        </strong>

                        <p>
                            13 Colorado Way
                        </p>

                        <p>
                            Rhyd-y-fro SA8 9GA
                        </p>

                    </div>

                    <div>

                        <strong>
                            Contact
                        </strong>

                        <p>
                            P : 078 3115 1400
                        </p>

                        <p>
                            M : contact@designo.uk
                        </p>

                    </div>

                </div>

            </section>

            <ContactCard />

        </main>
    )
}