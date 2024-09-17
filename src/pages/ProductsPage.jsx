import { useProducts } from "../context/ProductContext"
import styles from "./ProductsPage.module.css"
import Card from "../components/Card";
import Loader from "../components/Loader";


function ProductsPage() {
    const [products] = useProducts();
  return (
    <div className={styles.container} >
        <div className={styles.products} >
            {products ? products.map((p)=> (
                <Card key={p.id} data={p} />
            )) : <Loader/> }
            
        </div>
        <div>sidebar</div>
    </div>
  )
}

export default ProductsPage