import { Link } from 'react-router-dom';
import { TbListDetails } from 'react-icons/tb';
import { TbShoppingBagCheck } from 'react-icons/tb';
import { shortenText } from '../helper/helper';

import styles from "./Card.module.css"
import { useCard } from '../context/CardContext';

function Card({data}) {
    const {id, title , image , price } = data;

    const [state , dispatch] = useCard();
    console.log(state)

    const cliclHandler = () => {
        dispatch({type : "ADD_ITEM" , payload: data})
    }
  return (
    <div className={styles.card} >
        <img  src={image} alt={title} />
        <h3>{shortenText(title)}</h3>
        <p> {price} </p>
        <div className={styles.actions} >
            <Link to={`/products/${id}`} > <TbListDetails/> </Link>
            <div>
                <button onClick={cliclHandler} >
                    <TbShoppingBagCheck/> 
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card