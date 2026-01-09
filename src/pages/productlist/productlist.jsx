import { useContext } from "react"
import { Supercontext } from "../../context"
import Products from "./products";

function Productlist()
{
    const {product,navigate}=useContext(Supercontext);
    return(
        <section className="inset-x-0 bg-white w-full">
        <div className="p-10 mb-5 flex flex-row inset-x-0 top-0 items-center justify-center absolute h-10  z-10">
            <h1 className="text-[40px]">
            Our Products
            </h1>
            <div className="right-10 absolute"><button className="bg-black h-auto w-auto text-white px-3 py-2 rounded-lg" onClick={()=>navigate("/cart")}>Cart</button></div>
            </div>
        <div className="top-24 absolute ">
        <Products getproduct={product}/>
        </div>
        </section>
    )
}
export default Productlist