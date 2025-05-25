

export default function Navbar(){

    return(
            <section className="flex flex-row justify-between py-4 px-6 items-center border-b border-gray-300  ">
             <div className="flex items-center gap-8 text-center  ">
                <div>
                    <h1 className="text-[25px] font-bold font-[Rowdies]">Logo</h1>
                </div>
                <div className="text-[16px] flex  gap-4 font-[monrope] max-sm:hidden ">
                    <h1> About </h1>
                    <h1>Causes</h1>
                    <h1>Services</h1>
                    <h1>Events</h1>
                </div>
             </div>
             <div className=" py-1 px-8 rounded-[4px] text-center bg-[#7E8AB8]">
                <h1 className=" font-[Rowdies] text-white "> Donate</h1>
             </div>
             <div className=" sm:border px-6 py-1 rounded-[4px]">
                <h1 className=" text-[#7E8AB8] text-[14x] font-[Rowdies] ">CONTACT</h1> 
             </div>
            </section>  

    )
}