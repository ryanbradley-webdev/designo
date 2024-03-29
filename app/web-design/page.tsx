import ProjectLink from '@/components/projectLink/ProjectLink'
import DesignCard from '@/components/designCard/DesignCard'
import DesignPage from '@/components/designPage/DesignPage'

export default function WebDesign() {
    return (
        <DesignPage
            title='Web Design'
            subtitle='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
            cards={[
                <DesignCard
                    image='/image-express.jpg'
                    title='EXPRESS'
                    description='A multi-carrier shipping website for ecommerce businesses'
                />,
                <DesignCard
                    image='/image-transfer.jpg'
                    title='TRANSFER'
                    description='Sit for low-cost money transfers and sending money within seconds'
                />,
                <DesignCard
                    image='/image-photon.jpg'
                    title='PHOTON'
                    description='A state-of-the-art music player with high-resolution audio and DSP effects'
                />,
                <DesignCard
                    image='/image-builder.jpg'
                    title='BUILDER'
                    description='Connects users with local contractors based on their location'
                />,
                <DesignCard
                    image='/image-blogr.jpg'
                    title='BLOGR'
                    description='Blogr is a platform for creating an online blog or publication'
                />,
                <DesignCard
                    image='/image-camp.jpg'
                    title='CAMP'
                    description='Get expert training in coding, data, design, and digital marketing'
                />
            ]}
            links={[
                <ProjectLink
                    background='app'
                    href='/app-design'
                >
                    APP DESIGN
                </ProjectLink>,
                <ProjectLink
                    background='graphic'
                    href='/graphic-design'
                >
                    GRAPHIC DESIGN
                </ProjectLink>
            ]}
        />
    )
}