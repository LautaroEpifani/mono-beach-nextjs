"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <nav className="bg-gray-800 text-white py-4 ">
      <div className=" flex justify-center items-center">
        <Link href="/">
          <div className="w-1/2">
          <Image
            width={500}
            height={500}
            src="/assets/nav/logo-mono.png"
            alt="Logo"
            className="w-280 h-70"
          />
          </div>
        </Link>
        <ul className="flex gap-x-10 justify-center w-1/2">
          <Link href="/" onClick={() => setActiveLink("/")}>
            <li className={activeLink === "/" ? "text-primary" : ""}>Home</li>
          </Link>
          <Link href="/about" onClick={() => setActiveLink("/about")}>
            <li className={activeLink === "/about" ? "text-primary" : ""}>
              About
            </li>
          </Link>
          <Link href="/services" onClick={() => setActiveLink("/services")}>
            <li className={activeLink === "/services" ? "text-primary" : ""}>
              Services
            </li>
          </Link>
          <Link href="/contact" onClick={() => setActiveLink("/contact")}>
            <li className={activeLink === "/contact" ? "text-primary" : ""}>
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
