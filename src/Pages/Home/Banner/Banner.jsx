import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import slide00 from "/images/slide-00.jpg";
import slide01 from "/images/slide-01.jpg";
import slide02 from "/images/slide-02.jpg";
import slide03 from "/images/slide-03.jpg";
import slide04 from "/images/slide-04.jpg";
import slide05 from "/images/slide-05.jpg";

const Banner = () => {
  return (
    <div className="bg-[#2E7ED8]">
      <div className="container mx-auto ">
        <div className="grid grid-cols-3">
          <div className="flex items-center justify-center pt-10  w-full">
            <form action="" method="post" id="frmJobSearch" name="frmJobSearch">
              <div className="filter-job">
                <h3 className="title text-white text-[22px] font-semibold leading-6">
                  Find your dream job
                </h3>
                <div className="form-group mt-3">
                  <label htmlFor="occupation ">
                    {/* <i className="icon-briefcase "></i> */}
                    <IoBriefcaseOutline className="inline text-white ml-0 mt-1 mr-2 mb-2 text-lg" />
                    <span className="text-white">Write your occupation</span>
                  </label>
                  <input
                    type="text"
                    name="txtsearch"
                    className="form-control border border-gray-300 rounded-md px-2 py-2 w-full mt-3 text-md  focus:outline-none"
                    id="txtsearch"
                    placeholder="Driver, Electrician etc"
                    maxLength="50"
                  />
                </div>
                <div className="form-group mt-3 ">
                  <label htmlFor="skill">
                    {/* <i className="icon-globe-europe"></i> */}
                    <BiWorld className="inline text-white ml-0 mt-1 mr-2 mb-2 text-lg" />
                    <span className="text-white">Select Category</span>
                  </label>
                  <div className="flex items-center justify-center">
                    <select
                      className="form-control mt-3 rounded-md w-full h-10 text-slate-400 p-2  focus:outline-none"
                      id="skill"
                      name="skilltype"
                    >
                      <option value="">Select Skill</option>
                      <option value="skilled">Skilled</option>
                      <option value="semi skilled">Semi Skilled</option>
                      <option value="less skilled">Less Skilled</option>
                    </select>
                  </div>
                </div>
                <div className="form-group mt-3 mb-3">
                  <label htmlFor="select_place">
                    {/* <i className="icon-map-marker-alt"></i> */}
                    <MdOutlineLocationOn className="inline text-white ml-0 mt-1 mr-2 mb-2 text-lg" />
                    <span className="text-white ">Country</span>
                  </label>
                  <select
                    className="form-control w-full h-10 focus:outline-none p-2 rounded-md text-slate-400"
                    id="select_place"
                    name="LocationList"
                  >
                    <option value="">Select Country</option>

                    <option value="310">United Arab Emirates</option>

                    <option value="276">Saudi Arabia</option>

                    <option value="202">Japan</option>

                    <option value="287">South Korea</option>

                    <option value="252">Oman</option>

                    <option value="222">Malaysia</option>

                    <option value="203">Jordan</option>

                    <option value="155">Denmark</option>
                  </select>
                </div>
                {/* <div className="search-btn btn btn-warning"> */}
                <button className="btn btn-warning rounded-md mt-3 mb-14 capitalize">
                  Search
                </button>
                {/* </div> */}
              </div>
            </form>
          </div>

          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={slide00} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide6" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={slide01} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={slide02} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src={slide03} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
              <img src={slide04} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide6" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
              <img src={slide05} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div className="text-white flex items-center justify-center mr-32 mt-[-70px] ">
            <div className="countrys-job-summary">
              <h4 className="title text-lg font-semibold mb-4">
                Country wise vacancies
              </h4>
              <ul className="countrys-list">
                <li className="font-thin text-[#FFF9FA] mb-2">
                  <a href="">United Arab Emirates (45)</a>
                </li>

                <li className="font-thin text-[#FFF9FA] mb-2">
                  <a href="">Saudi Arabia (35)</a>
                </li>

                <li className="font-thin text-[#FFF9FA] mb-2">
                  <a href="">Japan (25)</a>
                </li>

                <li className="font-thin text-[#FFF9FA] mb-2">
                  <a href="">South Korea (11)</a>
                </li>

                <li className="font-thin text-[#FFF9FA] mb-2">
                  <a href="">Oman (6)</a>
                </li>

                <li className="font-thin text-[#FFF9FA] mb-2">
                  <a href="">Malaysia (6)</a>
                </li>

                <li className="font-thin text-[#FFF9FA] mb-2">
                  <a href="">All Countries</a>
                </li>
              </ul>
              <div
                className="bg-[#e4bc4e] hover:bg-[#FFC72A]  flex justify-center align-center w-40 h-16 p-2 rounded-md transition duration-500  cursor-pointer
              "
              >
                <img
                  src="/images/submit_biodata.png"
                  alt="Submit Biodata"
                  className="m-1"
                />
                {/* </a> */}
                <span className="text-black font-medium m-0">
                  Submit your <br />
                  Biodata
                </span>
              </div>

              <div>
                <a href="https://www.bdeshjaatra.com/" className="bdeshjl">
                  <img
                    src="/images/bdesh_jatra.svg"
                    alt="logo of bdeshjaatra"
                  />
                  <div className="des-txt">অভিবাসন বিষয়ক তথ্য</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// import React from "react";

// const Banner = () => {
//   return (
//     <div className="grid grid-cols-3 bg-[#2E7DD7] text-white">
//       <div>
//         <h1 className="text-[22px] font-semibold ">Find your dream job</h1>
//         <p>Write your occupation</p>
//       </div>
//       <div>
//         <h1>Banner</h1>
//       </div>

//       <div>
//         <h1>Banner</h1>
//       </div>
//     </div>
//   );
// };

// export default Banner;
