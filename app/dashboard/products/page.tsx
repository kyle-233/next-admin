import { Pagination, Search } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import styles from './products.module.css'
import { fetchProducts } from '@/lib/data'
import { deleteProduct } from '@/lib/actions'

interface SearchParamsProps {
    q?: string
    page?: string
}

interface ProductsPageProps {
    searchParams: SearchParamsProps
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
    const q = searchParams?.q || ''
    const page = parseInt(searchParams?.page || '1')

    const { count, products } = await fetchProducts(q, page)
    console.log(products)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..." />
                <Link href={'/dashboard/products/add'}>
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <div className={styles.product}>
                                    <Image
                                        src={product.img}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.productImage}
                                    />
                                    {product.title}
                                </div>
                            </td>
                            <td>{product.desc}</td>
                            <td>${product.price}</td>
                            <td>{product.createdAt.toString().slice(4, 16)}</td>
                            <td>{product.stock}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link
                                        href={`/dashboard/products/${product.id}`}
                                    >
                                        <button
                                            className={`${styles.button} ${styles.view}`}
                                        >
                                            View
                                        </button>
                                    </Link>
                                    <form action={deleteProduct}>
                                        <input
                                            type="hidden"
                                            name="id"
                                            value={product.id}
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

export default ProductsPage
