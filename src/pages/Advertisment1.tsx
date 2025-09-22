import { FaArrowRight } from 'react-icons/fa6'
import antiAgingCream from '../../public/assets/Antiagingcream.png'
import goldenLeavesRight from "../../public/assets/gloden-leaves-right.png"
const Advertisment1 = () => {
  return (
    <div className="relative py-20">
        <img src={goldenLeavesRight} className='hidden md:block absolute right-0 -top-10'/>
      <div className="md:px-20 container mx-auto md:grid-cols-2 grid items-center ">
         <div className='max-w-[500px]'>
            < img src={antiAgingCream} className='max-w-full' alt="" />
        </div>
        <div className='text-center text-[#111633]'>
            <h1 className='   text-4xl font-medium my-10'>Anti-Aging Cream</h1>
            <p className='text-lg'>Our advanced Anti-Aging Cream is formulated to deeply hydrate, reduce the appearance of fine lines, and restore your skin’s natural radiance.  </p>
            <p className='text-lg'>Apply a small amount of cream to cleansed skin twice daily, in the morning and evening. Massage gently into the face and neck using upward strokes until fully absorbed. For best results, use consistently as part of your skincare routine.</p>
          <button className=" mx-auto  mt-10 cursor-pointer   px-8 py-4 font-semibold rounded-lg  text-white   hover:bg-[#1e2653] bg-[#111633] flex items-center gap-3  ">Read more <FaArrowRight /></button>
        </div>
       
      </div>
    </div>
  )
}

export default Advertisment1
