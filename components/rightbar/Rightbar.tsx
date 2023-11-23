import Image from 'next/image'
import styles from './Rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

export const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="" alt="" fill className={styles.bg} />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>Available Now</span>
                    <h3 className={styles.title}>
                        How to use the new version of the admin dashboard?
                    </h3>
                    <span className={styles.subtitle}>
                        Take 4 minutes to learn
                    </span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ducimus voluptatum ut assumenda libero dolorem?
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notification}>Coming Soon</span>
                    <h3 className={styles.title}>
                        New server actions are available, partial pre-rendering
                        is coimg up!
                    </h3>
                    <span className={styles.subtitle}>
                        Boost your productivity
                    </span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ducimus voluptatum ut assumenda libero dolorem?
                    </p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>
        </div>
    )
}
