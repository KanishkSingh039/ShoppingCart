import { useContext } from "react";
import { Supercontext } from "../../context";
function Carttile()
{
    const {cartitem,setcartitem,navigate,handletotalprice}=useContext(Supercontext);
    // const x=useMemo(()=>handletotalprice(cartitem),[cartitem]);
    console.log(cartitem);
    function removeitem(Id)
    {
        setcartitem(cartitem=>cartitem.filter(p=>p.id!=Id))
    }
    return(
         <div className="flex flex-col gap-5 justify-center ">
                {
                    cartitem&&cartitem?.length>0?cartitem.map(
                        product=>{
                            return(

                                <div className="flex flex-row  gap-10 p-[10px] h-[100px]">
                                    <div className="bg-slate-600 h-[80px] ">
                                        <img className="h-[80px] " src={product.thumbnail} />
                                    </div>
                                    <div className="flex flex-col justify-start gap-2 ">
                                        <div className="h-30px mb-4">
                                            <div className="text-[15px] ">
                                            {product.title}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bg-black text-white border-solid rounded-lg w-[80px] h-[30px] text-center px-1" onClick={()=>removeitem(product.id)}>
                                                Remove
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center  ">
                                        <div>
                                            <div className="text-[20px]">${product.price}</div>
                                        </div>
                                        <div>
                                            <button className="inline-block border-solid border-2 bg-black text-white  h-[40px] w-1/2 px-2 rounded-lg text-[25px] text-center" onClick={()=>{
                                                product.quantity=product.quantity-1;
                                                if(product.quantity===0)
                                                {
                                                    removeitem(product.id);
                                                }
                                                console.log(product);
                                                
                                            }}>-</button>
                                            <button className="inline-block border-solid bg-black text-white  h-[36px] w-1/2 px-2 rounded-lg  text-[25px] "onClick={()=>{
                                                product.quantity=product.quantity+1;
                                                console.log(product);
                                                
                                            }}>+</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    ):null
                }
                </div>
    )
}
export default Carttile