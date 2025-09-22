import organic from "../../public/assets/icon1.png"
import alovera from "../../public/assets/icon2.png"
import JojobaExtract from "../../public/assets/icon3.png"
const Advertisment2 = () => {
  return (
<div
    className="min-h-screen flex items-center  bg-gradient-to-r from-[#A0ADCD] to-[#D4DCF0] md:bg-[url('/assets/ad2.png')] md:bg-cover md:bg-center md:bg-no-repeat" 
   
>
     <div className='text-center w-[600px]'>
                <h1 className='  text-[#111633] text-5xl font-medium my-10'><p className="font-light">Premium </p>Quality Products</h1>
                <p className='  text-[#3F3F3F] font-medium text-lg max-w-[400px] mx-auto'> It is a long established fact that a reader will be distracted by the readable content of a pagek like readable English.</p>
                <p className="text-[#111633] text-3xl mt-10">What’s in it? </p>
                <ul className="flex gap-10 justify-center mt-20  items-center">
                    <li className="text-center text-[#414141] text-lg font-medium">
                        <img src={alovera} alt="" className="mx-auto mb-2 w-16 h-16 object-contain" />
                        <p>Aloe Vera</p>
                    </li>
                    <li  className="text-center text-[#414141] text-lg font-medium">
                        <img src={organic} alt=""  className="mx-auto mb-2 w-16 h-16 object-contain"/>
                        <p>Organic</p>
                    </li>
                    <li  className="text-center text-[#414141] text-lg font-medium">
                        <img src={JojobaExtract} alt=""  className="mx-auto mb-2 w-16 h-16 object-contain"/>
                        <p>Jojoba Extract</p>
                    </li>
                </ul>
    </div>
</div>

  )
}

export default Advertisment2
