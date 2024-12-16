import Link from "next/link";
  export default function Footer(){

    return(
    <div className="  font-semibold mb-6 mt-[10px] text-center h-[10px] w-full">
        <div className="text-1xl text-[#20948B]">
    <p className="mt-8 "> CopyRight by Misbah Saeed</p>
    </div>
   
          <div className="flex justify-center space-x-4 mt-[10px] ml-[90px]  text-[#20948B] mb-[8px] mr-[80px]">
                        <Link href="https://www.linkedin.com/in/misbah-saeed-b62943336" className="flex items-center  hover:text-[#A59D84] font-bold  text-[#20948B] text-1xl tracking-[0.2px]">
                         LinkedIn
                        </Link>
                        <Link href="https://github.com/Misbah-Saeed" className="flex items-center hover:text-[#A59D84]   font-bold text-[#20948B] text-1xl tracking-[0.2px]">
                        GitHub
                        </Link>
                        <Link href="mailto:saeedmisbah2008@gmail.com" className="flex items-center hover:text-[#A59D84]   font-bold text-[#20948B] text-1xl  tracking-[0.2px]">
                             Email
                        </Link>
                    </div>

                </div>
    )
  }

         
      

         
   
  
    
   