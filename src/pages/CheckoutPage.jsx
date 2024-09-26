import BasketCard from '../components/BasketCard';
import BasketSidebar from '../components/BasketSidebar';
import {useCard} from '../context/CardContext'
import styles from "./CheckoutPage.module.css"

function CheckoutPage() {

    const [state , dispatch] = useCard();

    const clickHandler = (type , payload) => {
        dispatch({type ,payload})
    } 
    
    if (!state.itemsCounter) {
        return (
            <div className={styles.container}>
                <p>خالیه به خدا </p>
            </div>
        )
    }

  return (
    <div className={styles.container} >
        <BasketSidebar state={state} clickHandler={clickHandler}  />
        <div className={styles.priducts} >
            {state.selectedItems.map((product)=> (
                <BasketCard key={product.id} data={product} clickHandler={clickHandler}  />
            ))}
        </div>
    </div>
  )
}

export default CheckoutPage