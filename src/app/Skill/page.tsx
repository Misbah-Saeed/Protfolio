import Header from "../component/Header";
import Footer from "../component/Footer";
export default function about() {
    return (
        <>
        <Header />
        <div className="h-[250px]  bg-[#C4DFE6] ">
       <div className="flex-1 text-center ml[-500px]">
            <h1 className="text-4xl mt-[20px]  text-[#20948B] w-[400px] ml-[500px]  font-bold text-gray-800 mb-4">
                   My Skills
                    </h1>
                    <h2 className="text-lg  text-[#1995AD] ml-[500px] w-[400px] mb-8">
                  <ul>
                    <li>Problem Solving</li>
                    <li>Decision Making</li>
                    <li>Hard Working</li>
                    <li>Team Work</li>
                  </ul>
                    </h2>
                    </div>
        
                </div>
                <Footer />
                </>
    )
}