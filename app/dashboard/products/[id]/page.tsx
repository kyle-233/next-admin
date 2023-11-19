import Image from 'next/image'
import styles from './editProduct.module.css'

const EditProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src='' alt='' fill />
                </div>
                iPhone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name='title' placeholder='Jhon Doe' />
                    <label>Price</label>
                    <input type="number" name='price' placeholder='JhonDoe@gmail.com' />
                    <label>Stock</label>
                    <input type="number" name='stock' placeholder='23' />
                    <label>Color</label>
                    <input type="text" name='color' placeholder='red' />
                    <label>Size</label>
                    <input type='text' name='size' placeholder='size' />
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value='kitchen'>Kitchen</option>
                        <option value='computers'>Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea name='desc' id='desc' rows={10} placeholder='description' />
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditProductPage