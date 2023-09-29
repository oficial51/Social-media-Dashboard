import "./App.css";

import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

import facebook from "./assets/icon-facebook.svg";
import up from "./assets/icon-up.svg";
import twitter from "./assets/icon-twitter.svg";
import instagram from "./assets/icon-instagram.svg";
import youtube from "./assets/icon-youtube.svg";
import down from "./assets/icon-down.svg";

function App() {
  const [dark, setDark] = useState(false);
  const size = useWindowSize();
  return (
    <main
      className={`bg-[#1D2029] flex h-screen flex-col items-center ${
        dark == true ? "bg-[#1D2029] text-[#9AA0C2]" : "bg-white text-[#696C7B]"
      } font-bold w-screen `}
    >
      <div className=" flex flex-col items-center">
        <section
          className={`px-[24px] lg:w-screen h-[235px] rounded-b-3xl ${
            dark == true ? "bg-[#20222F]" : "bg-[#F8F9FE]"
          }  pt-[40px]`}
        >
          <div className="mx-auto lg:max-w-[1115px] flex items-center justify-between">
            <div>
              <h1
                className={`"text-white ${
                  dark == true ? "text-white" : "text-black"
                } lg:text-[31px] text-[24px] font-bold"`}
              >
                Social Media Dashboard
              </h1>
              <p className="text-[16px] ">Total Followers: 23,004</p>
            </div>
            {size.width > 1040 ? (
              <div className="flex  mt-[15px] w-[] items-center justify-between">
                <p
                  className={`text-[16px] mr-3 ${
                    dark == true ? "text-white" : null
                  }`}
                >
                  Dark Mode
                </p>
                <label className="switch">
                  <input onClick={() => setDark(!dark)} type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            ) : null}
          </div>
          <div className="bg-[#373A4D] w-[328px] mt-[22px] lg:hidden h-[1px]"></div>
          {size.width > 1040 ? null : (
            <div className="flex mt-[15px] items-center justify-between">
              <p className=" text-[16px]">Dark Mode</p>
              <label className="switch">
                <input onClick={() => setDark(!dark)} type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          )}
        </section>
        <section className="lg:grid grid-cols-4 relative bottom-[34px] lg:bottom-[100px] gap-[30px] px-[24px]">
          <div className="mb-[23px]">
            <div className="h-[4px] bg-[#258CE8] w-[328px] lg:w-[255px] rounded-t-lg"></div>
            <div
              className={`h-[212px] lg:h-[216px] flex flex-col shadow-lg justify-center transition-all cursor-pointer duration-200 ease-in-out rounded-b-lg ${
                dark == true
                  ? "bg-[#252B43] hover:bg-[#333A56]"
                  : "hover:bg-[#E1E3F0] bg-[#F0F3FA]"
              } w-[328px] lg:w-[255px]`}
            >
              <div className="flex items-center gap-2 justify-center -mt-[32px] ">
                <img
                  src={facebook}
                  className="w-[21px] h-[21px]"
                  alt="facebook"
                />
                <p className="text-[14px] ">@nathanf</p>
              </div>
              <div
                className={`mt-[11px] text-[48px] mx-auto ${
                  dark == true ? "text-white" : "text-black"
                }`}
              >
                1987
              </div>
              <h3
                className="font-normal  -mt-[9px] text-[14px] text-center"
                style={{ letterSpacing: "3px" }}
              >
                FOLLOWERS
              </h3>
              <div className="mx-auto top-[24px] relative flex items-center gap-1 justify-center">
                <img src={up} className="h-[4px]" alt="down" />
                <h4 className="text-[12px] text-[#48AB97]">12 Today</h4>
              </div>
            </div>
          </div>
          <div className="mb-[23px]">
            <div className="h-[4px] bg-[#289EE6] w-[328px] lg:w-[255px] rounded-t-lg"></div>
            <div
              className={`h-[212px] lg:h-[216px] flex flex-col shadow-lg justify-center transition-all cursor-pointer duration-200 ease-in-out rounded-b-lg ${
                dark == true
                  ? "bg-[#252B43] hover:bg-[#333A56]"
                  : "hover:bg-[#E1E3F0] bg-[#F0F3FA]"
              } w-[328px] lg:w-[255px]`}
            >
              <div className="flex items-center gap-2 justify-center -mt-[32px] ">
                <img
                  src={twitter}
                  className="w-[21px] h-[21px]"
                  alt="twitter"
                />
                <p className="text-[14px] ">@nathanf</p>
              </div>
              <div
                className={`mt-[11px] text-[48px] mx-auto ${
                  dark == true ? "text-white" : "text-black"
                }`}
              >
                1044
              </div>
              <h3
                className="font-normal  -mt-[9px] text-[14px] text-center"
                style={{ letterSpacing: "3px" }}
              >
                FOLLOWERS
              </h3>
              <div className="mx-auto top-[24px] relative flex items-center gap-1 justify-center">
                <img src={up} className="h-[4px]" alt="down" />
                <h4 className="text-[12px] text-[#48AB97]">99 Today</h4>
              </div>
            </div>
          </div>
          <div className="mb-[23px]">
            <div className="h-[4px] insta w-[328px] lg:w-[255px] rounded-t-lg"></div>
            <div
              className={`h-[212px] lg:h-[216px] flex flex-col shadow-lg justify-center transition-all cursor-pointer duration-200 ease-in-out rounded-b-lg ${
                dark == true
                  ? "bg-[#252B43] hover:bg-[#333A56]"
                  : "hover:bg-[#E1E3F0] bg-[#F0F3FA]"
              } w-[328px] lg:w-[255px]`}
            >
              <div className="flex items-center gap-2 justify-center -mt-[32px] ">
                <img
                  src={instagram}
                  className="w-[21px] h-[21px]"
                  alt="instagram"
                />
                <p className="text-[14px] ">@realnathanf</p>
              </div>
              <div
                className={`mt-[11px] text-[48px] mx-auto ${
                  dark == true ? "text-white" : "text-black"
                }`}
              >
                11k
              </div>
              <h3
                className="font-normal  -mt-[9px] text-[14px] text-center"
                style={{ letterSpacing: "3px" }}
              >
                FOLLOWERS
              </h3>
              <div className="mx-auto top-[24px] relative flex items-center gap-1 justify-center">
                <img src={up} className="h-[4px]" alt="down" />
                <h4 className="text-[12px] text-[#48AB97]">1099 Today</h4>
              </div>
            </div>
          </div>
          <div className="mb-[48px]">
            <div className="h-[4px] bg-[#B30B2E] lg:w-[255px] w-[328px] rounded-t-lg"></div>
            <div
              className={`h-[212px] lg:h-[216px] flex flex-col shadow-lg justify-center transition-all cursor-pointer duration-200 ease-in-out rounded-b-lg ${
                dark == true
                  ? "bg-[#252B43] hover:bg-[#333A56]"
                  : "hover:bg-[#E1E3F0] bg-[#F0F3FA]"
              } w-[328px] lg:w-[255px]`}
            >
              <div className="flex items-center gap-2 justify-center -mt-[32px] ">
                <img
                  src={youtube}
                  className="w-[21px] h-[21px]"
                  alt="youtube"
                />
                <p className="text-[14px] ">Nathan F.</p>
              </div>
              <div
                className={`mt-[11px] text-[48px] mx-auto ${
                  dark == true ? "text-white" : "text-black"
                }`}
              >
                8239
              </div>
              <h3
                className="font-normal  -mt-[9px] text-[14px] text-center"
                style={{ letterSpacing: "3px" }}
              >
                FOLLOWERS
              </h3>
              <div className="mx-auto top-[24px] relative flex items-center gap-1 justify-center">
                <img src={down} className="h-[4px]" alt="down" />
                <h4 className="text-[12px] text-[#BB4859]">144 Today</h4>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[24px] lg:relative lg:bottom-20 lg:px-0 lg:max-w-[1115px] lg:pb-0 pb-[50px]">
          <h2
            className={`text-[25px] mb-[29px] ${
              dark == true ? "text-white " : "text-[#696C7B]"
            }`}
          >
            Overview - Today
          </h2>
          <div className="lg:grid gap-[30px] grid-cols-4">
            <div
              className={`h-[125px] lg:mb-0 mb-[16px] cursor-pointer transition-all duration-200 ease-in-out rounded-lg ${
                dark == true
                  ? "bg-[#252B43] hover:bg-[#333A56]"
                  : "hover:bg-[#E1E3F0] bg-[#F0F3FA]"
              } lg:w-[255px] w-[328px]`}
            >
              <div className="flex relative mx-[24px] top-[22px] justify-between">
                <h6 className="text-[14px]">Page Views</h6>
                <img
                  src={facebook}
                  alt="facebook"
                  className="w-[21px] h-[21px]"
                />
              </div>
              <div className="flex relative top-[43px] mx-[24px] justify-between">
                <p
                  className={`text-[31px] ${
                    dark == true ? "text-white" : "text-black"
                  }`}
                >
                  87
                </p>
                <div className="flex relative top-2 justify-center gap-[3px] items-center">
                  <img src={up} className="h-[4px]" alt="down" />
                  <h4 className="text-[12px]  text-[#48AB97]">3%</h4>
                </div>
              </div>
            </div>
            <div
              className={`h-[125px] lg:mb-0 mb-[16px] cursor-pointer transition-all duration-200 ease-in-out rounded-lg ${
                dark == true
                  ? "bg-[#252B43] hover:bg-[#333A56]"
                  : "hover:bg-[#E1E3F0] bg-[#F0F3FA]"
              } lg:w-[255px] w-[328px]`}
            >
              <div className="flex relative mx-[24px] top-[22px] justify-between">
                <h6 className="text-[14px]">Likes</h6>
                <img
                  src={facebook}
                  alt="facebook"
                  className="w-[21px] h-[21px]"
                />
              </div>
              <div className="flex relative top-[43px] mx-[24px] justify-between">
                <p
                  className={`text-[31px] ${
                    dark == true ? "text-white" : "text-black"
                  }`}
                >
                  52
                </p>
                <div className="flex relative top-2 justify-center gap-[3px] items-center">
                  <img src={down} className="h-[4px]" alt="down" />
                  <h4 className="text-[12px]  text-[#BB4859]">2%</h4>
                </div>
              </div>
            </div>
            <div
              className={`h-[125px] lg:mb-0 mb-[16px] cursor-pointer transition-all duration-200 ease-in-out rounded-lg ${
                dark == true
                  ? "bg-[#252B43] hover:bg-[#333A56]"
                  : "hover:bg-[#E1E3F0] bg-[#F0F3FA]"
              } lg:w-[255px] w-[328px]`}
            >
              <div className="flex relative mx-[24px] top-[22px] justify-between">
                <h6 className="text-[14px]">Likes</h6>
                <img
                  src={instagram}
                  alt="instagram"
                  className="w-[21px] h-[21px]"
                />
              </div>
              <div className="flex relative top-[43px] mx-[24px] justify-between">
                <p
                  className={`text-[31px] ${
                    dark == true ? "text-white" : "text-black"
                  }`}
                >
                  5462
                </p>
                <div className="flex relative top-2 justify-center gap-[3px] items-center">
                  <img src={up} className="h-[4px]" alt="down" />
                  <h4 className="text-[12px]  text-[#48AB97]">2257%</h4>
                </div>
              </div>
            </div>
            <div
              className={`h-[125px] lg:mb-0 mb-[16px] cursor-pointer transition-all duration-200 ease-in-out rounded-lg ${
                dark == true
                  ? "bg-[#252B43] hover:bg-[#333A56]"
                  : "hover:bg-[#E1E3F0] bg-[#F0F3FA]"
              } lg:w-[255px] w-[328px]`}
            >
              <div className="flex relative mx-[24px] top-[22px] justify-between">
                <h6 className="text-[14px]">Profile Views</h6>
                <img
                  src={instagram}
                  alt="instagram"
                  className="w-[21px] h-[21px]"
                />
              </div>
              <div className="flex relative top-[43px] mx-[24px] justify-between">
                <p
                  className={`text-[31px] ${
                    dark == true ? "text-white" : "text-black"
                  }`}
                >
                  52k
                </p>
                <div className="flex relative top-2 justify-center gap-[3px] items-center">
                  <img src={up} className="h-[4px]" alt="down" />
                  <h4 className="text-[12px]  text-[#48AB97]">1375%</h4>
                </div>
              </div>
            </div>
            <div
              className={`h-[125px] lg:mb-0 mb-[16px] cursor-pointer transition-all duration-200 ease-in-out rounded-lg ${
                dark == true
                  ? "bg-[#252B43] hover:bg-[#333A56]"
                  : "hover:bg-[#E1E3F0] bg-[#F0F3FA]"
              } lg:w-[255px] w-[328px]`}
            >
              <div className="flex relative mx-[24px] top-[22px] justify-between">
                <h6 className="text-[14px]">Retweets</h6>
                <img
                  src={twitter}
                  alt="twitter"
                  className="w-[21px] h-[21px]"
                />
              </div>
              <div className="flex relative top-[43px] mx-[24px] justify-between">
                <p
                  className={`text-[31px] ${
                    dark == true ? "text-white" : "text-black"
                  }`}
                >
                  117
                </p>
                <div className="flex relative top-2 justify-center gap-[3px] items-center">
                  <img src={up} className="h-[4px]" alt="down" />
                  <h4 className="text-[12px]  text-[#48AB97]">303%</h4>
                </div>
              </div>
            </div>
            <div
              className={`h-[125px] lg:mb-0 mb-[16px] cursor-pointer transition-all duration-200 ease-in-out rounded-lg ${
                dark == true
                  ? "bg-[#252B43] hover:bg-[#333A56]"
                  : "hover:bg-[#E1E3F0] bg-[#F0F3FA]"
              } lg:w-[255px] w-[328px]`}
            >
              <div className="flex relative mx-[24px] top-[22px] justify-between">
                <h6 className="text-[14px]">Likes</h6>
                <img
                  src={twitter}
                  alt="twitter"
                  className="w-[21px] h-[21px]"
                />
              </div>
              <div className="flex relative top-[43px] mx-[24px] justify-between">
                <p
                  className={`text-[31px] ${
                    dark == true ? "text-white" : "text-black"
                  }`}
                >
                  507
                </p>
                <div className="flex relative top-2 justify-center gap-[3px] items-center">
                  <img src={up} className="h-[4px]" alt="down" />
                  <h4 className="text-[12px]  text-[#48AB97]">553%</h4>
                </div>
              </div>
            </div>
            <div
              className={`h-[125px] lg:mb-0 mb-[16px] cursor-pointer transition-all duration-200 ease-in-out rounded-lg ${
                dark == true
                  ? "bg-[#252B43] hover:bg-[#333A56]"
                  : "hover:bg-[#E1E3F0] bg-[#F0F3FA]"
              } lg:w-[255px] w-[328px]`}
            >
              <div className="flex relative mx-[24px] top-[22px] justify-between">
                <h6 className="text-[14px]">Likes</h6>
                <img
                  src={youtube}
                  alt="youtube"
                  className="w-[21px] h-[21px]"
                />
              </div>
              <div className="flex relative top-[43px] mx-[24px] justify-between">
                <p
                  className={`text-[31px] ${
                    dark == true ? "text-white" : "text-black"
                  }`}
                >
                  107
                </p>
                <div className="flex relative top-2 justify-center gap-[3px] items-center">
                  <img src={down} className="h-[4px]" alt="down" />
                  <h4 className="text-[12px]  text-[#BB4859]">19%</h4>
                </div>
              </div>
            </div>
            <div
              className={`h-[125px] lg:mb-0 mb-[16px] cursor-pointer transition-all duration-200 ease-in-out rounded-lg ${
                dark == true
                  ? "bg-[#252B43] hover:bg-[#333A56]"
                  : "hover:bg-[#E1E3F0] bg-[#F0F3FA]"
              } lg:w-[255px] w-[328px]`}
            >
              <div className="flex relative mx-[24px] top-[22px] justify-between">
                <h6 className="text-[14px]">Total Views</h6>
                <img
                  src={youtube}
                  alt="youtube"
                  className="w-[21px] h-[21px]"
                />
              </div>
              <div className="flex relative top-[43px] mx-[24px] justify-between">
                <p
                  className={`text-[31px] ${
                    dark == true ? "text-white" : "text-black"
                  }`}
                >
                  1407
                </p>
                <div className="flex relative top-2 justify-center gap-[3px] items-center">
                  <img src={down} className="h-[4px]" alt="down" />
                  <h4 className="text-[12px]  text-[#BB4859]">12%</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
