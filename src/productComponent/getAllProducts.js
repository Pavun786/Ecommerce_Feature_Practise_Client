import {useState,useEffect} from "react"



 function GetAllProducts(){

  const [data,setData] = useState("")
  const userId = localStorage.getItem("userId")

  useEffect(()=>{
      getDatas()
  },[])

  const getDatas = async()=>{

      const value = await fetch("http://localhost:4600/product/getAll",{
        method : "GET"
      })

      const res = await value.json()

      setData(res)
  }


  const addItems = async(id)=>{

    const addItem = await fetch(`http://localhost:4600/cart/addtocart/${id}?userId=${userId}`,{
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        }
    })

    const res = await addItem.json()

      if(addItem.status == 200){
         alert(res.message)
      }else if(addItem.status == 403){
        alert(res.message)
      }
  }

     return(
        <div className="products-container">
           { data && data.map((ele,index)=>{
              return(
                <div key={index} className="items">
                    <div>ProductName : {ele.productName}</div>
                    <div>Category : {ele.categoryName}</div>
                    <div>Price :{ele.price}</div>
                    
                    <button onClick={()=>addItems(ele._id)} disabled={ ele.quantity < 1 ? true : false}>Add to cart</button>
                  {ele.quantity < 1 ? <p className="alert">"Out of stock..!"</p> : (ele.quantity <=5 ? <p className="alert2">Hurry {ele.quantity} pieces only left !</p> : null)}   
                </div>
              )
           })}
        </div>
     )
 }

 export default GetAllProducts;