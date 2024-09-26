import { Link } from 'react-router-dom';
import { TbListDetails } from 'react-icons/tb';
import { TbShoppingBagCheck } from 'react-icons/tb';
import { productQuantity, shortenText } from '../helper/helper';
import { MdDeleteOutline } from 'react-icons/md';

import styles from "./Card.module.css"
import { useCard } from '../context/CardContext';

function Card({data}) {
    const {id, title , image , price } = data;

    const [state , dispatch] = useCard();

    const quantity = productQuantity(state , id)
    const cliclHandler = (type) => {
        dispatch({type , payload: data})
    }
  return (
    <div className={styles.card} >
        <img  src={image} alt={title} />
        <h3>{shortenText(title)}</h3>
        <p> {price}$ </p>
        <div className={styles.actions} >
            <Link to={`/products/${id}`} > <TbListDetails/> </Link>
            <div>
                { quantity === 1 && (<button onClick={()=> cliclHandler("REMOVE_ITEM")} >
                    <MdDeleteOutline/> 
                    </button>)}
               {
                    quantity > 1 && (<button onClick={()=> cliclHandler("DECREASE")} >
                    - 
                    </button>) 
               }
               {!!quantity && <span>{quantity}</span> }
                {
                    quantity === 0 ? (
                    <button onClick={()=> cliclHandler("ADD_ITEM")} >
                    <TbShoppingBagCheck/> 
                    </button>):(
                    <button onClick={()=> cliclHandler("INCREASE")} >+</button>)
                }



            </div>
        </div>
    </div>
  )
}

export default Card