"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import navLinks from "./menuData";
import { BsHeadphones } from "react-icons/bs";

const Sidebar = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 767;
      setIsMobile(isNowMobile);
      if (!isNowMobile) setIsExpanded(false);
    };

    handleResize(); // Set initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  const isOverlay = isMobile && isExpanded;

  return (
    <>
      {/* Sidebar */}
      <div
        className={`left-0 top-0 z-40 flex flex-col bg-white shadow-md transition-all duration-300 md:w-60 ${
          isOverlay ? "fixed h-full" : "relative"
        }`}
        style={{
          padding: isMobile
            ? isExpanded
              ? "50px 20px 0 20px"
              : "60px 10px 0 10px"
            : "70px 30px 0 30px",
        }}
      >
        {/* Hamburger Button */}
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="align-center relative z-50 flex rounded-md bg-white p-2"
            style={{
              top: "-40px",
              left: "10px",
            }}
          >
            <RxHamburgerMenu />
            <span className="hidden">Menu</span>
          </button>
        )}
        <nav className="flex flex-col">
          {navLinks.map(({ href, label, icon }) => {
            const isActive = pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 p-4 transition-colors duration-200 md:justify-start`}
                style={{
                  backgroundColor: isActive ? "#1C1442" : "transparent",
                  borderRadius: isActive ? "8px" : "0px",
                  color: isActive ? "#ffffff" : "#374151",
                }}
              >
                <span className="text-xl">{icon}</span>
                {!isMobile || isExpanded ? (
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    {label}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>

        <Link
          href={"/contact-support"}
          className={` mt-4 flex items-center gap-2 rounded-md bg-[#E8E9FF] px-4 py-2 transition-colors duration-200 md:justify-start`}
        >
          <BsHeadphones className="text-xl" />
          {!isMobile || isExpanded ? (
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              Contact Support
            </span>
          ) : null}
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
