
import Product from "../components/Product"
import {data} from "../data/data"
import goldenLeaves from "../../public/assets/golden-leaves.png"
const Products = () => {
  return (
    <div className="bg-white py-20  relative">
        <h1 className="text-center text-[#111633] text-4xl font-medium my-10">Our Featured Products</h1>
        <img src={goldenLeaves} className="hidden md:block absolute -top-15" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 md:px-20   ">
            {
                data.map((el)=>  <Product title={el.title}  img={el.image} desc={el.desc} />)
            }
        </div>
    </div>
  )
}

export default Products
