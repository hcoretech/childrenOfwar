import Image from "next/image";


export default function Page(){
    return(
        <section className="    ">
             
             <div className="relative overflow-hidden  w-screen  ">

                <div className="absolute top-0 right-20   w-[400px] max-sm:right-0   h-[1003px] rotate-45 max-sm:w-[300px] max-sm:h-[500px] max-sm:top-10  bg-[#009EFF] rounded-[380px]"> 

                 </div>
             <div className="flex   items-center relative ">
               
                
                <div className="items-center flex justify-center flex-wrap w-screen   my-20 relative" >
                {/* <div className=" "> */}
                    
                    <div className="   w-[30%]  max-sm:hidden ">
                         {/* <Image src="/image.png" width={400} height={200} alt="child" className="w-auto h-auto float-right"/> */}
                         <div className="text-center relative ">
                           <h1 className="text-[65px] font-[Rowdies] text-base/18   tracking-tight  font-light">Offering aids to the  less fortunate</h1>
                          <button className="text-[14px] font-[Rowdies] bg-[#7E8AB8] font-light  py-2 px-4 text-center rounded-[24px] text-white mt-8">
                           MAKE A DONATION
                          </button>

                      </div>
                    </div>
                    {/* <div className=" " >
                        
                 
                    </div> */}
                {/* </div>  */}
                <div className="relative bg-white rounded-[100%] ">
                     <div className="absolute right-0 top-0">
                        <Image src="/Path.svg" width={800} height={400} alt="child" priority className="w-auto max-sm:w-[60px] h-auto "/>      
                    </div>
                    <div className="absolute bottom-0 ">
                        <Image src="/Shape.svg" width={800} height={400} alt="child" priority className="w-auto  max-sm:h-auto h-[300px] "/>      
                    </div>
                    <Image  src="/Image.png"  className="w-auto h-auto max-sm:w-[300px] relative"  width={400} height={300} alt="childofwar" priority/>
                </div> 

                 <div className=" sm:hidden mt-30 p-6 ">
                         {/* <Image src="/image.png" width={400} height={200} alt="child" className="w-auto h-auto float-right"/> */}
                         <div className=" relative ">
                           <h1 className="text-[65px] max-sm:text-[45px] font-mono text-base/18 max-sm:tracking-tight  max-sm:text-base/12  tracking-tight  font-bold">Offering aids to the  less fortunate</h1>
                          <button className="text-[14px] font-[Rowdies] bg-[#7E8AB8] font-light  py-2 px-4 text-center rounded-[24px] text-white mt-8">
                           MAKE A DONATION
                          </button>

                      </div>
                    </div>
                </div>  
            </div> 

            {/* <div> */}
                  <div className="flex  items-center max-sm:items-stretch max-sm:mt-2 justify-center max-sm:gap-4 relative mt-8  flex-wrap ">
                    <div className="flex flex-col gap-3 text-center bg-white py-2 px-8 shadow-lg">
                        <h1 className=" font-[Rowdies] text-[40px] text-[#009EFF] font-light ">20M</h1>
                        <p className="border-2"> </p>
                        <p className="font-[Rowdies] text-[16px] font-light">Number of Supporters</p>
                    </div>
                      <div className="flex flex-col gap-3 text-center bg-white py-2 px-8 shadow-lg">
                        <h1 className=" font-[Rowdies] text-[40px] text-[#009EFF] font-light">15k</h1>
                        <p className="border-2"> </p>
                        <p className="font-[Rowdies] text-[16px] font-light">Volunteers WorldWide</p>
                    </div>
                     <div className="flex flex-col gap-3 text-center bg-white py-2 px-8 shadow-lg">
                        <h1 className=" font-[Rowdies] text-[40px] text-[#009EFF] font-light">20M</h1>
                        <p className="border-2"> </p>
                        <p className="font-[Rowdies] text-[16px] font-light">We've Helped Raise</p>
                    </div>
                      <div className="flex flex-col gap-3 items-center  bg-[#FF0000] py-6.5 px-8 rounded-sm shadow-lg">
                         <p className="border-2 w-[40%]"> </p>
                        <h1 className=" font-[Rowdies] text-[16px] text-white  font-light ">Our Goal is To Help Poor People</h1>
                       
                        <p className="font-[Rowdies] text-[16px] text-white font-light">become a volunteer</p>
                    </div>
                </div> 
                <div className="flex justify-center mt-20">
                    <h1 className="text-[16px] font-[Rowdies] font-light text-[#009EFF]">OUR FEATURES</h1>
                </div>
              
            </div>
    

            <div className=" text-center w-full flex flex-center  justify-center mt-8">
                <h1 className="text-[40px] max-sm:text-[30px] w-[50%] max-sm:w-[70%] text-base/11 font-bold font-[Rowdies] tracking-wide leading-12   text-center">
                    You can make a difference by supporting 
                    a charity that you care about
                   Your donation can help to change lives.
                </h1>
            </div>
            
            <div className="flex justify-center mt-8 items-center gap-10 flex-wrap ">
                <div>
                    <div className="flex items-center  gap-4 bg-[#F3F2E7] h-40 w-80 p-2 rounded-[12px] ">
                       <div className="gap-2 flex flex-col">  <Image src="/charity.svg" width={25} height={25} className="w-[63.89px] h-[61.86px]" alt=""/>
                             <p className="border border-[#333333]"></p>
                       </div>
                        <p className="font-light text-[16px] font-[Rowdies]">Direct Help</p>
                    </div>
                </div>
                  <div>
                    <div className="flex items-center  gap-4 bg-[#F3F2E7] h-40 w-80 p-2 rounded-[12px] ">
                        <div className="gap-2 flex flex-col"> 
                        <Image src="/solidarity.svg" width={25} height={25} className="w-[63.89px] h-[61.86px]" alt=""/>
                        <p className="border border-[#333333]"></p>
                        </div>
                        <p className="font-light text-[16px] font-[Rowdies]">Giving Information</p>
                    </div>
                </div>
            </div>

                 <div className="flex justify-center mt-8 items-center gap-10 flex-wrap ">
                <div>
                    <div className="flex items-center  gap-4 bg-[#F3F2E7] h-40 w-80 p-2 rounded-[12px] ">
                        <div className="gap-2 flex flex-col"> 
                        <Image src="/love.svg" width={25} height={25} className="w-[63.89px] h-[61.86px]" alt=""/>
                        <p className="border border-[#333333]"></p>
                        </div>
                        <p className="font-light text-[16px] font-[Rowdies]">Raising Awareness</p>
                    </div>
                </div>
                  <div>
                    <div className="flex items-center  gap-4 bg-[#F3F2E7] h-40 w-80 p-2 rounded-[12px] ">
                         <div className="gap-2 flex flex-col"> 
                        <Image src="/charity1.svg" width={25} height={25} className="w-[63.89px] h-[61.86px]" alt=""/>
                         <p className="border border-[#333333]"></p>
                        </div>
                        <p className="font-light text-[16px] font-[Rowdies]">Relieving Poverty</p>
                    </div>
                </div>
            </div>
              <div className="flex justify-center mt-20">
                    <h1 className="text-[16px] font-[Rowdies] font-bold text-[#009EFF]">OUR CASES</h1>
                </div>
                   <div className="flex justify-center mt-5">
                    <h1 className="text-[40px] font-inter font-extrabold text-[#3A1700]">Our Recent Causes</h1>
                </div>
 
                
            {/* </div> */}
        </section>
    )
}