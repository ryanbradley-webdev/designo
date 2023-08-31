import ProjectLink from '@/components/projectLink/ProjectLink'
import DesignCard from '@/components/designCard/DesignCard'
import DesignPage from '@/components/designPage/DesignPage'

export default function GraphicDesign() {
    return (
        <DesignPage
            title='Graphic Design'
            subtitle='We deliver eye-catching branding materials that are tailored to meet your business objectives.'
            cards={[
                <DesignCard
                    image='/image-change.jpg'
                    title='TIM BROWN'
                    description='A book cover designed for Tim Brown&apos;s new release, &apos;Change&apos;'
                />,
                <DesignCard
                    image='/image-boxed-water.jpg'
                    title='BOXED WATER'
                    description='A simple packaging concept made for Boxed Water'
                />,
                <DesignCard
                    image='/image-science.jpg'
                    title='SCIENCE!'
                    description='A poster made in collaboration with the Federal Art Project'
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
                    background='web'
                    href='/web-design'
                >
                    WEB DESIGN
                </ProjectLink>
            ]}
        />
    )
}