
import Logo from "../../public/assets/Logo.png"
const Navbar = () => {
  return (
    <div className="   py-5  px-10  absolute w-full">
      <div className="relative container flex items-center mx-auto">
        <img className="absolute min-h-6"  src={Logo}  />
      <ul className=" hidden md:flex mx-auto   gap-10 font-semibold text-[18px]  text-[#111633] ">
        <li className="hover:text-[white] cursor-pointer">Home</li>
        <li className="hover:text-[white] cursor-pointer">Blog</li>
        <li className="hover:text-[white] cursor-pointer">Contact Us</li>
        <li className="hover:text-[white] cursor-pointer">Services</li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
