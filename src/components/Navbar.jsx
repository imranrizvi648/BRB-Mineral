import React, { useState } from "react";
import {
  Search,
  Globe,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [subOpen, setSubOpen] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(null);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(null);

  const location = useLocation();

  const closeAllMobileMenus = () => {
    setSidebarOpen(false);
    setMobileMenuOpen(null);
    setMobileSubMenuOpen(null);
  };

  // ACTIVE CLASS FUNCTION
  const isActive = (path) =>
    location.pathname.startsWith(path)
      ? "text-blue-600 font-semibold"
      : "hover:text-blue-600";

  return (
    <>
      <section
        className="w-full relative z-50 bg-[#F7F8F9]"
        onMouseLeave={() => setOpenMenu(null)}
      >
        {/* TOP NAV */}
        <nav className="w-full  md:w-[97%] py-3 md:py-12 gap-6  md:gap-10 px-4 md:ml-10 flex items-center justify-between">
         <div className="flex items-center">
  <a href="https://brbgroup.org/" className="cursor-pointer"> 
    <img
      src="/BRB-LOGO1-2048x1136-1-1024x568.webp"
      alt="BRB Logo"
      className="h-12 md:h-20 object-contain transition-transform duration-300 hover:scale-105" 
    />
  </a>
</div>

          {/* NAV ITEMS - Desktop Only */}
         <ul className="hidden md:flex pl-0 ml-0 gap-6 font-normal text-[13px] whitespace-nowrap text-black">
            <li
              onMouseEnter={() => setOpenMenu("about")}
              className={isActive("/about")}
            >
              <a href="https://brbgroup.org/who-we-are/">About Us</a>
            </li>

            <li
              onMouseEnter={() => setOpenMenu("business")}
              className={isActive("/business")}
            >
              <a href="https://brbgroup.org/business-unit/">
                Business Solutions
              </a>
            </li>

            <li
              onMouseEnter={() => setOpenMenu("why")}
              className={isActive("/why")}
            >
              <a href="https://brbgroup.org/why-brb/">Why BRB</a>
            </li>

            <li
              onMouseEnter={() => setOpenMenu("proptech")}
              className={isActive("/proptech")}
            >
              <a href="/proptech">Prop Tech</a>
            </li>

            <li
              onMouseEnter={() => setOpenMenu("communities")}
              className={isActive("/communities")}
            >
              <a href="https://brbgroup.org/communities/">Communities</a>
            </li>

            <li
              onMouseEnter={() => setOpenMenu("esg")}
              className={isActive("/esg")}
            >
              <a href="https://brbgroup.org/esg-sustainability/">
                ESG Sustainability
              </a>
            </li>

            <li
              onMouseEnter={() => setOpenMenu("media")}
              className={isActive("/media")}
            >
              <a href="https://brbgroup.org/media/">Media</a>
            </li>

            <li
              onMouseEnter={() => setOpenMenu("careers")}
              className={isActive("/careers")}
            >
              <a href="https://brbgroup.org/career/">Careers</a>
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 md:gap-5 md:pr-10 md:pl-10 md:mr-18">
            <Link to="https://brbgroup.org/cantact-us/">
              <button className="hidden md:block px-5 py-1.5 border border-black rounded-xl text-sm font-normal hover:bg-black hover:text-white transition">
                Lets Connect
              </button>
            </Link>
            <Search className="hidden md:block w-5 h-5 cursor-pointer" />
            <img
  src="/download.svg" // replace with your image path
  alt="Globe"
  className="hidden md:block w-8 h-8 cursor-pointer"
/>

            {/* MOBILE MENU BUTTON - Right Side */}
            <button
              className="md:hidden text-black"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>

        {/* -------------------- ABOUT DROPDOWN -------------------- */}
        {openMenu === "about" && (
          <div
            className="hidden md:flex absolute left-0 top-full w-full bg-white shadow-xl border-gray-200 py-15 px-20 justify-between"
            onMouseEnter={() => setOpenMenu("about")}
          >
            {/* LEFT TEXT */}
            <div className="w-1/4 pr-10">
              <h2 className="font-semibold text-[25px] mb-2">About Us</h2>
              <p className="text-[15px] text-gray-600 leading-5">
                We aim to be a pioneering force in transforming industries,
                creating sustainable urban landscapes, and enriching lives
                through innovation and commitment.
              </p>
            </div>
            {/* QUICK LINKS */}
            <div className="w-1/4">
              <ul className="space-y-2 text-[16px] text-gray-500 ">
                <p className="text-[18px] mb-2 font-medium text-gray-800">Who are we?</p>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/who-we-are/" target="_blank">
                    Chairman's Message
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/who-we-are/">Vision</a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/who-we-are/">Mission</a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/who-we-are/">Core Values</a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/who-we-are/">Advisory Board</a>
                </li>
              </ul>
            </div>
            {/* QUICK LINKS */}
            <div className="w-1/4">
              <ul className="space-y-2 text-[16px] text-gray-500 ">
                   <p className="text-[18px] mb-2 font-medium text-gray-800">Business Units</p> 
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/who-we-are/" target="_blank">
                    BRB Builders and Developer
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/brb-foundation/">
                    BRB Foundation
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/brb-technologoies/">
                    BRB Technologies
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/brb-marketing-pvt-ltd/">
                    BRB Marketing
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/brb-engineering-pvt-ltd/">
                    BRB Engineering
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/brb-urbanscape-pvt-ltd/">
                    BRB Urbanscape
                  </a>
                </li>
              </ul>
            </div>
            {/* EXTRA */}
            <div className="w-1/4">
              <ul className="space-y-2 text-[16px] text-gray-500 ">
                 <p className="text-[18px] mb-2 font-medium text-gray-800">Communities</p>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/communities/">
                    Oasis Park Residencia
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/communities/">Hexagon Tower</a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/communities/">
                    Welkin Heights (Coming Soon)
                  </a>
                </li>
              </ul>
            </div>
            {/* IMAGE */}
            <div className="w-1/4 flex justify-end">
              <img
                src="/Navbar/Rectangle-7379 (2).webp"
                className="h-48 rounded-md"
              />
            </div>
          </div>
        )}

        {/* -------------------- BUSINESS DROPDOWN -------------------- */}
        {openMenu === "business" && (
          <div
            className="hidden md:flex absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-200 py-15 px-20 justify-between relative"
            onMouseEnter={() => setOpenMenu("business")}
          >
            <div className="w-1/4 pr-10">
              <h3 className="font-bold mb-2">Business Solutions</h3>
              <p className="text-[15px] text-gray-600 leading-5">
                We offer all-in-one business solutions connecting you to digital
                opportunities.
              </p>
            </div>

            {/* MAIN MENU LIST */}
            <div className="w-1/4 relative">
              <ul className="space-y-2 text-[16px] text-gray-500">
                {/* ITEM 1 */}
                <li
                  className="flex items-center gap-2 hover:text-gray-800 relative"
                  onMouseEnter={() => setSubOpen("const")}
                  onMouseLeave={() => setSubOpen(null)}
                >
                  <ChevronRight size={14} />
                  <a href="https://brbgroup.org/construction-and-real-estate-solutions/">
                    Construction and Real Estate Solutions
                  </a>

                  {/* MINI DROPDOWN */}
                  {subOpen === "const" && (
                     <div className="absolute left-full top-[50%]  -translate-y-1/3 p-4 pt-0 gap-2 z-50 flex-col ml-0 text-sm flex bg-white shadow-lg rounded-md w-48 ">
                      <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link to="" className="hover:text-gray-700">
                          Construction Servives
                        </Link>
                      </li>
                      <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                          Real Estate Development
                        </Link>
                      </li>
                      <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                         Project Management
                        </Link>
                      </li>
                         <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                         Consulting Services
                        </Link>
                      </li>
                    </div>
                  )}
                </li>

                {/* ITEM 2 */}
                <li
                  className="relative flex items-center gap-2 hover:text-gray-800"
                  onMouseEnter={() => setSubOpen("ict")}
                  onMouseLeave={() => setSubOpen(null)}
                >
                  <ChevronRight size={14} />
                  <a href="https://brbgroup.org/brb-technologoies/">
                    ICT Services
                  </a>

                  {subOpen === "ict" && (
                   <div className="absolute left-full top-[30%]  -translate-y-1/2 p-4 pt-0 gap-2 z-50 flex-col ml-0 text-sm flex bg-white shadow-lg rounded-md w-48 ">
                      <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link to="#" className="hover:text-gray-700">
                         AI/ML Solutions
                        </Link>
                      </li>
                      <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                          Blockchain Solution
                        </Link>
                      </li>
                      <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                          BPO Service
                        </Link>
                      </li>
                      <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                          Cloud Computing
                        </Link>
                      </li>
                       <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                          Software Development
                        </Link>
                      </li>
                      <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                          CyberSecurity
                        </Link>
                      </li>
                       <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                         Data Migration
                        </Link>
                      </li>
                       <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                         EdTech
                        </Link>
                      </li>
                       <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                         ERP Implementation
                        </Link>
                      </li>
                         <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                         IOT Staff Augmentation
                        </Link>
                      </li>
                        <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                         Network Automation
                        </Link>
                      </li>
                       <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                         Spatial Computing
                        </Link>
                      </li>
                       <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="#"
                          className="hover:text-gray-700"
                        >
                         Smart City Services
                        </Link>
                      </li>
                    </div>
                  )}
                </li>

                {/* ITEM 7 (Minerals) */}
                <li
                  className="relative flex items-center gap-2 hover:text-gray-800"
                  onMouseEnter={() => setSubOpen("minerals")}
                  onMouseLeave={() => setSubOpen(null)}
                >
                  <ChevronRight size={14} />
                  <a href="/">Minerals</a>

                  {/* MINI SUB MENU */}
                  {subOpen === "minerals" && (
                    <div className="absolute left-full top-[30%]  -translate-y-1/2 p-4 pt-0 gap-2 z-50 flex-col ml-0 text-sm flex bg-white shadow-lg rounded-md w-48 ">
                      <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link to="/mineral" className="hover:text-gray-700">
                          BRB Mineraloop (PVT) LTD
                        </Link>
                      </li>
                      <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="/brb-mineral-and-metal"
                          className="hover:text-gray-700"
                        >
                          BRB Minerals and Metals (PVT) LTD
                        </Link>
                      </li>
                      <li className="hover:text-gray-700 cursor-pointer border-b-2 border-gray-200">
                        <Link
                          to="/brb-exploration"
                          className="hover:text-gray-700"
                        >
                          BRB Exploration (PVT) LTD
                        </Link>
                      </li>
                    </div>
                  )}
                </li>
              </ul>
            </div>

            <div className="w-1/4"></div>

            <div className="w-1/4 flex justify-end">
              <img
                src="/Navbar/Rectangle-7245-5.webp"
                className="h-48 rounded-md"
              />
            </div>
          </div>
        )}

        {/* -------------------- WHY BRB DROPDOWN -------------------- */}
        {openMenu === "why" && (
          <div
            className="hidden md:flex absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-200 py-10 px-20 justify-between"
            onMouseEnter={() => setOpenMenu("why")}
          >
            <div className="w-1/4 pr-10">
              <h3 className="font-bold mb-2">Why BRB</h3>
              <p className="text-[15px] text-gray-600 leading-5">
                The BRB Difference. Discover what sets us apart and why we're
                your ideal partner.
              </p>
            </div>

            <div className="w-1/4">
              <ul className="space-y-2 text-[16px] text-gray-500 ">
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/why-brb/#why-brb">Why BRB</a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/market-intelligence/">
                    Market Intelligence
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/why-brb/#why-ino-tech">
                    Innovation & Technology
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <ul className="space-y-2 text-[16px] text-gray-500 ">
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/why-brb/#why-awards">Awards</a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/why-brb/#why-investor`">
                    Investor Relation
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/why-brb/#why-diversity">
                    Diversity & Inclusion
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-1/4"></div>

            <div className="w-1/4 flex justify-end">
              <img
                src="/Navbar/Rectangle-7376.webp"
                className="h-48 rounded-md"
              />
            </div>
          </div>
        )}

        {/* -------------------- PROPTECH DROPDOWN -------------------- */}
        {openMenu === "proptech" && (
          <div
            className="hidden md:flex absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-200 py-10 px-20 justify-between"
            onMouseEnter={() => setOpenMenu("proptech")}
          >
            <div className="w-1/4 pr-10">
              <h3 className="font-bold mb-2">Prop Tech</h3>
              <p className="text-[15px] text-gray-600 leading-5">
                Our digital-first property transformation approach.
              </p>
            </div>

            <div className="w-1/4">
              <ul className="space-y-2 text-[16px] text-gray-500 ">
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/brb-trading-pvt-ltd/">ROI</a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/home-loan-calculator/">
                    Home Loan Calculator
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/investment-calculator/">
                    Investment Calculator
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/area-converter-calculator/">
                    Area Converter
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/cost-construction-evaluator-calculator/">
                    Cost Construction Evaluator Calculator
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/debt-equity-ratio-calculator/">
                    Debt/Equity Ratio Calculator
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-1/4"></div>

            <div className="w-1/4 flex justify-end">
              <img
                src="/Navbar/Rectangle-7245-5.webp"
                className="h-50 rounded-md"
              />
            </div>
          </div>
        )}

        {/* -------------------- COMMUNITIES DROPDOWN -------------------- */}
        {openMenu === "communities" && (
          <div
            className="hidden md:flex absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-200 py-10 px-20 justify-between"
            onMouseEnter={() => setOpenMenu("communities")}
          >
            <div className="w-1/3 pr-10">
              <h3 className="font-bold mb-2">Communities</h3>
              <p className="text-[15px] text-gray-600 leading-5">
                Experience the Future of Living. Explore BRB Group's diverse
                projects, from stunning villas to high-rise marvels.
              </p>
            </div>

            <div className="w-1/3">
              <ul className="space-y-2 text-[16px] text-gray-500 ">
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/communities/#comm-oasis-park">
                    {" "}
                    Oasis Park Residencia
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/communities/#comm-hexagon-tower">
                    {" "}
                    Hexagon Tower
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/communities/">
                    Welkin Heights (Coming Soon)
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-1/3"></div>

            <div className="w-1/4 flex justify-end">
              <img
                src="/Navbar/Rectangle-7377.webp"
                className="h-48 rounded-md"
              />
            </div>
          </div>
        )}

        {/* -------------------- ESG DROPDOWN -------------------- */}
        {openMenu === "esg" && (
          <div
            className="hidden md:flex absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-200 py-10 px-20 justify-between"
            onMouseEnter={() => setOpenMenu("esg")}
          >
            <div className="w-1/4 pr-10">
              <h3 className="font-bold mb-2">ESG Sustainability</h3>
              <p className="text-[15px] text-gray-600 leading-5">
                BRB Group champions sustainability through ESG leadership.
              </p>
            </div>

            <div className="w-1/4">
              <ul className="space-y-2 text-[16px] text-gray-500 ">
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/esg-sustainability/#esg-esg">
                    ESG
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/communities/">CSR</a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/brb-foundation/">
                    BRB Foundation
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-1/4"></div>

            <div className="w-1/4 flex justify-end">
              <img
                src="/Navbar/Rectangle-7245-1-1.webp"
                className="h-48 rounded-md"
              />
            </div>
          </div>
        )}

        {/* -------------------- MEDIA DROPDOWN -------------------- */}
        {openMenu === "media" && (
          <div
            className="hidden md:flex absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-200 py-10 px-20 justify-between"
            onMouseEnter={() => setOpenMenu("media")}
          >
            <div className="w-1/4 pr-10">
              <h3 className="font-bold mb-2">Media</h3>
              <p className="text-[15px] text-gray-600 leading-5">
                The Present in Focus. Dive into BRB Group's media glimpses,
                featuring news, latest trends, and knowledge that inspires.
              </p>
            </div>

            <div className="w-1/4">
              <ul className="space-y-2 text-[16px] text-gray-500 ">
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/media/#media-news">
                    News & Updates
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/media/#media-events">News</a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/media/#media-blogs">Blogs</a>
                </li>
              </ul>
            </div>

            <div className="w-1/4"></div>

            <div className="w-1/4 flex justify-end">
              <img
                src="/Navbar/Rectangle-7245-1-2.webp"
                className="h-48 rounded-md"
              />
            </div>
          </div>
        )}

        {/* -------------------- CAREERS DROPDOWN -------------------- */}
        {openMenu === "careers" && (
          <div
            className="hidden md:flex absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-200 py-10 px-20 gap-10 mx-auto"
            onMouseEnter={() => setOpenMenu("careers")}
          >
            {/* Column 1 */}
            <div className="w-full">
              <h3 className="font-bold mb-2">Careers</h3>
              <p className="text-[15px] pr-10 text-gray-600 leading-5">
                Thrive at BRB. Build your career, make a difference. Explore
                exciting opportunities and have a glimpse on life at BRB Group
                activities
              </p>
            </div>

            {/* Column 2 */}
            <div className="w-full">
              <ul className="space-y-2 text-[16px] text-gray-500 ">
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/career/#career-life-at-brb">
                    Life at BRB
                  </a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="https://brbgroup.org/career/#joincareer">Join Us</a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="w-full">
              <img
                src="/Navbar/Rectangle-7376.webp"
                className="h-48 rounded-md mx-auto"
              />
            </div>
          </div>
        )}
      </section>

      {/* ==================== MOBILE SIDEBAR ==================== */}

      {/* Overlay */}

      <div
        className={`fixed inset-0 bg-black/70 z-60 transition-opacity duration-300 md:hidden ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <img
            src="/BRB-LOGO1-2048x1136-1-1024x568.webp"
            alt="BRB Logo"
            className="h-12"
          />
          <button onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="overflow-y-auto h-[calc(100%-80px)] p-4">
          <ul className="space-y-1">
            {/* About Us */}
            <li>
              <button
                className="w-full flex items-center justify-between py-3 px-2 text-left font-medium hover:bg-gray-100 rounded"
                onClick={() =>
                  setMobileMenuOpen(mobileMenuOpen === "about" ? null : "about")
                }
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileMenuOpen === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileMenuOpen === "about" && (
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <li>
                    <a
                      href="https://brbgroup.org/who-we-are/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Chairman's Message
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/who-we-are/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Vision
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/who-we-are/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Mission
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/who-we-are/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Core Values
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/who-we-are/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Advisory Board
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/who-we-are/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Brb Builders and Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/brb-foundation/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Brb Foundation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/brb-technologoies/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Brd Technologies
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/brb-marketing-pvt-ltd/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Brb Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/brb-engineering-pvt-ltd/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Brb Engineering
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/brb-urbanscape-pvt-ltd/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Brb Urbanscape
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Business Solutions */}
<li>
  <button
    className="w-full flex items-center justify-between py-3 px-2 text-left font-medium hover:bg-gray-100 rounded"
    onClick={() => setMobileMenuOpen(mobileMenuOpen === "business" ? null : "business")}
  >
    <span>Business Solutions</span>
    <ChevronDown
      className={`w-4 h-4 transition-transform ${
        mobileMenuOpen === "business" ? "rotate-180" : ""
      }`}
    />
  </button>
  {mobileMenuOpen === "business" && (
    <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
      <li>
        <a
          href="https://brbgroup.org/construction-and-real-estate-solutions/"
          className="block py-2 hover:text-blue-600"
        >
          Construction & Real Estate
        </a>
      </li>
      <li>
        <a
          href="https://brbgroup.org/brb-technologoies/"
          className="block py-2 hover:text-blue-600"
        >
          ICT Services
        </a>
      </li>

      {/* Minerals / Commodities & General Trading Solutions */}
      <li>
       <button
  className="w-full flex justify-between items-center py-2 pr-2 text-left font-medium hover:bg-gray-100 rounded"
  onClick={() =>
    setMobileSubMenuOpen(
      mobileSubMenuOpen === "minerals" ? null : "minerals"
    )
  }
>
  <Link href="/minerals" className="flex-1">
    Mineral
  </Link>
  <ChevronDown
    className={`w-4 h-4 transition-transform ${
      mobileSubMenuOpen === "minerals" ? "rotate-180" : ""
    }`}
  />
</button>

        {mobileSubMenuOpen === "minerals" && (
          <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
            <li>
              <Link
                to="/mineral"
                onClick={closeAllMobileMenus}
                className="block py-2 hover:text-blue-600"
              >
                BRB Mineraloop (PVT) LTD
              </Link>
            </li>
            <li>
              <Link
                to="/brb-mineral-and-metal"
                onClick={closeAllMobileMenus}
                className="block py-2 hover:text-blue-600"
              >
                BRB Minerals and Metals (PVT) LTD
              </Link>
            </li>
            <li>
              <Link
                to="/brb-exploration"
                onClick={closeAllMobileMenus}
                className="block py-2 hover:text-blue-600"
              >
                BRB Exploration (PVT) LTD
              </Link>
            </li>
          </ul>
        )}
      </li>
    </ul>
  )}
</li>

            {/* Why BRB */}
            <li>
              <button
                className="w-full flex items-center justify-between py-3 px-2 text-left font-medium hover:bg-gray-100 rounded"
                onClick={() =>
                  setMobileMenuOpen(mobileMenuOpen === "why" ? null : "why")
                }
              >
                <span>Why BRB</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileMenuOpen === "why" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileMenuOpen === "why" && (
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <li>
                    <a
                      href="https://brbgroup.org/why-brb/#why-brb"
                      className="block py-2 hover:text-blue-600"
                    >
                      Why BRB
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/market-intelligence/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Market Intelligence
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/why-brb/#why-ino-tech"
                      className="block py-2 hover:text-blue-600"
                    >
                      Innovation & Technology
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/why-brb/#why-awards"
                      className="block py-2 hover:text-blue-600"
                    >
                      Awards
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/why-brb/#why-investor`"
                      className="block py-2 hover:text-blue-600"
                    >
                      Investor Relation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/why-brb/#why-diversity"
                      className="block py-2 hover:text-blue-600"
                    >
                      Diversity & Inclusion
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Prop Tech */}
            <li>
              <button
                className="w-full flex items-center justify-between py-3 px-2 text-left font-medium hover:bg-gray-100 rounded"
                onClick={() =>
                  setMobileMenuOpen(
                    mobileMenuOpen === "proptech" ? null : "proptech"
                  )
                }
              >
                <span>Prop Tech</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileMenuOpen === "proptech" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileMenuOpen === "proptech" && (
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <li>
                    <a
                      href="https://brbgroup.org/brb-trading-pvt-ltd/"
                      className="block py-2 hover:text-blue-600"
                    >
                      ROI
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/home-loan-calculator/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Home Loan Calculator
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/investment-calculator/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Investment Calculator
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/area-converter-calculator/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Area Converter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/cost-construction-evaluator-calculator/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Cost Construction Evaluator
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/debt-equity-ratio-calculator/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Debt/Equity Ratio
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Communities */}
            <li>
              <button
                className="w-full flex items-center justify-between py-3 px-2 text-left font-medium hover:bg-gray-100 rounded"
                onClick={() =>
                  setMobileMenuOpen(
                    mobileMenuOpen === "communities" ? null : "communities"
                  )
                }
              >
                <span>Communities</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileMenuOpen === "communities" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileMenuOpen === "communities" && (
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <li>
                    <a
                      href="https://brbgroup.org/communities/#comm-oasis-park"
                      className="block py-2 hover:text-blue-600"
                    >
                      Oasis Park Residencia
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/communities/#comm-hexagon-tower"
                      className="block py-2 hover:text-blue-600"
                    >
                      Hexagon Tower
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/communities/"
                      className="block py-2 hover:text-blue-600"
                    >
                      Welkin Heights
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* ESG Sustainability */}
            <li>
              <button
                className="w-full flex items-center justify-between py-3 px-2 text-left font-medium hover:bg-gray-100 rounded"
                onClick={() =>
                  setMobileMenuOpen(mobileMenuOpen === "esg" ? null : "esg")
                }
              >
                <span>ESG Sustainability</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileMenuOpen === "esg" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileMenuOpen === "esg" && (
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <li>
                    <a
                      href="https://brbgroup.org/esg-sustainability/#esg-esg"
                      className="block py-2 hover:text-blue-600"
                    >
                      ESG
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/communities/"
                      className="block py-2 hover:text-blue-600"
                    >
                      CSR
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/brb-foundation/"
                      className="block py-2 hover:text-blue-600"
                    >
                      BRB Foundation
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Media */}
            <li>
              <button
                className="w-full flex items-center justify-between py-3 px-2 text-left font-medium hover:bg-gray-100 rounded"
                onClick={() =>
                  setMobileMenuOpen(mobileMenuOpen === "media" ? null : "media")
                }
              >
                <span>Media</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileMenuOpen === "media" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileMenuOpen === "media" && (
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <li>
                    <a
                      href="https://brbgroup.org/media/#media-news"
                      className="block py-2 hover:text-blue-600"
                    >
                      News & Updates
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/media/#media-events"
                      className="block py-2 hover:text-blue-600"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/media/#media-blogs"
                      className="block py-2 hover:text-blue-600"
                    >
                      Blogs
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Careers */}
            <li>
              <button
                className="w-full flex items-center justify-between py-3 px-2 text-left font-medium hover:bg-gray-100 rounded"
                onClick={() =>
                  setMobileMenuOpen(
                    mobileMenuOpen === "careers" ? null : "careers"
                  )
                }
              >
                <span>Careers</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileMenuOpen === "careers" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileMenuOpen === "careers" && (
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <li>
                    <a
                      href="https://brbgroup.org/career/#career-life-at-brb"
                      className="block py-2 hover:text-blue-600"
                    >
                      Life at BRB
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brbgroup.org/career/#joincareer"
                      className="block py-2 hover:text-blue-600"
                    >
                      Join Us
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* Mobile Buttons */}
          <div className="mt-6 space-y-3">
            <button className="w-full px-5 py-2.5 border border-black rounded-xl text-sm font-medium hover:bg-black hover:text-white transition">
              Lets Connect
            </button>
            <div className="flex justify-center gap-4">
              <Search className="w-5 h-5 cursor-pointer" />
              <Globe className="w-6 h-6 cursor-pointer text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
