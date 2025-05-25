import React from "react"
import Navbar from "../../components/navBar"


export default function Layout({
    children
}:{
    children:React.ReactNode
}){
    return(
         <main className="w-wvh overflow-hidden ">
             <div className=" fixed top-0 right-0 left-0 z-100 bg-white "> 
                <Navbar/> 
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr]">
                <div>

                </div>
              <div  className="flex justify-center items-center">
            {children}
             </div>
             <div>

             </div>
             </div>
         </main>
     
    )
}