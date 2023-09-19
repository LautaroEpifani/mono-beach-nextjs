"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar() {
  const [activeLink, setActiveLink] = useState('/');
  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
        <img src="/assets/nav/logo-mono.png" alt="Logo" className="w-280 h-70" />
        </Link>
        <ul className="flex space-x-4">
          <NavItem href="/" text="Home" active={activeLink === '/'} />
          <NavItem href="/about" text="About" active={activeLink === '/about'} />
          <NavItem href="/services" text="Services" active={activeLink === '/services'} />
          <NavItem href="/contact" text="Contact" active={activeLink === '/contact'} />
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ href, text, active }) {
  return (
    <li>
      <Link href={href}>
        <a className={`text-sm ${active ? 'font-bold' : ''}`}>{text}</a>
      </Link>
    </li>
  );
}

export default Navbar;