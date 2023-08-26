import Button from '@/components/button/Button'
import styles from './page.module.css'
import Image from 'next/image'
import ProjectLink from '@/components/projectLink/ProjectLink'

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

      <section
        className={styles.projects}
      >

        <ProjectLink
          background='web'
          href='/web-design'
        >
          WEB DESIGN
        </ProjectLink>

        <ProjectLink
          background='app'
          href='/app-design'
        >
          APP DESIGN
        </ProjectLink>

        <ProjectLink
          background='graphic'
          href='/graphic-design'
        >
          GRAPHIC DESIGN
        </ProjectLink>

      </section>

      <section
        className={styles.attributes}
      >

        <div>

          <Image
            src='/illustration-passionate.svg'
            alt=''
            height={202}
            width={202}
          />

          <div>

            <h3>
              PASSIONATE
            </h3>

            <p>
              Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
            </p>

          </div>

        </div>

        <div>

          <Image
            src='/illustration-resourceful.svg'
            alt=''
            height={202}
            width={202}
          />

          <div>

            <h3>
              RESOURCEFUL
            </h3>

            <p>
              Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients&apos; needs.
            </p>

          </div>

        </div>

        <div>

          <Image
            src='/illustration-friendly.svg'
            alt=''
            height={202}
            width={202}
          />

          <div>

            <h3>
              FRIENDLY
            </h3>

            <p>
              We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
            </p>

          </div>

        </div>

      </section>
      
    </main>
  )
}
