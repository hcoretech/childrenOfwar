import Image from "next/image";
import Link from "next/link";


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
                        <Image src="/Path.svg" width={800} height={400} alt="path" priority className="w-auto max-sm:w-[60px] h-auto "/>      
                    </div>
                    <div className="absolute bottom-0 ">
                        <Image src="/Shape.svg" width={800} height={400} alt="shape" priority className="w-auto  max-sm:h-auto h-[300px] "/>      
                    </div>
                    <Image  src="/Image.png"  className="w-auto h-auto max-sm:w-[300px] relative"  width={400} height={300} alt="smiling child" priority/>
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
                <h1 className="text-[40px] max-sm:text-[30px] w-[50%] max-sm:w-full text-base/11 font-bold font-[Rowdies] tracking-wide leading-12   text-center">
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


              <div className="flex justify-center items-center mt-14 gap-5 flex-wrap ">

             <div className="relative flex  flex-col w-[320px]  h-[500px]  bg-[#F3F2E7] rounded-[12px] ">
                {/* <div className=""> */}
                  
                {/* </div> */}
                <div className="bg-white ">
                      <h1 className="absolute py-1 px-4 top-4 ml-4 rounded-[18px] text-[14px] font-[Rowdies] font-light  bg-[#009EFF] text-white">WATER</h1>
                    <Image src='/kidsTogether.png' className="w-[320px] h-auto rounded-tl-[12px] rounded-tr-[12px]" alt="kidsLove" width={500} height={200} />
                </div>
                <div className="p-6 flex flex-col gap-4">
                <div >
                    <h1 className="text-[24px] font-[Rowdies] font-bold text-base/8 ">Bring together people who care about a cause</h1>
                </div>
                <div>
                    <p className="text-[20px] font-bold font-[Rowdies]">N 2500</p>
                </div>
                 <div>
                    <p className="text-[20px] font-bold font-[Rowdies]">N 2500</p>
                </div>
                <div>
                      <button className="text-[14px] font-[Rowdies] bg-[#7E8AB8] font-bold  py-2 px-4 text-center rounded-[24px] text-white mt-8">
                           MAKE A DONATION
                        </button>
                </div>

                </div>

             </div>


              <div className="relative flex  flex-col w-[320px]  h-[500px]  bg-[#F3F2E7] rounded-[12px] ">
                {/* <div className=""> */}
                  
                {/* </div> */}
                <div className="bg-white">
                      <h1 className="absolute py-1 px-4 top-4 ml-4 rounded-[18px] text-[14px] font-[Rowdies] font-light   bg-[#009EFF] text-white">FOOD</h1>
                    <Image src='/kidsLove.png' className="w-[320px] h-auto rounded-tl-[12px] rounded-tr-[12px]" alt="kidsLove" width={500} height={200} />
                </div>
                <div className="p-6 flex flex-col gap-4">
                <div >
                    <h1 className="text-[24px] font-[Rowdies] font-bold text-base/8 ">Together people who care about a cause</h1>
                </div>
                <div>
                    <p className="text-[20px] font-bold font-[Rowdies]">N 2500</p>
                </div>
                 <div>
                    <p className="text-[20px] font-bold font-[Rowdies]">N 2500</p>
                </div>
                <div>
                      <button className="text-[14px] font-[Rowdies] bg-[#7E8AB8] font-bold  py-2 px-4 text-center rounded-[24px] text-white mt-8">
                           MAKE A DONATION
                        </button>
                </div>

                </div>

             </div>



              <div className="relative flex  flex-col w-[320px]  h-[500px]  bg-[#F3F2E7] rounded-[12px] ">
                {/* <div className=""> */}
                  
                {/* </div> */}
                <div className="bg-white">
                      <h1 className="absolute py-1 px-4 top-4 ml-4 rounded-[18px] text-[14px] font-[Rowdies] font-light   bg-[#009EFF] text-white">CHARITY</h1>
                    <Image src='/kidsCauses.png' className="w-[320px] h-auto rounded-tl-[12px] rounded-tr-[12px]" alt="kidsLove" width={500} height={200} />
                </div>
                <div className="p-6 flex flex-col gap-4">
                <div >
                    <h1 className="text-[24px] font-[Rowdies] font-bold text-base/8 ">People who care about a cause</h1>
                </div>
                <div>
                    <p className="text-[20px] font-bold font-[Rowdies]">N 2500</p>
                </div>
                 <div>
                    <p className="text-[20px] font-bold font-[Rowdies]">N 2500</p>
                </div>
                <div>
                      <button className="text-[14px] font-[Rowdies] bg-[#7E8AB8] font-bold  py-2 px-4 text-center rounded-[24px] text-white mt-8">
                           MAKE A DONATION
                        </button>
                </div>

                </div>

             </div>

             </div>

             <div className="flex justify-center ">
                <div className="py-2 px-6 border mt-8 rounded-[24px]  border-[#7E8AB8]">
                    <Link className="text-[#7E8AB8] text-[14px] font-bold font-[Rowdies]" href='/' > EXPLORE ALL</Link>
                </div>
             </div>

             <div className="bg-[#F3F2E7]">
             <div className="flex justify-center  gap-6 items-center flex-wrap  relative p-10 mt-10">
                 <div className="relative">
                 
                    <div className="absolute size-[240px] rounded-[100%] bottom-0 left-0 bg-[#009EFF] "> 

                   </div>
                      <div className="absolute size-[240px] rounded-[24px] top-0 left-0 bg-[#009EFF]"> 

                   </div>
                     <div className="absolute size-[240px] rounded-[24px] top-0 left-0 bg-[#009EFF]"> 
                        
                   </div>
                    <div className="absolute right-0 bottom-0">
                        <Image src="/Path.svg" width={800} height={400} alt="path" priority className="w-auto max-sm:w-[60px] h-auto  "/>      
                    </div>
                    <div className="absolute top-0  right-0  ">
                        <Image src="/Shape.svg" width={800} height={400} alt="shape" priority className="w-auto  max-sm:h-auto h-[300px] "/>      
                    </div>

                   <div className="p-14">
                   
                    <Image src='/hands.png' alt="holding hands" width={400} height={450} className="w-auto h-auto relative "/>
                   </div>
                </div>

                <div className="flex flex-col gap-15">
                <div className="flex flex-col gap-5">
                    <div >
                        <h1 className="text-[16px] font-[Rowdies] font-bold text-[#009EFF]"> ABOUT US</h1>
                    </div>
                    <div>
                        <h1 className="text-[56px] text-[#3A1700] font-bold font-[Rowdies] w-[314px] text-base/14 "> Highest form of love</h1>
                    </div>
                    <h1 className="font-inter text-[20px]  w-[470px]"> The best philosophy of charity is the one that is most effective in helping those in need.</h1>
                </div>
                <div>
                     <Link className="text-[14px] rounded-full py-2 px-6 text-[#7E8AB8] border" href=''>ABOUT US</Link>
                </div>
                </div>
                </div>


                <div className="flex justify-center my-6  ">
                    <h1 className="text-[25px] text-center font-bold font-inter w-[570px] text-[#3A1700]"> Whatever it is that you care about, there will be a charity working on it.</h1>
                </div>


                <div className="flex justify-center items-center my-4 gap-4 flex-wrap">
                    <div className="w-[370px] h-[120px] bg-white flex p-10 gap-4 rounded-[12px] ">
                        <h1 className="text-[#3A1700] text-[56px] font-[Rowdies] font-bold">
                            42
                        </h1>
                        <p className="text-[16px] text-[#3A1700] font-[Rowdies] font-light   ">
                            People
                        </p>

                    </div>
                      <div className="w-[370px] h-[120px] bg-white flex p-10 gap-4 rounded-[12px] ">
                        <h1 className="text-[#3A1700] text-[56px] font-[Rowdies] font-bold">
                            42
                        </h1>
                        <p className="text-[16px] text-[#3A1700] font-[Rowdies] font-light   ">
                            Society
                        </p>

                    </div>
                      <div className="w-[370px] h-[120px] bg-white flex p-10 gap-4 rounded-[12px] ">
                        <h1 className="text-[#3A1700] text-[56px] font-[Rowdies] font-bold">
                            42
                        </h1>
                        <p className="text-[16px] text-[#3A1700] font-[Rowdies] font-light   ">
                            Project
                        </p>

                    </div>
                </div>


                <div className="flex justify-center  gap-6 items-center flex-wrap  relative p-10 mt-10">

                    
                <div className="flex flex-col gap-15">
                <div className="flex flex-col gap-5">
                    <div >
                        <h1 className="text-[16px] font-[Rowdies] font-bold text-[#009EFF]"> Volunteer</h1>
                    </div>
                    <div>
                        <h1 className="text-[56px] text-[#3A1700] font-bold font-[Rowdies] w-[314px] text-base/14 "> Unselfish love of 
                             one's fellow men
                        </h1>
                    </div>
                    <h1 className="font-inter text-[20px]  w-[470px]"> Charity is the act of giving help to those in need of it. It is a humanitarian act. It involves giving money, goods or time and effort to those who need it.</h1>
                </div>
                <div>
                     <Link className="text-[14px] rounded-full py-2 px-6 text-[#7E8AB8] border" href=''>Be A Volunteer</Link>
                </div>
                </div>
                 <div className="relative">
                 
                    <div className="absolute size-[240px] rounded-[100%] top-0 left-0 bg-[#009EFF] "> 

                   </div>
                     
                     <div className="absolute size-[240px] rounded-[24px] bottom-0 right-0 bg-[#009EFF]"> 
                        
                   </div>
                    <div className="absolute right-0 top-0">
                        <Image src="/Path.svg" width={800} height={400} alt="path" priority className="w-auto max-sm:w-[60px] h-auto  "/>      
                    </div>
                    <div className="absolute bottom-0  left-0  ">
                        <Image src="/Shape.svg" width={800} height={400} alt="shape" priority className="w-auto  max-sm:h-auto h-[300px] "/>      
                    </div>

                   <div className="p-14">
                   
                    <Image src='/man.png' alt="holding hands" width={400} height={450} className="w-auto h-auto relative rounded-[24px] "/>
                   </div>
                </div>

                </div>

             </div>


        </section>
    )
}