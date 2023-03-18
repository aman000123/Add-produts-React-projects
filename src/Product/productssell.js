

import Productstype from './productstype';

import Addproducts from './Addproducts';


import { useState } from "react";

const NoProducts =()=>{
    return(
  <>
    <h1>No Products Added by you till now</h1>
    </>
  
    )
  
  
  
  }


const Productssell =() =>{

    const [allproducts,setAllproducts] =useState([]);

const onNewProductsAdd =(products)=>{


 //set expense from expense
 setAllproducts([...allproducts,products])




}

return(


    <>
    <div><Addproducts onProductsadd ={onNewProductsAdd}/></div>
    <div className="flex">
    { allproducts.length === 0? <NoProducts/> :allproducts.map((allproducts, index) =>  (<Productstype  key={index} allproducts ={allproducts} ></Productstype >))
}
</div>

   
       
</>
)

}




export default Productssell