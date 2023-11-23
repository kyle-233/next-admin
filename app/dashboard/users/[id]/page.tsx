import Image from 'next/image'
import styles from './editUser.module.css'
import { fetchUser } from '@/lib/data'
import { updateUser } from '@/lib/actions'

interface ParamsProps {
    id: string
}

interface EditUserPageProps {
    params: ParamsProps
}

const EditUserPage = async ({ params }: EditUserPageProps) => {
    const { id } = params
    const user = await fetchUser(id)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={user.img} alt="" fill />
                </div>
                {user.username}
            </div>
            <div className={styles.formContainer}>
                <form action={updateUser} className={styles.form}>
                    <input type="hidden" name="id" value={user.id} />
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder={user.username}
                    />
                    <label>Email</label>
                    <input type="email" name="email" placeholder={user.email} />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Phone</label>
                    <input type="phone" name="phone" placeholder={user.phone} />
                    <label>Address</label>
                    <textarea name="address" placeholder={user.address} />
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditUserPage
