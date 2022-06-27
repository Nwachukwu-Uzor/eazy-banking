import React from "react";

import logo from "../../assets/logo.svg";
import instagram from "../../assets/icon-instagram.svg";
import facebook from "../../assets/icon-facebook.svg";
import youtube from "../../assets/icon-youtube.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import twitter from "../../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-[#2d314e] p-5 min-h-[30vh] flex items-center">
      <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-center px-3 md:px-5 w-full ">
        <div className="grid gap-5 md:gap-12 md:grid-cols-3">
          <div>
            <img
              src={logo}
              alt="eazy banking"
              className="invert-[98%] sepia-[87%] saturate-0 brightness-[115%] contrast-[100%]"
            />
            <div className="flex justify-between items-center my-4">
              <a href="#" className="hover:bg-gray-600">
                <img src={facebook} alt="facebook page" />
              </a>
              <a href="#">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#">
                <img src={pinterest} alt="pinterest" />
              </a>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-white hover:text-[#45a890] text-sm">
              About Us
            </a>
            <a href="#" className="text-white hover:text-[#45a890] text-sm">
              Contact
            </a>
            <a href="#" className="text-white hover:text-[#45a890] text-sm">
              Blog
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-white hover:text-[#45a890] text-sm">
              Careers
            </a>
            <a href="#" className="text-white hover:text-[#45a890] text-sm">
              Support
            </a>
            <a href="#" className="text-white hover:text-[#45a890] text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="mt-5 md:mt-auto">
          <a
            href="#"
            className="py-2 px-4 md:px-10 bg-gradient-to-r from-[#45a890] to-[#28bdc1] text-white rounded-3xl font-bold hover:opacity-75 w-[80%] mx-auto md:w-auto mb-5"
          >
            Request Invite
          </a>
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
