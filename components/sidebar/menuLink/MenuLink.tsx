"use client"

import Link from 'next/link'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface MenuLinkItemProps {
    path: string
    icon: ReactNode
    title: string
}

interface MenuLinkProps {
    item: MenuLinkItemProps
}

export const MenuLink = ({item}: MenuLinkProps) => {
    const pathname = usePathname()
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
        {item.icon}
        {item.title}
    </Link>
  )
}

