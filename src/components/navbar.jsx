"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      // Logic untuk scrollHeader (menambah/menghapus blur dan warna teks)
      if (window.scrollY >= 50) setScrollHeader(true);
      else setScrollHeader(false);

      // Logic untuk active link (menggunakan offset -58px dari CSS asli)
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((sec) => {
        const sectionTop = sec.offsetTop - 58; 
        const sectionHeight = sec.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sec.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColorClass = scrollHeader ? "text-white" : "text-black";
  const headerScrollClass = scrollHeader 
    ? "backdrop-blur-xl bg-black/30 shadow-lg" 
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">ManakeTrip</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">About</li>
          <li className="cursor-pointer hover:text-gray-300">Popular</li>
          <li className="cursor-pointer hover:text-gray-300">Explore</li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-2xl">☰</button>
        </div>
      </div>
        {/* Logo */}
        <Link
          href="#"
          className={`font-semibold text-xl md:text-2xl transition ${textColorClass}`}
        >
          ManakeTrip
        </Link>

        {/* Menu (Desktop & Mobile) */}
        <div
          className={`fixed md:static left-0 w-full md:w-auto transition-all duration-400 ease-linear ${
            showMenu ? "top-0" : "-top-full"
          } h-screen md:h-auto bg-black/40 md:bg-transparent backdrop-blur-xl md:backdrop-blur-0`}
        >
          {/* List Menu */}
          <ul className="flex flex-col md:flex-row gap-10 md:gap-16 text-center py-16 md:py-0">
            {["home", "about", "popular", "explore"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setShowMenu(false)}
                  className={`font-medium capitalize relative text-lg ${textColorClass} 
                    after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-current after:transition-all duration-300
                    ${activeSection === item ? "after:w-[70%]" : "after:w-0"} 
                    hover:after:w-[70%]`
                  }
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Close Button (Mobile) */}
          <div
            onClick={() => setShowMenu(false)}
            className="absolute right-6 top-4 text-2xl cursor-pointer md:hidden"
          >
            <RiCloseLine className={textColorClass} />
          </div>
        </div>

        {/* Toggle Button (Mobile) */}
        <div
          onClick={() => setShowMenu(true)}
          className="md:hidden text-2xl cursor-pointer"
        >
          <RiMenuFill className={textColorClass} />
        </div>
      </nav>
  );
}