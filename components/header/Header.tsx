'use client'

import Image from 'next/image'
import styles from './header.module.css'
import Burger from '../icons/Burger'
import { useState } from 'react'
import CloseIcon from '../icons/CloseIcon'
import Menu from '../menu/Menu'
import Link from 'next/link'
import { useMediaQuery } from 'usehooks-ts'

export default function Header() {
    const [menuVisibile, setMenuVisible] = useState(false)

    const isMobile = useMediaQuery('(max-width: 695px)')

    const toggleMenu = () => {
        setMenuVisible(!menuVisibile)
    }

    return (
        <header
            className={styles.header}
        >

            <Link
                href='/'
            >
                <Image
                    src='/logo-dark.png'
                    alt='Designo'
                    height={27}
                    width={202}
                />
            </Link>

            {isMobile && (
                <button
                    className={styles.menu_btn}
                    onClick={toggleMenu}
                    data-menu-open={menuVisibile}
                >

                    <Burger />

                    <CloseIcon />

                </button>
            )}

            <Menu
                isVisible={!isMobile || menuVisibile}
                toggleMenu={toggleMenu}
            />

        </header>
    )
}