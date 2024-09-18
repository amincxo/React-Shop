import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext"

import { createQueryObject, filterProducts, searchProducts } from "../helper/helper";
import styles from "./ProductsPage.module.css"

function ProductsPage() {
    const [products] = useProducts();

    const [displayed , setDisplayed] = useState([]);
    const [search , setSearch] = useState("");
    const [query , setQuery] = useState({})
    const [searchParams , setSearchParams] = useSearchParams();


    useEffect(()=>{
        setDisplayed(products)
    },[products ])

    useEffect(()=> {
        setSearchParams(query)
        let finalProducts = searchProducts(products , query.search) ;
        finalProducts = filterProducts(finalProducts , query.category);
        setDisplayed(finalProducts);
    },[query])

    const searchHandler = () => {
        setQuery(query => createQueryObject(query,{search}))
    }

    const categoryHandler = (event) => {
        const {tagName} = event.target;
        const category = event.target.getAttribute('name').toLowerCase();
        if(tagName !=="LI") return;
        setQuery(query => createQueryObject(query , {category}) )
}

  return (
    <>
        <div>
            <input type="text" placeholder="Search ..." value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())} />
            <button onClick={searchHandler} >
                <ImSearch/>
            </button>
        </div>
        <div className={styles.container} >
            <div className={styles.products} >
                {displayed ? displayed.map((p)=> (
                    <Card key={p.id} data={p} />
                )) : <Loader/> }
                
            </div>
            <div>
                <div>
                    <FaListUl />
                    <p>دسته بندی ها</p>
                </div>
                <ul onClick={categoryHandler} >
                    <li name="All" >همه</li>
                    <li name="Electronics" >لوازم برقی</li>
                    <li name="Jewelery" >جواهرات</li>
                    <li name="Men's Clothing" >لباس مردانه</li>
                    <li name="Women's Clothing" >لباس زنانه</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default ProductsPage