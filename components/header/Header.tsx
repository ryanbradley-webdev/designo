'use client'

import Image from 'next/image'
import styles from './header.module.css'
import Burger from '../icons/Burger'
import { useState } from 'react'
import CloseIcon from '../icons/CloseIcon'
import Menu from '../menu/Menu'
import Link from 'next/link'

export default function Header() {
    const [menuVisibile, setMenuVisible] = useState(false)

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

            <button
                className={styles.menu_btn}
                onClick={toggleMenu}
                data-menu-open={menuVisibile}
            >

                <Burger />

                <CloseIcon />

            </button>

            <Menu
                isVisible={menuVisibile}
                toggleMenu={toggleMenu}
            />

        </header>
    )
}