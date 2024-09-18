import { FaListUl } from "react-icons/fa";

import { createQueryObject } from '../helper/helper';

function SideBar({setQuery}) {
    const categoryHandler = (event) => {
        const {tagName} = event.target;
        const category = event.target.getAttribute('name').toLowerCase();
        if(tagName !=="LI") return;
        setQuery(query => createQueryObject(query , {category}) )
}

  return (
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
  )
}

export default SideBar