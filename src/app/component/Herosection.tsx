 import Image from "next/image";
 import Link from 'next/link';
export default function Hero() {
  return (
    <div className="bg-red mt-10 pr-10 pl-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-[40px] h-[400px]">
          {/* Text Section (Left Side) */}
          <div className="flex flex-col items-start ml-[150px] w-[500px]">
            <h1 className="text-4xl text-[#20948B] w-[400px] font-bold  mb-4">
            Hi,  I am Misbah Saeed
              </h1>
            <h3 className="text-[#1995AD] text-2xl w-[400px] mb-8">
            I am Student for class 2nd Year
            </h3>
            <div className="flex items-center grap-5">
            <button className="bg-[#20948B] hover:bg-[#C4DFE6] hover:text-[#20948B] w-[150px] text-white font-bold py-2 px-4 rounded">
            <Link href="/Contact"  >
            Contact Me
           </Link>
            </button>
            </div>
          </div>
          
          <div className="flex justify-center mb-[40px] w-[500px] mr-[200px]">
                        <Image
                            src="/image/M2.png"
                            alt=" image"
                            width={500}
                            height={300}
                            className="rounded-md shadow-md w-[500px] h-[300px]"
                        />
                    </div>
        </div>
      </div>
  )
}
