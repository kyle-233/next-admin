import Link from 'next/link'
import { Pagination, Search } from '@/components'
import styles from './users.module.css'
import Image from 'next/image'
import { fetchUsers } from '@/lib/data'
import { deleteUser } from '@/lib/actions'

interface SearchParamsProps {
    q?: string
    page?: string
}

interface UsersPageProps {
    searchParams: SearchParamsProps
}

const UsersPage = async ({ searchParams }: UsersPageProps) => {
    const q = searchParams?.q || ''
    const page = Number(searchParams?.page) || 1

    const { count, users } = await fetchUsers(q, page)

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <Link href={'/dashboard/users/add'}>
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <div className={styles.user}>
                                    <Image
                                        src={user.img}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                    />
                                    {user.username}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.createdAt?.toString().slice(4, 16)}</td>
                            <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
                            <td>{user.isActive ? 'Active' : 'Passive'}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/users/${user.id}`}>
                                        <button
                                            className={`${styles.button} ${styles.view}`}
                                        >
                                            View
                                        </button>
                                    </Link>
                                    <form action={deleteUser}>
                                        <input
                                            type="hidden"
                                            name="id"
                                            value={user.id}
                                        />
                                        <button
                                            className={`${styles.button} ${styles.delete}`}
                                        >
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default UsersPage
