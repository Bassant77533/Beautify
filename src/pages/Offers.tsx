import offers from "../../public/assets/offers (2).png"
import { FaArrowRight } from "react-icons/fa6";
//import goldenLeaves from "../../public/assets/golden-leaves.png"

const Offers = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#A0ADCD] to-[#D4DCF0]  py-5">
              {/* <img src={goldenLeaves} className="hidden md:block absolute top-[40%] left-0" /> */}

      <div className=" container mx-auto md:flex-row flex-col flex md:px-20 gap-10 px-10  ">
        <div className="items-center justify-center md:items-start md:text-start text-center gap-10 w-full md:w-1/2 flex flex-col  " >
          <div>
            <p className="text-6xl font-medium text-[#111633] mb-4">Spring Beauty Sale </p>
            <p className="text-4xl font-normal text-[#111633] mb-4">Up to 40% OFF </p>
            <p className="text-lg text-[#111633]">  Shop the latest arrivals and enjoy 30% off your favorites. This
            limited-time deal brings you unbeatable value on quality you’ll
            love. Don’t miss out—upgrade your style today with savings you
            deserve!</p>
          </div>
          <button className="cursor-pointer w-fit px-8 py-4 rounded-2xl text-2xl text-white font-normal hover:bg-[#1e2653] bg-[#111633] flex items-center gap-3  ">Order Now <FaArrowRight /></button>
        </div>
        <div className="w-full md:w-1/2 ">
          <img src={offers}/>
        </div>
      </div>
    </div>

  )
}

export default Offers
