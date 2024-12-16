import Header from "../component/Header";
import Footer from "../component/Footer";
    export default function Contact(){
     return(
      <>
      <Header />
      <div className=" bg-[#C4DFE6]">

      </div>
     <div className="h-[400px] w-[500px] mt-8 ml-[300px]">
      <h1 className="text-4xl ml-[300px] text-[#20948B] w-[400px] font-bold  mb-4">
        Contact Me
  </h1>
      <form className="text-2xl  text-[#155674] ml-[300px]">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="Phone No">Phone No:</label>
          <textarea id="Phone No" name="Phone No"></textarea>
        </div>
        <button className="bg-[#20948B] hover:bg-[#C4DFE6] hover:text-[#20948B] w-[150px] text-white font-bold py-2 px-4 rounded">
        Submition
          </button>
      </form>
    </div>
    <Footer />
    </>
     )
     }