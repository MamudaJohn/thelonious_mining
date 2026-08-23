"use client";

import Link from "next/link";
import logo from "@/app/favicon.ico"
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Minerals", href: "/minerals" },
  { label: "Insights", href: "/about/#hero1" },
  { label: "About", href: "/about/#hero2" },
  { label: "Contact", href: "/contact" },
];



function Header() {
    const [addValue, setAddValue] = useState(true);

    const clickHandler = () => {
      console.log("We are inside the ")
      setAddValue(!addValue)      
    }

  return (
    <header className="site-header">
      <nav className="wrap nav">
        <Link href="/" className="logo">
          <Image className="logo-mark" src={logo} alt="Thelonious Mining's Logo"/>
          <span className="logo-word">
            Thelonious <span>Mining</span>
          </span>
        </Link>
        <div className="navlinks-wrap">
          <ul className="navlinks">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
          </ul>
          <Link href="/contact" className="nav-cta">
            Talk to us
          </Link>
        </div>
        <div className={addValue?"hamburgerclick":"Hamburger"} onClick={clickHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      
      {addValue && <nav className="nav1">
        <ul className="wrap navlinks1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
      </nav>}
    </header>
  );
}

export default Header;