import { useProducts } from "../context/ProductContext"
import styles from "./ProductsPage.module.css"
import Card from "../components/Card";


function ProductsPage() {
    const [products] = useProducts();
  return (
    <div className={styles.container} >
        <div className={styles.products} >
            {/* {[!products.length] && <p>Loading ...</p> } */}
            {products?.map((p)=> (
                <Card key={p.id} data={p} />
            ))}
        </div>
        <div>sidebar</div>
    </div>
  )
}

export default ProductsPage