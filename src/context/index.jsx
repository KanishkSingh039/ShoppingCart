import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Supercontext = createContext(null);

export function Globalprovider({children})
{
    const [details,setdetails]=useState([]);
    const[product,setproducts]=useState([]);
    const[cartitem,setcartitem]=useState([]);
    const navigate=useNavigate();
        async function fetching()
        {
            const response=await fetch('https://dummyjson.com/products');
            const data=await response.json();
            
            if(data&&data?.products)
                {
                setproducts(data?.products);
            }
        }
        useEffect(()=>{
            fetching();
            // setcartitem(JSON.parse(localStorage.getItem('cartitem')));
        },[]);
        console.log(product);
        function handleaddcartitem(productdata)
        {
            let cpycartitem=[...cartitem];
            const finded=cpycartitem.findIndex((pro)=>pro.id===productdata.id);
            console.log(finded);
            
            if(finded==-1)
            {
                cpycartitem.push({
                    ...productdata,
                    quantity:1,
                    totalprice:productdata?.price
                })
                navigate("/cart")
            }
            else{
                console.log("product already stored");
            }
            console.log(cpycartitem);
            setcartitem(cpycartitem);
            localStorage.setItem("cartitem",JSON.stringify(cartitem));
        }
        function handletotalprice(items)
        {
            let x=0;
            items&&items.length>0?items.map(item=>{
                x=x+(item.totalprice*item.quantity)
            }):x=0;
            return x;
        }
        
        return(
            <Supercontext.Provider value={
               { product,details,setdetails,cartitem,setcartitem,navigate,handleaddcartitem,handletotalprice }
            }>{children}</Supercontext.Provider>
    )
}