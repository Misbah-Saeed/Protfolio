import Link from 'next/link';
    export default function Header(){
return(
<div className="flex flex-row bg-[#C4DFE6]">

<div className="flex flex-row -400 h-20 w-full">
<h3 className=" text-[#20948B] font-bold mt-[20px] ml-[100px] text-[24px] leading-8 tracking-[0.1px] ">Portfolio</h3>
<div className=" text-[#20948B]  font-bold flex space-x-6 items-center ml-[400px] text-[15px] leading-8 tracking-[0.1px] ">
            <Link href="Home" className="hover:text-[#31473A] font-bold   text-[15px] text-[#20948B]  tracking-[0.2px]">
              Home
            </Link>
            <Link href="About" className="hover:text-[#31473A] font-bold text-[15px] text-[#20948B]  tracking-[0.2px]">
             About
            </Link>
            <Link href="Education" className="hover:text-[#31473A] font-bold text-[15px] text-[#20948B]  tracking-[0.2px]">
            Education
            </Link>
            <Link href="Skill" className="hover:text-[#31473A] font-bold text-[15px] text-[#20948B]  tracking-[0.2px]">
            Skill
            </Link>
         </div>
</div>
</div>
)

}
