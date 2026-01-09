import { useContext } from "react";
import { Supercontext } from "../../context";

function Products({getproduct})
{
    const {setdetails,navigate}=useContext(Supercontext);
    return(
        <div>
            <ul className="grid grid-flow-cols grid-cols-3 gap-10 px-20 pb-28">

                {
                    getproduct&&getproduct.length>0?getproduct.map(product=>{
                        return(
                        <li key={product?.id} className="border-solid border-2 border-black rounded-md p-10">
                            <div className="h-30 overflow-hidden flex items-center justify-center">
                                <img className="h-auto " src={product.thumbnail} />
                            </div>
                            <div>
                                <div className="pt-5">
                                    <div className="inline-block p-2 text-wrap">
                                        {product.title}
                                    </div>
                                    <div className="inline-block p-2">
                                        {product.price}
                                    </div>
                                </div>
                                <div>
                                    <button onClick={()=>{navigate("/productdetails");
                                        setdetails(product);}
                                    } className=" bg-black h-auto w-auto text-white px-3 py-2 rounded-lg">view details</button>
                                </div>
                            </div>
                        </li>
                    )
                    }):null
                }
            </ul>
        </div>
    )
}
export default Products