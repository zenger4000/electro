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

  return (
    <header className={`navbar ${show ? "show" : "hide"}`}>
      <div className="logo">
        <Image className="imglogo" src={logo} alt="logo"/>
      </div>
      <div className="nav-links">
        <div>Sodium</div>
        <div>Magnesium</div>
        <div>Potassium</div>
        <div>Calcium</div>
      </div>
      
    </header>
  );
}