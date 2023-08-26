import Link from 'next/link'
import styles from './projectLink.module.css'
import React from 'react'

interface ProjectLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    background: string
    href: string
}

export default function ProjectLink({
    background,
    href,
    children
}: ProjectLinkProps) {
    return (
        <Link
            href={href}
            className={styles.link}
            data-variant={background}
        >
        
            <h2>
                {children}
            </h2>

            <p>
                VIEW PROJECTS
            </p>
        
        </Link>
    )
}