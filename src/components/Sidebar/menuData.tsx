import { RiHome5Line } from "react-icons/ri";
import { PiNote } from "react-icons/pi";
import { TbUserSquareRounded } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoDesktopOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosAnalytics } from "react-icons/io";
import { LuSquarePlay } from "react-icons/lu";
import { BsArrowsMove } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";

const navLinks = [
  { label: "Dashboard", href: "/", icon: <RiHome5Line /> },
  { label: "Content", href: "/content", icon: <PiNote /> },
  { label: "User", href: "/user", icon: <TbUserSquareRounded /> },
  { label: "Task", href: "/task", icon: <HiOutlineUsers /> },
  { label: "App/Web", href: "/app-web", icon: <IoDesktopOutline /> },
  { label: "Analytics", href: "/analytics", icon: <IoIosAnalytics /> },
  { label: "Media", href: "/media", icon: <LuSquarePlay /> },
  { label: "Customize", href: "/customize", icon: <BsArrowsMove /> },
  { label: "Notifications", href: "/notifications", icon: <FaRegBell /> },
  {
    label: "Subscription",
    href: "/subscription",
    icon: <MdOutlineSubscriptions />,
  },
  { label: "Settings", href: "/settings", icon: <IoSettingsOutline /> },
];

export default navLinks;
