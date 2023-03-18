
import { useState } from "react";

const Addproducts =(props)=>{
    //console.log(props)


    
const productssell ={

    type:"",
    date:"",
    amounts:"",
    discriptions:""

}


const [sellitems, setSellitems] = useState(productssell)


const onClickHandeler=(event)=>{

    event.preventDefault();
    
   alert("Are you sure to wants Addings expenses .....")

   props.onProductsadd(sellitems);

   setSellitems(productssell);
    
}




const handleInputChange = (event, field) => {
    

    setSellitems((prevState) =>({ ...sellitems, [field]: event.target.value}))



  }

// const onTypeChangeHandeler=(event)=>{
//     productssell.type = event.target.value;

//    // console.log(event.target.value)

   
// }


// const onAmmountChangeHandeler =(event)=>{

//     productssell.amounts = event.target.value;

//    // console.log(event.target.value)
// }


// const onDateChangeHandeler =(event)=>{

//     productssell.date = event.target.value;

//    // console.log(event.target.value)
// }



return(


<>
<div className="add">
<form onSubmit={onClickHandeler} >
    
<input type="text"onChange={(e) => handleInputChange(e, 'type')} value={sellitems.type} placeholder="Choose products type"></input>
<input type="date" onChange={(e) => handleInputChange(e, 'date')} value={sellitems.date} placeholder="Deleviry date"></input>







<textarea  rows="2" cols="100" type="text"onChange={(e) => handleInputChange(e, 'discriptions')} value={sellitems.discriptions} placeholder="Products descriptions"></textarea>
<input type="number" className="amounts" onChange={(e) => handleInputChange(e, 'amounts')} value={sellitems.amounts} placeholder="Amounts"></input>


<div>
<button onClick={onClickHandeler}> Add Products</button>
</div>
</form>

</div>













</>
)

}

export default Addproducts;