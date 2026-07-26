"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../public/logopng.png";
import Link from "next/link";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  const [isOpen, setIsOpen] = useState(false);
  const [electrolytesOpen, setElectrolytesOpen] = useState(false);

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
    <nav
      className={`
        z-20
        bg-white
        transition-all
        duration-300
        fixed
        w-4/5
        rounded-b-[12px]
        left-1/2
        -translate-x-1/2
        shadow-lg
        ${show ? "show" : "hide"}
      `}
    >
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}

        <Link href="/">
          <Image
            src={logo}
            alt="Electrolyfe logo"
            width={200}
          />
        </Link>


        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8">

          <li>
            <Link href="/">
              Home
            </Link>
          </li>

          <li>
            <Link href="/search">
              Search
            </Link>
          </li>

          {/* Electrolytes Dropdown */}

          <li className="relative group">

            <button
              type="button"
              className="flex items-center gap-1"
            >
              Electrolytes

              <span className="text-xs transition-transform duration-200 group-hover:rotate-180">
                ▾
              </span>
            </button>


            {/* Dropdown */}

            <div
              className="
                absolute
                top-full
                left-1/2
                -translate-x-1/2
                pt-3
                invisible
                opacity-0
                translate-y-1
                group-hover:visible
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all
                duration-200
              "
            >

              <div
                className="
                  w-56
                  rounded-xl
                  border
                  border-slate-100
                  bg-white
                  p-3
                  shadow-xl
                "
              >

                <Link
                  href="/potassium"
                  className="
                    block
                    rounded-lg
                    px-4
                    py-2
                    transition
                    hover:bg-[#e22c37]/20
                  "
                >
                  Potassium
                </Link>

                <Link
                  href="/sodium"
                  className="
                    block
                    rounded-lg
                    px-4
                    py-2
                    transition
                    hover:bg-[#9d51cd]/20
                  "
                >
                  Sodium
                </Link>

                <Link
                  href="/magnesium"
                  className="
                    block
                    rounded-lg
                    px-4
                    py-2
                    transition
                    hover:bg-[#6ae75e]/20
                  "
                >
                  Magnesium
                </Link>

                <Link
                  href="/calcium"
                  className="
                    block
                    rounded-lg
                    px-4
                    py-2
                    transition
                    hover:bg-[#e6cac6]/20
                  "
                >
                  Calcium
                </Link>


                {/* Divider */}

                <div className="my-2 border-t border-slate-100" />


                <Link
                  href="/minerals"
                  className="
                    block
                    rounded-lg
                    px-4
                    py-2
                    transition
                    hover:bg-slate-100
                  "
                >
                  Other Essential Minerals
                </Link>

              </div>

            </div>

          </li>

          <li>
            <Link href="/about">
              About
            </Link>
          </li>

        </ul>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <span className="text-4xl leading-none">
              &times;
            </span>
          ) : (
            <span className="text-4xl leading-none">
              &#9776;
            </span>
          )}
        </button>

      </div>


      {/* Mobile Menu */}

      <div
        className={`
          md:hidden
          absolute
          shadow-lg
          rounded-[12px]
          top-20
          left-0
          w-full
          text-black
          bg-white
          transition-all
          duration-300
          overflow-hidden

          ${isOpen
            ? "max-h-[500px] py-4"
            : "max-h-0"
          }
        `}
      >

        <ul className="flex flex-col items-center gap-4">

          <li>
            <Link href="/">
              Home
            </Link>
          </li>

          <li>
            <Link href="/search">
              Search
            </Link>
          </li>

          {/* Mobile Electrolytes */}

          <li className="w-full flex flex-col items-center">

            <button
              type="button"
              onClick={() =>
                setElectrolytesOpen((prev) => !prev)
              }
              className="flex items-center gap-2"
            >
              Electrolytes

              <span
                className={`
                  text-xs
                  transition-transform
                  duration-200
                  ${electrolytesOpen ? "rotate-180" : ""}
                `}
              >
                ▾
              </span>
            </button>


            {/* Mobile Electrolytes Links */}

            <div
              className={`
                w-full
                flex
                flex-col
                items-center
                overflow-hidden
                transition-all
                duration-300

                ${electrolytesOpen
                  ? "max-h-96 mt-3 opacity-100"
                  : "max-h-0 opacity-0"
                }
              `}
            >

              <Link
                href="/potassium"
                className="py-2 text-sm"
              >
                Potassium
              </Link>

              <Link
                href="/sodium"
                className="py-2 text-sm"
              >
                Sodium
              </Link>

              <Link
                href="/magnesium"
                className="py-2 text-sm"
              >
                Magnesium
              </Link>

              <Link
                href="/calcium"
                className="py-2 text-sm"
              >
                Calcium
              </Link>

              <Link
                href="/minerals"
                className="py-1 text-sm"
              >
                Other Essential Minerals
              </Link>

            </div>

          </li>

          <li>
            <Link href="/about">
              About
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  );
}