import model from "../../public/assets/model.png"
import about from "../../public/assets/—Pngtree—packaging design for cosmetic products_5313014.png"
import ballgold from "../../public/assets/ballgold.png"
import balls from "../../public/assets/balls.png"
import treeleaf from "../../public/assets/treeleave.png"
const AboutUs = () => {
  return (
    <div className="relative pt-20 md:pt-0   bg-gradient-to-r from-[#A0ADCD] to-[#D4DCF0] ">
        <img src={treeleaf} className="absolute right-0 -top-40 hidden md:block" />
      <div className="container grid md:grid-cols-3 items-center">
        <div className=" max-w-[700px] ">
           <img src={about} alt=""  className="max-w-full hidden md:block bottom-0"/>
        </div> 
       
        <div className="text-center relative">
             <img src={ballgold} alt=""  className="hidden md:block absolute -bottom-40"/>
             <img src={balls} alt=""  className ="hidden md:block absolute -top-40"/>
            <h1 className="text-[#111633] text-4xl font-medium">About Us</h1>
            <p className="text-lg text-[#3F3F3F] mt-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
            <button className="mt-10 inline-block  cursor-pointer   px-8 py-4 font-semibold rounded-lg  text-white   hover:bg-[#1e2653] bg-[#111633]">Read more</button>
        </div>
        <div className="mt-20 mx-auto">
            <img src={model} alt=""  className="max-w-full"/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
