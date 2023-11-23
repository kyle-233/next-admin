import Image from 'next/image'
import styles from './editProduct.module.css'
import { fetchProduct } from '@/lib/data'

interface ParamsProps {
    id: string
}

interface EditProductPageProps {
    params: ParamsProps
}

const EditProductPage = async ({ params }: EditProductPageProps) => {
    const { id } = params
    const product = await fetchProduct(id)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={product.img} alt="" fill />
                </div>
                {product.title}
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder={product.title}
                    />
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        placeholder={product.price}
                    />
                    <label>Stock</label>
                    <input
                        type="number"
                        name="stock"
                        placeholder={product.stock}
                    />
                    <label>Color</label>
                    <input
                        type="text"
                        name="color"
                        placeholder={product.color}
                    />
                    <label>Size</label>
                    <input type="text" name="size" placeholder={product.size} />
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea
                        name="desc"
                        id="desc"
                        rows={10}
                        placeholder="description"
                    />
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditProductPage
