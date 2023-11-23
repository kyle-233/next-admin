
import {
  MdAttachMoney,
  MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings, MdShoppingBag, MdSupervisedUserCircle
} from "react-icons/md"


import styles from './sidebar.module.css'
import { MenuLink } from "./menuLink/MenuLink"
import Image from "next/image"
import { auth, signOut } from "@/app/auth"

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'DashBoard',
        path: '/dashboard',
        icon: <MdDashboard />
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />
      },
    ]
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />
      },
    ]
  }
]

export const Sidebar = async () => {
  const {user} = await auth()
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src={user.img} alt="" width={50} height={50} />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {
          menuItems.map((cat) => (
            <li key={cat.title}>
              <span className={styles.cat}>{cat.title}</span>
              {
                cat.list.map(item => (
                  <MenuLink item={item} key={item.title} />
                ))
              }
            </li>
          ))
        }
      </ul>
      <form action={async () => {
        "use server"
        await signOut()
      }}>
        <button className={styles.logout}>
          <MdLogout />
          Logout</button>
      </form>
    </div>
  )
}
