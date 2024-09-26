import { Link } from "react-router-dom"
import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { useCard } from "../context/CardContext"

import styles from "./Layout.module.css"


function Layout({children}) {
    const [state] = useCard();
  return (
    <>
        <header className={styles.header} >
            <Link to={"/products"} >AminShop</Link>
            <div>
                <Link to={"/checkout"} > 
                <PiShoppingCartSimpleBold/>
                {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
                </Link>
            </div>
        </header>
        {children}
        <footer className={styles.footer} >
            <p>developed by aminborvayeh</p>
        </footer>
    </>
  )
}

export default Layout