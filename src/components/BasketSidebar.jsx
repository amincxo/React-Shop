import { TbChecklist } from "react-icons/tb"
import { FaHashtag } from "react-icons/fa6"
import { BsPatchCheck } from "react-icons/bs"

import styles from "./BasketSidebar.module.css"

function BasketSidebar({state , clickHandler}) {
  return (
    <div className={styles.sidebar} >
        <div>
            <TbChecklist />
            <p>قیمت کل :
                <span>${state.total}</span>
            </p>
        </div>
        <div>
            <FaHashtag />
            <p> تعداد :
                <span>{state.itemsCounter}</span>
            </p>
        </div>
        <div>
            <BsPatchCheck />
            <p> وضعیت :
                <span>{!state.checkout && "درحال انجام "  }</span>
            </p>
        </div>
        <button onClick={() => clickHandler("CHECKOUT") } >Checkout</button>
    </div>
  )
}

export default BasketSidebar