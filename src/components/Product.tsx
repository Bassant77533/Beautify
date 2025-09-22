

type TProductProps = {
    img : string , 
    title : string , 
    desc : string 
}
const Product = ({img , title , desc} : TProductProps) => {
  return (
     <div className="flex gap-5 items-center bg-black/5 p-4 rounded-3xl ">
        <img src={img} className=" w-20 h-20 md:w-32 md:h-32 rounded-xl  object-cover  " />
        <div className="flex flex-col gap-10   ">
            <p className=" md:text-2xl font-medium">{title} </p>
            <p className="max-w-[347px] font-medium text-[#666666]">{desc}  </p>
        </div>
    </div>
  )
}

export default Product
