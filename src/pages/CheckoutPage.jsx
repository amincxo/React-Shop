import BasketCard from '../components/BasketCard';
import {useCard} from '../context/CardContext'

function CheckoutPage() {

    const [state , dispatch] = useCard();

    const clickHandler = (type , payload) => {
        dispatch({type ,payload})
    } 
    
  return (
    <div>
        <div>
            {state.selectedItems.map((product)=> (
                <BasketCard key={product.id} data={product} clickHandler={clickHandler}  />
            ))}
        </div>
    </div>
  )
}

export default CheckoutPage