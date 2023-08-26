import Button from '@/components/button/Button'
import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <section
        className={styles.hero}
      >

        <div>

          <div>

            <h1>
              Award-winning custom designs and digital branding solutions
            </h1>

            <p>
              With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
            </p>

          </div>

          <Button
            color='white'
          >
            LEARN MORE
          </Button>

        </div>

        <Image
          src='/image-hero-phone.png'
          alt=''
          height={913}
          width={624}
        />

      </section>
      
    </main>
  )
}
