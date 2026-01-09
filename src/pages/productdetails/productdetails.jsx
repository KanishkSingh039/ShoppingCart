import { useContext } from "react"
import { Supercontext } from "../../context"

function Productdetails()
{
    const {details,cartitem,handleaddcartitem}=useContext(Supercontext);
    console.log(details);
    console.log(cartitem);
    
    return(
        <div className="h-screen p-[20px] flex flex-row justify-start absolute right-0 left-0 top-0 bottom-0">
        <div className="absolute left-14">
            <div className="border-solid rounded-lg shadow-lg p-[10px]"><img src={details.thumbnail} className="h-[30vw] hover:h-[32vw] hover:p-0 " /></div>
            <ul className="flex flex-row justify-center p-[15px]">
                {
                    details.images&&details?.images?.length>0?details.images.map(pic=>{
                        return(
                            <li key={details.id} className="border-solid shadow-lg rounded-lg m-[10px]">
                                <img src={pic}  className="h-[80px]"/>
                            </li>
                        )
                    }):null
                }
            </ul>
        </div>
        <div className="flex flex-col p-[8vw] absolute right-[20vw] top-[10vw] ">
                <div><h2 className=" flex flex-row justify-start text-[2vw] m-1">{details.title}</h2></div>
                <div className="flex flex-row justify-start  text-[25px] m-1">{details.price}</div>
                <button className="border-solid w-40 shadow-lg rounded-lg h-12 text-center text-[25px] p-2"
                onClick={()=>{handleaddcartitem(details)
                }}>Add to cart</button>
        </div>
        </div>
        
    )
}
export default Productdetails