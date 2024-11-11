import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { FaFacebookMessenger, FaFacebook, FaInstagram } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
const NavigationBar = () => {
  const [isDownProduct, setIsDownProduct] = useState(false);
  const [isDownContact, setIsDownContact] = useState(false);
  function handleClickNavProduct() {
    setIsDownProduct(!isDownProduct);
  }
  function handleClickNavContact() {
    setIsDownContact(!isDownContact);
  }
  return (
    <div className="h-[100vh] w-full flex flex-col justify-between items-start p-[30px] bg-white z-30">
      <div className="w-full">
        <div className="w-full ml-[100px]">
          <h5 className="text-[1.8rem] track-[4px] font-light text-nowrap">
            Vox creative
          </h5>
        </div>
        <div className="mt-[1.5rem] w-full ">
          <ul className="text-[1.2rem] flex flex-col text-gray_color w-full ">
            <li className="hover-li w-full ">
              <a href="" className="nav-li-a">
                Home
              </a>
            </li>
            <li className="hover-li">
              <a href="" className="nav-li-a">
                About
              </a>
            </li>
            <li className="hover-li">
              <a href="" className="nav-li-a">
                Service
              </a>
            </li>
            <li className="hover-li">
              <a href="" className="nav-li-a">
                News
              </a>
            </li>
            <li className="">
              <button
                onClick={handleClickNavProduct}
                className={`flex gap-3 items-center hover-li w-full ${
                  isDownProduct ? "bg-blue-300 text-white" : ""
                } `}
              >
                Products
                <span className="mt-[5px] text-[1.3rem]">
                  {!isDownProduct ? <HiChevronDown /> : <HiChevronUp />}
                </span>
              </button>{" "}
              {isDownProduct && (
                <ul className="ml-7 mt-3 text-[1.1rem] flex flex-col gap-[.4rem] capitalize">
                  <li className="group container-link-hover">
                    <GoArrowRight className="group-hover-icon" />
                    <a href="" className=" ">
                      Bed room
                    </a>
                  </li>
                  <li className="group container-link-hover">
                    <GoArrowRight className="group-hover-icon" />
                    <a href="" className="">
                      living room
                    </a>
                  </li>
                  <li className="group container-link-hover">
                    <GoArrowRight className="group-hover-icon " />
                    <a href="" className=" ">
                      dress room
                    </a>
                  </li>
                  <li className="group container-link-hover">
                    <GoArrowRight className="group-hover-icon" />
                    <a href="" className=" ">
                      Kitchen room
                    </a>
                  </li>
                  <li className="group  container-link-hover">
                    <GoArrowRight className="group-hover-icon" />
                    <a href="" className="">
                      Toilet
                    </a>
                  </li>
                  <li className="group  container-link-hover">
                    <GoArrowRight className="group-hover-icon" />
                    <a href="" className="">
                      Pool
                    </a>
                  </li>
                  <li className="group container-link-hover">
                    <GoArrowRight className="group-hover-icon" />
                    <a href="" className="group-hover-def-class">
                      Fire pit
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="mt-2">
              <button
                onClick={handleClickNavContact}
                className={`flex gap-3 items-center hover-li w-full ${
                  isDownContact ? "bg-blue-300 text-white" : ""
                } `}
              >
                Contact
                <span className="mt-[5px] text-[1.3rem]">
                  {!isDownContact ? <HiChevronDown /> : <HiChevronUp />}
                </span>
              </button>
              {isDownContact && (
                <ul className="ml-4 mt-3 text-[1.6rem] flex flex-col gap-[1rem] capitalize ">
                  <li className="flex gap-3 group container-link-hover">
                    <GoArrowRight className="group-hover-icon  text-[1.1rem]" />
                    <a href="" className="">
                      <FaFacebook />
                    </a>
                    <span className="text-[1rem]">facebook</span>
                  </li>
                  <li className="flex gap-3 group container-link-hover">
                    {" "}
                    <GoArrowRight className="group-hover-icon  text-[1.1rem]" />
                    <a href="" className="">
                      <FaFacebookMessenger />
                    </a>
                    <span className="text-[1rem]">Messenger</span>
                  </li>
                  <li className="flex gap-3 group container-link-hover">
                    {" "}
                    <GoArrowRight className="group-hover-icon  text-[1.1rem]" />
                    <a href="" className="">
                      <FaXTwitter />
                    </a>
                    <span className="text-[1rem]">Twitter</span>
                  </li>
                  <li className="flex gap-3 group container-link-hover ">
                    {" "}
                    <GoArrowRight className="group-hover-icon -ml-6 text-[1.1rem]" />
                    <a href="" className="">
                      <FaInstagram className="w-fit" />
                    </a>
                    <span className="text-[1rem]">Instagram</span>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
