import React from "react";

const Footer = () => {
  return (
    <div>
      <hr className="bg-blue-900 p-[1px] mt-16 mb-12" />
      {/* <div className="divider bg-blue-900"></div> */}
      <footer className="footer p-10 mb-10">
        <div>
          <span className="text-black text-xl font-bold">About Us</span>
          <a className="link link-hover text-gray-500 text-lg">About website</a>

          <a className="link link-hover text-gray-500 text-lg">
            Terms & Conditions
          </a>
          <a className="link link-hover text-gray-500 text-lg">Feedback</a>
        </div>
        <div>
          <span className="text-black text-xl font-bold">Job Seekers</span>
          <a className="link link-hover text-gray-500 text-lg">
            Create Account
          </a>

          <a className="link link-hover text-gray-500 text-lg">
            Career Counseling
          </a>
          <a className="link link-hover text-gray-500 text-lg">FAQ</a>
        </div>
        <div>
          <span className="text-black text-xl font-bold">Employers</span>
          <a className="link link-hover text-gray-500 text-lg">
            Create Account
          </a>

          <a className="link link-hover text-gray-500 text-lg">
            Products/Service
          </a>
          <a className="link link-hover text-gray-500 text-lg">Post a Job</a>
          <a className="link link-hover text-gray-500 text-lg">FAQ</a>
        </div>

        <div>
          <span className="text-black text-xl font-bold">
            Tools & Social Media
          </span>
          <a className="link link-hover text-gray-500 text-lg">
            Download Mobile App
          </a>
          <img
            className="mt-3"
            src="https://bdesh.bdjobs.com/images/google-play-badge.svg"
            alt="google-play-logo"
          />
        </div>

        <div>
          <span className="text-black text-xl font-bold">Contact Us</span>
          <a className="link link-hover text-gray-500 text-lg">
            Have any job query ?
          </a>
          <img
            className="mt-0"
            src="https://i.ibb.co/jbMkZjx/image.png"
            alt="google-play-logo"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
