import React from "react";
import slide00 from "/images/slide-00.jpg";
import slide01 from "/images/slide-01.jpg";
import slide02 from "/images/slide-02.jpg";
import slide03 from "/images/slide-03.jpg";
import slide04 from "/images/slide-04.jpg";
import slide05 from "/images/slide-05.jpg";

const Banner = () => {
  return (
    <div className="bg-[#2E7ED8]">
      <div className="container ">
        <div className="grid grid-cols-3">
          <div className="text-white">
            <form action="" method="post" id="frmJobSearch" name="frmJobSearch">
              <div className="filter-job">
                <h3 className="title">Find your dream job</h3>
                <div className="form-group">
                  <label htmlFor="occupation">
                    <i className="icon-briefcase"></i>Write your occupation
                  </label>
                  <input
                    type="text"
                    name="txtsearch"
                    className="form-control"
                    id="txtsearch"
                    placeholder="Driver, Electrician etc"
                    maxLength="50"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="skill">
                    <i className="icon-globe-europe"></i>Skilled Category
                  </label>
                  <select className="form-control" id="skill" name="skilltype">
                    <option value="">Select Skill</option>
                    <option value="skilled">Skilled</option>
                    <option value="semi skilled">Semi Skilled</option>
                    <option value="less skilled">Less Skilled</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="select_place">
                    <i className="icon-map-marker-alt"></i>Country
                  </label>
                  <select
                    className="form-control"
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
                <button className="btn btn-warning rounded-md">Search</button>
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

          <div className="text-white">
            <div className="countrys-job-summary">
              <h4 className="title">Country wise vacancies</h4>
              <ul className="countrys-list">
                <li>
                  <a href="jobsearch.asp?locationId=310">
                    United Arab Emirates (45)
                  </a>
                </li>

                <li>
                  <a href="jobsearch.asp?locationId=276">Saudi Arabia (35)</a>
                </li>

                <li>
                  <a href="jobsearch.asp?locationId=202">Japan (25)</a>
                </li>

                <li>
                  <a href="jobsearch.asp?locationId=287">South Korea (11)</a>
                </li>

                <li>
                  <a href="jobsearch.asp?locationId=252">Oman (6)</a>
                </li>

                <li>
                  <a href="jobsearch.asp?locationId=222">Malaysia (6)</a>
                </li>

                <li>
                  <a href="locationwisejobs.asp">All Countries</a>
                </li>
              </ul>
              <div>
                <a
                  href="https://mybdjobs.bdjobs.com/mybdjobs/file_upload.asp"
                  className="submit-biodata"
                >
                  <img src="/images/submit_biodata.png" alt="Submit Biodata" />
                  Submit your <br />
                  Biodata
                </a>
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
