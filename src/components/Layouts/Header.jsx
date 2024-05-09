import { Link, NavLink } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { useState, useEffect } from "react";
import { Search } from "../Sections/Search";
import { DropDown } from "../../pages/Product/components/DropDown";

export const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [DrakMode, setDarkMode] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false);
  useEffect(() => {
    if (DrakMode) {
      document.documentElement.classList.add('dark');

    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [DrakMode]);
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse   no-underline">
            <img src="/images/logo.png" className="h-8" alt="Code Book" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black  " >Code Book</span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link to='/Card'>
              <span style={{ cursor: 'pointer' }}><FaShoppingCart />
              </span> </Link>
            <span style={{ cursor: 'pointer' }} onClick={() => setDarkMode(!DrakMode)}>
              <IoSettingsSharp />
            </span>
            <div className="relative">
              <IoMdContact onClick={() => setShowDropDown(!showDropDown)} className="cursor-pointer" /> 

              </div>

              
            <span style={{ cursor: 'pointer' }}><FaSearch onClick={() => setShowInput(!showInput)} /></span>
          </div>
        </div>
      </nav>

      {showInput && <Search />}


    </header>
  )
}
