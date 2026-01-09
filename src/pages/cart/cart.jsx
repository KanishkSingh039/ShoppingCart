import Carttile from "./carttile";
import Ordersummary from "./ordersummary";

function Cart()
{
    return(
        <div>
            <div className=" font-bold text-3xl relative justify-center flex flex-row left-0 right-0 m-5"> Cart</div>
            <div className="h-full w-full grid grid-flow-col grid-cols-2 gap-10">
           <Carttile/>
            <Ordersummary/>
        </div>
        </div>
        
    )
}
export default Cart