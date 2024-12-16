import Header from "../component/Header";
import Footer from "../component/Footer";
export default function about() {
    return (
        <>
        <Header />
        <div className="h-[300px] bg-[#C4DFE6]">
<div className="flex-1 text-center ml[-500px]">
            <h1 className="text-4xl  text-[#20948B] mt-[20px] w-[400px] ml-[500px]  font-bold  mb-4">
           About Me
            </h1>
            <p className="text-lg text-[#1995AD] ml-[500px] w-[400px] mb-8">
           In pursuing my intermediate 2nd year. I aim to utilize my skills and knowledge
           to eontribute effectively to a forward-thinking orgauization. My objective
           is to leverage my academic background and passion for health analysis to support
           strategic deeision-making and otimize health processes. 
            </p>
            </div>

        </div>
         <Footer />
        </>
    )
}