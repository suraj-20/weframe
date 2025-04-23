"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import navLinks from "./menuData";

const Sidebar = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 800;
      setIsMobile(isNowMobile);
      if (!isNowMobile) setIsExpanded(false); // Reset on desktop
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
      {/* Overlay for expanded menu on mobile */}
      {isOverlay && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`left-0 top-0 z-40 flex flex-col bg-white shadow-md transition-all duration-300 ${
          isOverlay ? "fixed h-full" : "relative"
        }`}
        style={{
          // width: isMobile ? (isExpanded ? "200px" : "50px") : "200px",
          padding: isMobile
            ? isExpanded
              ? "80px 20px 0 20px"
              : "80px 10px 0 10px"
            : "80px 30px 0 30px",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Hamburger Button */}
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="relative z-50 rounded-md bg-white p-2"
            style={{
              top: "-70px",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <RxHamburgerMenu />
          </button>
        )}
        <nav className="flex flex-col">
          {navLinks.map(({ href, label, icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 p-4 transition-colors duration-200 ${
                  isMobile && !isExpanded ? "justify-center" : ""
                }`}
                style={{
                  backgroundColor: isActive ? "#1C1442" : "transparent",
                  borderRadius: isActive ? "8px" : "0px",
                  color: isActive ? "#ffffff" : "#374151",
                }}
              >
                {icon}
                {!isMobile || isExpanded ? (
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    {label}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
