import logo from "../../public/assets/Logo.png"
import news1 from "../../public/assets/news1.png"
import news2 from "../../public/assets/news2.png"
 
const Footer = () => {
  return (
    <div className="pt-20 relative">
      
        <div className="    items-center font-medium  px-20 pt-10  bg-gradient-to-r from-[#A0ADCD] to-[#D4DCF0]">
         <img src={logo}  className=" mx-auto md:mx-0 mb-5"/>
      <div className="container mx-auto grid md:grid-cols-3 items-center text-center md:text-start gap-20 ">
          
        <div className="">
         
            <p className="text-[#111633] text-3xl mb-5 font-medium">Explore</p>
            <ul className="text-[#3F3F3F] text-xl flex flex-col gap-2 font-medium">
                <li>Home</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Services</li>
            </ul>
        </div>
        <div>
            <p className="text-[#111633] text-3xl mb-5 font-medium">About Us</p>
            <ul className="text-[#3F3F3F] text-xl flex flex-col gap-2 font-medium ">
                <li>(456) 789-12301</li>
                <li>info@modrino.co.uk</li>
                <li>South 13th street</li>
                <li>New york America</li>
            </ul>
        </div>
        <div>
            <p className="text-[#111633] text-3xl mb-5 font-medium">Recent News</p>
            <div className="flex items-center mb-5 gap-4"  >
                <img src={news1}/>
                <div className="text-[#111633] ">
                    <p className=" mb-2">June 14,2024</p>
                    <p className="text-lg">Anti-Aging Cream</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <img src={news2}/>
                 <div  className="text-[#111633] "><p className="mb-2">June 14,2024</p>
                <p className="text-lg">Night Cream</p></div>
            </div>
        </div>
      </div>
          <p className="text-center text-[#3F3F3F]  pt-10 pb-2">© 2025 Bake House. All rights reserved</p>

    </div>
    </div>
  )
}

export default Footer
