import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  X,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] px-6 mt-10">
      <div className="max-w-[95%] mx-auto rounded-2xl p-6 md:p-15">

        {/* FLEX WRAPPER */}
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-10 lg:gap-30">

          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start">
            <img
              src="/BRB-LOGO1-2048x1136-1-1024x568.webp"
              alt="BRB Logo"
              className="h-20"
            />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="font-normal text-[22px] mb-3 text-gray-800">Quick Links</h3>
            <ul className="space-y-2 text-gray-500 text-[16px]">
              <li className="hover:text-[#E78424]">
                <a href="https://brbgroup.org/market-intelligence/">
                  Market Intelligence
                </a>
              </li>
              <li className="hover:text-[#E78424]">
                <a href="https://brbgroup.org/esg-sustainability/">
                  ESG Sustainability
                </a>
              </li>
              <li className="hover:text-[#E78424]">
                <a href="https://brbgroup.org/media/">Media</a>
              </li>
              <li className="hover:text-[#E78424]">
                <a href="https://brbgroup.org/career/">Careers</a>
              </li>
              <li className="hover:text-[#E78424]">
                <a href="https://brbgroup.org/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li className="hover:text-[#E78424]">
                <a href="https://brbgroup.org/faqs/">FAQs</a>
              </li>
            </ul>
          </div>

          {/* About BRB */}
          <div className="flex flex-col text-[16px] items-center text-center lg:items-start lg:text-left">
            <h3 className="font-normal text-[22px] mb-3 text-gray-800">About BRB</h3>
            <ul className="space-y-2 text-gray-500">
              <li className="hover:text-[#E78424]">
                <a href="https://brbgroup.org/who-we-are/">Who are we?</a>
              </li>
              <li className="hover:text-[#E78424]">
                <a href="https://brbgroup.org/business-unit/">Business Units</a>
              </li>
              <li className="hover:text-[#E78424]">
                <a href="https://brbgroup.org/brb-technologoies/">
                  Business Solutions
                </a>
              </li>
              <li className="hover:text-[#E78424]">
                <a href="https://brbgroup.org/communities/">Communities</a>
              </li>
              <li className="hover:text-[#E78424]">
                <a href="https://brbgroup.org/cantact-us/">Contact Us</a>
              </li>
              <li className="hover:text-[#E78424]">
                <a href="https://brbgroup.org/terms-and-conditions/">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col text-[16px] items-center text-center lg:items-start lg:text-left">
            <h3 className="font-normal text-[22px] mb-3 text-gray-800">Contact us</h3>
            <ul className="space-y-1 text-gray-500 max-w-[350px]">
              <li className="hover:text-[#E78424]">
                <a href="tel:+9221111272111">+92 (21) 34837014-6</a>
              </li>
              {/* <li className="hover:text-[#E78424]">
                <a href="tel:+92213483701417">+92 21 348 37014-17</a>
              </li> */}
              <li className="hover:text-[#E78424]">
                <a href="mailto:info@brbgroup.pk">info@brbgroup.pk</a>
              </li>
              <li className="hover:text-[#E78424]">
                <a href="https://maps.app.goo.gl/24u4SKe4ab8dLwuaA">
                  Head Office: Suite# 101 & 102 First Floor Rufi Trade Centre, SB-29, Block 13C Gulshan-e-Iqbal, Main University Road, Karachi, P.O.Box No.75300, Pakistan
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-gray-500">
              <a href="https://www.facebook.com/BRBGroup.pk/" target="_blank">
                <Facebook className="w-8 h-8 p-1 border rounded-full hover:bg-black hover:text-white" />
              </a>
              <a href="https://www.instagram.com/brbgroup.pk/" target="_blank">
                <Instagram className="w-8 h-8 p-1 border rounded-full hover:bg-black hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/company/18805236" target="_blank">
                <Linkedin className="w-8 h-8 p-1 border rounded-full hover:bg-black hover:text-white" />
              </a>
              <a href="https://twitter.com/DevelopersBrb" target="_blank">
                <X className="w-8 h-8 p-1 border rounded-full hover:bg-black hover:text-white" />
              </a>
              <a href="https://www.youtube.com/@brbgroup6509/featured" target="_blank">
                <Youtube className="w-8 h-8 p-1 border rounded-full hover:bg-black hover:text-white" />
              </a>
              <a href="https://whatsapp.com/channel/0029VaRzYycBvvsYXPcSS733">
                <Phone className="w-8 h-8 p-1 border rounded-full hover:bg-black hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 lg:mt-20 text-gray-400"/>

        <p className="text-center text-gray-400 text-sm">
  © {new Date().getFullYear()} BRB Group, All Rights Reserved.
</p>
      </div>
    </footer>
  );
};

export default Footer;
