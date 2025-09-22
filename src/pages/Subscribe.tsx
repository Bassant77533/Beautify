import beauty_cream_ from "../../public/assets/Default_beauty_cream_ui_design_pastel_blue_and_gold_contrast_1-removebg-preview 1.png"
const Subscribe = () => {
  return (
    <div className="py-20">
        <div className="md:px-20 text-center md:text-start   container mx-auto grid md:grid-cols-2 items-center py-10 ">
            <div className="flex flex-col gap-5">
                <h1 className="text-[#000000] text-4xl font-medium">Stay Updated</h1>
                 <p className="text-[#3F3F3F] text-xl font-medium">Subscribe to our newsletter for latest news and blogs and for important information,stay tuned.</p>
                <div className="flex rounded overflow-hidden  w-fit md:self-start self-center  ">
                    <input type="text" placeholder="Enter Your E-mail" className="font-medium bg-[#EFEFEF] text-[#3F3F3F] px-8 py-4 focus:outline-none" />
                    <button className="bg-[#111633] text-white md:p-5  p-2 cursor-pointer hover:bg-[#1e2653]">Subscribe</button>
                </div>
            </div>
            <div>
                <img src={beauty_cream_} alt="" className="max-w-full" />
            </div>
        </div>
    </div>
  )
}

export default Subscribe
