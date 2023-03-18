
import './products.css';



const  Productstype =(props)=>{
   // console.log(props)




    // const products_item ={

    //     type:"mail",
    //     date:"3/17/2023",
    //     price:"100$"}

    return(
<>


 
 

 
    <div className="box">
      <h2 className="products_types">Products type:{props.allproducts.type}</h2>

       <div className="pro_dec">Products Decription:{props.allproducts.discriptions}</div>

      <h2 className="products_date">Deleviry Date:{props.allproducts.date}</h2>
      <button className="products_rate">Total Rs:{props.allproducts.amounts}</button>

      </div>

      
    



      
     

   
</>
    )

}


export default Productstype