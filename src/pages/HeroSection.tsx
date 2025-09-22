import Navbar from './Navbar'
import hero from "../../public/assets/hero3.png"
const HeroSection = () => {
  return (
    <div className='relative flex bg-gradient-to-r from-[#A0ADCD] to-[#D4DCF0] min-h-screen '>
      <Navbar/>
      <div className='mt-20 px-10 container mx-auto  flex flex-col md:flex-row items-center  flex-1'>
        <div className=' w-full md:w-1/2  '>
            <p className='text-center md:text-start break-words   text-[clamp(3rem,6vw,7rem)]  font-semibold leading-26'>
                <p className='font-extralight'>Enhance</p> 
                your Natural 
                Radiance
            </p>
            <button className='block md:inline-block  mx-auto mt-10 bg-[#111633] text-white px-8 py-4 font-semibold rounded-lg cursor-pointer hover:bg-[#181f46]'>Order Now </button>
        </div>
        <div className='w-full md:w-1/2  '>
              <img className='max-w-full ' src={hero} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
