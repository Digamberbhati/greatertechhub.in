'use client';
import React, { useEffect, useRef, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion"
const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [paddingX, setPaddingX] = useState(8);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const scroll = Math.floor(latest * 100);

    if (scroll >= 8) {
      setPaddingX(88);
    } else {
      setPaddingX(8);
    }
  });
    

    
    return (
        <div
        className="flex items-center justify-between  bg-custom-black  fixed top-0 left-0 w-full z-[999]  h-[14vh] "
        style={{
          paddingLeft: `${paddingX}px`,
          paddingRight: `${paddingX}px`,
          transition: 'padding-left 0.3s ease, padding-right 0.3s ease',
        }}
      >            
      <div>

                <img  src="/images/newlogo.png" alt="Logo" className="h-12"  />
      </div>
  
            <div className="lg:hidden ">
                <button
                    className="text-custom-text focus:outline-none pr-2 "
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>

            <div className={cn("lg:flex items-start justify-between mr-5 ", className, isMenuOpen ? "block" : "hidden")}>
                {isMenuOpen && (
                    <button
                        className="absolute top-1 right-4 text-custom-text focus:outline-none lg:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg className="w-6 h-6 absolute right-8 top-4 z-[101] " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                )}

                <Menu setActive={setActive}>
                

                    
                    <Link href="/" className="hover:border-b hover:border-custom-text duration-200">Home</Link>
                    <Link href="/about" className="hover:border-b hover:border-custom-text duration-200">About</Link>
                    <Link href="/service" className="hover:border-b hover:border-custom-text duration-200">Service</Link>
                    <Link href="/contact" className="hover:border-b hover:border-custom-text duration-200">Contact</Link>
                    <Link href="/careers" className="hover:border-b hover:border-custom-text duration-200">Careers</Link>
                    <Link href="/refer&earn" className="hover:border-b hover:border-custom-text duration-200">
                    Refer&Earn</Link>
                    <Link href="/courses" className="hover:border-b hover:border-custom-text duration-200">
                    Courses</Link>
                    <MenuItem setActive={setActive} active={active} item="Company">
                        <div className="flex flex-col space-y-4 z-[100] text-sm">
                            {/* <HoveredLink href="/team">Team</HoveredLink> */}
                            <HoveredLink href="/client">Client</HoveredLink>
                            {/* <HoveredLink href="/careers">Careers</HoveredLink> */}
                            <HoveredLink href="/support">Support</HoveredLink>
                            <HoveredLink href="/partnership">Partnership</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>
            </div>
          
        </div>
    );
}

export default Navbar;
