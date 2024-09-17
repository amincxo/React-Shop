import  { createContext, useEffect, useState } from 'react'

const ProductContext = createContext();

function ProductProvider({children}) {
    const [products , setProducts] = useState([]);

    useEffect(()=>{
        try {
            const  FetchProducts = async () => {
                setProducts( await api.get("/products"));
            };
        } catch (error) {
            console.log(error.message)
        }
        FetchProducts();
    },[])

  return (
    <ProductContext.Provider value={products} >
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider