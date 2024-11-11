import { useState } from "react";
import HomeImg from "../assets/home decor idea.jpg";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { HiChevronDown } from "react-icons/hi2";
import NavigationBar from "./NavigationBar";
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handlwClickOpenNav() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex h-[100vh] w-full relative overflow-hidden">
      <div className="w-[300px] h-[300px] bg-lightGray_color2 rounded-full absolute flex items-center justify-center left-[15%] top-[-150px] z-[-10]">
        <div className="w-[180px] h-[180px] rounded-full bg-secondary_color"></div>
      </div>
      <div className="w-[300px] h-[300px] bg-lightGray_color2 rounded-full absolute  flex items-center justify-center left-[42%] bottom-[-150px] z-[-10]">
        <div className="w-[200px] h-[200px] rounded-full bg-secondary_color"></div>
      </div>
      <aside className="bg-primary_color w-[100px] h-[100vh] relative z-40 flex items-center justify-center">
        <div className="flex flex-col h-fit justify-center items-center rotate-[270deg] ">
          <h4
            className="text-nowrap uppercase font-thin text-[1.2rem] tracking-[5px] border-b-[1px]
           border-secondary_color text-secondary_color"
          >
            Vox Decoration
          </h4>
          <span className="text-nowrap text-[.8rem] tracking-[3px] mb-[40px] text-secondary_color capitalize font-thin ">
            make your home look better with, creative, modern, future...
          </span>
        </div>
        <div
          className={`absolute bottom-[10%] right-[-25px] w-[60px] h-[60px] rounded-full flex items-center justify-center
            border-[5px] border-primary_color z-40   ${
              isOpen ? "bg-blue-300" : " bg-secondary_color"
            }`}
        >
          <button
            onClick={handlwClickOpenNav}
            className="hover:scale-110 transition-all duration-200 ease-in-out   "
          >
            {!isOpen ? (
              <RxHamburgerMenu className="text-primary_color stroke-1 font-bold  text-[1.6rem]  drop-shadow-lg" />
            ) : (
              <RxCross1
                className={`stroke-1 text-[1.6rem]  drop-shadow-lg ${
                  isOpen ? "text-secondary_color" : "text-primary-color"
                }`}
              />
            )}
          </button>
        </div>
      </aside>
      <div
        className={`absolute top-0 left-[100px]  transition-all duration-200  flex w-full md:w-[690px] ${
          !isOpen
            ? "hidden overflow-hidden opacity-30"
            : " block bg-white opacity-100"
        }`}
      >
        <NavigationBar />
      </div>
      {isOpen && (
        <div
          className={`hidden md:block md:w-full h-full absolute z-20 top-0 left-0  backdrop-blur-sm bg-opacity-20 bg-black`}
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      )}
      <section className=" flex w-full h-full">
        <div className="w-[60%] p-[30px] pl-[90px] uppercase tracking-[3px] flex flex-col justify-between items-start">
          <h5 className=" after:contents-[''] after:w-[100px] after:h-[.5px] after:inline-block after:bg-blue-300  drop-shadow-lg ">
            Vox creative
          </h5>
          <div className="">
            <h1 className="text-[5rem] text-lightGray_color1  drop-shadow-xl">
              <span className="text-blue-300">c</span>
              reative
            </h1>
            <h2 className="text-[3rem] text-gray_color  drop-shadow-lg">
              Interior
            </h2>
            <h6 className="text-lightGray_color1 ">
              www.VoxCreativeDecoration.com
            </h6>
          </div>
          <div className="group">
            <a
              href=""
              className="flex gap-2 items-center group-hover:underline decoration-1  drop-shadow-lg"
            >
              Down
              <HiChevronDown className="text-[1.2rem] group-hover:translate-y-1 transition-all duration-300 ease-in-out" />
            </a>
          </div>
        </div>
        <div className="w-[60%] h-full items-center justify-center hidden md:flex">
          <div className="w-full h-[90%]  ">
            <img
              src={HomeImg}
              alt="image"
              className="w-full h-full object-fit"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
