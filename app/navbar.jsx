"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../public/logopng.png"

export default function Navbar() {

  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true); 
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className= {`z-20 bg-white transition-all duration-300  fixed w-4/5 rounded-b-[12px] left-1/2 -translate-x-1/2 shadow-lg ${show ? "show" : "hide"}`}>
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <Image src={logo} alt="logo" width={200}></Image>
        {/* Desktop Menu */} 
        <ul className="hidden md:flex gap-8">
          <li><a href="#">Home global</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        {/* Mobile Button */}
        <button onClick={() => setIsOpen(prev => !prev)} className="md:hidden ">
          {isOpen ? ( <span className="text-4xl leading-none">&times;</span> ) : ( <span className="text-4xl leading-none">&#9776;</span> )} 
        </button> 
        </div> 
        {/* Mobile Menu */} 
        <div className={`md:hidden absolute  rounded-[12px] top-20 left-0 w-full text-black bg-white transition-all duration-300 overflow-hidden ${ isOpen ? "max-h-96 py-4" : "max-h-0" }`} > 
          <ul className="flex flex-col items-center gap-4"> 
            <li><a href="#">Home global</a></li> 
            <li><a href="#">About</a></li> 
            <li><a href="#">Services</a></li> 
            <li><a href="#">Contact</a></li> 
          </ul> 
        </div> 
    </nav> );
}