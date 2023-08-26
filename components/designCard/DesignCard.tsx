import Image from 'next/image'
import styles from './designCard.module.css'

export default function DesignCard({
    image,
    title,
    description
}: {
    image: string
    title: string
    description: string
}) {
    return (
        <div
            className={styles.card}
        >
            
            <Image
                src={image}
                alt=''
                width={700}
                height={640}
            />

            <div>

                <h3>
                    {title}
                </h3>

                <p>
                    {description}
                </p>

            </div>

        </div>
    )
}