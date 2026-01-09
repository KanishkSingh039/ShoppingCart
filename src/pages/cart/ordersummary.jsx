import { Supercontext } from "../../context";
import { useContext} from "react";

function Ordersummary()
{
    const {cartitem,handletotalprice,navigate}=useContext(Supercontext);
        const x=handletotalprice(cartitem)
    return(
        <div className=" flex flex-col items-center justify-center">
                <div className="flex flex-col bg-slate-200 p-[20px] pt-[10px] rounded-lg">
                    <div className="text-2xl font-bold flex flex-row justify-start border-b-2 shadow-sm pb-2 mb-1">
                        Order Summary
                    </div>
                    <div>
                        <div className="flex flex-col items-start">
                            <div className="text-xl">Total</div>
                            <div>{x}</div>
                        </div>
                        <div className="flex flex-row gap-[20px] pt-2">
                            <button className="bg-black text-white rounded-2xl px-[10px] py-[5px]">Chechout</button>
                                <button className="bg-black text-white rounded-2xl px-[10px] py-[5px]" onClick={()=>navigate("/productlist")}>Countinue Shoping</button>

                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Ordersummary