import { FaListUl } from "react-icons/fa";

import { createQueryObject } from '../helper/helper';

import styles from "./sidebar.module.css"

import { categories } from "../constants/list";





function SideBar({query,setQuery}) {
    const categoryHandler = (event) => {
        const {tagName} = event.target;
        const category = event.target.getAttribute('name').toLowerCase();
        if(tagName !=="LI") return;
        setQuery(query => createQueryObject(query , {category}) )
}

  return (
    <div className={styles.sidebar} >
        <div>
            <FaListUl />
            <p>دسته بندی ها</p>
        </div>
        <ul onClick={categoryHandler} >
            {categories.map(item => (
                <li key={item.id} name={item.name} className={item.name.toLowerCase() === query.category ? styles.selected : null}  >{item.type}</li>
            ))}
        </ul>
    </div>
  )
}

export default SideBar