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
    <nav className= {`bg-[#ffffffec] transition-all duration-300  fixed w-4/5 rounded-b-[12px] left-1/2 -translate-x-1/2 translate-y-0 ${show ? "show" : "hide"}`}>
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">Logo</h1>
        {/* Desktop Menu */} 
        <ul className="hidden md:flex gap-8">
          <li><a href="#">Home</a></li>
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
        <div className={`md:hidden absolute mt-2 rounded-[12px] top-16 left-0 w-full text-white bg-slate-800 transition-all duration-300 overflow-hidden ${ isOpen ? "max-h-96 py-4" : "max-h-0" }`} > 
          <ul className="flex flex-col items-center gap-4"> 
            <li><a href="#">Home</a></li> 
            <li><a href="#">About</a></li> 
            <li><a href="#">Services</a></li> 
            <li><a href="#">Contact</a></li> 
          </ul> 
        </div> 
    </nav> );


  // const [show, setShow] = useState(true);
  // const lastScrollY = useRef(0);

  // const [isOpen, setIsOpen] = useState(false)

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen)
  // }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const current = window.scrollY;

  //     if (current > lastScrollY.current) {
  //       setShow(false);
  //     } else {
  //       setShow(true); 
  //     }

  //     lastScrollY.current = current;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // return (
  //   <nav className={`navbar ${show ? "show" : "hide"} flex justify-between items-center `}>
  //       <Image className="imglogo" src={logo} alt="logo"/>
  //       { isOpen && (<ul className="md:hidden flex flex-col gap-4 p-4">
  //       <li>Sodium</li>
  //       <li>Magnesium</li>
  //       <li>Potassium</li>
  //       <li>Calcium</li>
  //     </ul>)}

  //     <ul className="md:flex gap-6 p-4 hidden">
  //       <li>Sodium</li>
  //       <li>Magnesium</li>
  //       <li>Potassium</li>
  //       <li>Calcium</li>
  //     </ul>

  //     <button onClick={()=> toggleMenu()}>
  //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-6 w-10 m-8 ${isOpen? "block" : "hidden"}`}>
  //         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
  //       </svg>
  //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-6 w-10 m-8 md:hidden ${isOpen? "hidden" : "block"}`}>
  //         <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
  //       </svg>
  //     </button>
      
  //   </nav>
  // );
}