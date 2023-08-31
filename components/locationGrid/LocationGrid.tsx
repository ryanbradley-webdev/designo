import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/Button'
import styles from './locationGrid.module.css'

export default function LocationGrid() {
    return (
        <section
            className={styles.location_grid}
        >

            <div>

                <div
                    className={styles.img_container}
                >

                    <Image
                        src='/illustration-canada.svg'
                        alt=''
                        height={202}
                        width={202}
                    />

                </div>
                
                <div>

                    <h3>
                        CANADA
                    </h3>

                    <Button
                        color='peach'
                    >
                        <Link
                            href='/locations'
                        >
                            SEE LOCATION
                        </Link>
                    </Button>

                </div>

            </div>

            <div>

                <div
                    className={styles.img_container}
                >

                    <Image
                        src='/illustration-australia.svg'
                        alt=''
                        height={202}
                        width={202}
                    />

                </div>

                <div>

                    <h3>
                        AUSTRALIA
                    </h3>

                    <Button
                        color='peach'
                    >
                        <Link
                            href='/locations'
                        >
                            SEE LOCATION
                        </Link>
                    </Button>

                </div>

            </div>

            <div>

                <div
                    className={styles.img_container}
                >

                    <Image
                        src='/illustration-united-kingdom.svg'
                        alt=''
                        height={202}
                        width={202}
                    />

                </div>

                <div>

                    <h3>
                        UNITED KINGDOM
                    </h3>

                    <Button
                        color='peach'
                    >
                        <Link
                            href='/locations'
                        >
                            SEE LOCATION
                        </Link>
                    </Button>

                </div>

            </div>

        </section>
    )
}