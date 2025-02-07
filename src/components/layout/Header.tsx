"use client";

import Link from "next/link";

// import { Button } from "../ui/Button";

import Image from "next/image";

import { NAV_ITEMS, ROUTES } from "@/constants/routes";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { useState, useEffect } from "react";

import { MobileNav } from './MobileNav';



export default function Header() {

  const pathname = usePathname();

  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const [scrolled, setScrolled] = useState(false);



  // Handle scroll

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

    };



    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);



  const isActive = (path: string) => {

    if (path === ROUTES.HOME) return pathname === path;

    return pathname!.startsWith(path);

  };



//   const handleGetApp = () => {

//     window.location.href = '/download';

//   };



  return (

    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${

        // Change header Color when scroll down Matbe need it later 

    //   scrolled ? 'bg-purple/80 backdrop-blur-md' :

       'bg-[var(--background)]'

    }`}>

      {/* Subtle border */}

      <div className={`absolute inset-x-0 bottom-0 h-[1px] transition-opacity duration-300 ${

        scrolled ? 'bg-white/[0.08]' : 'bg-white/[0.04]'

      }`} />



      {/* Content shadow */}

      <div className={`absolute inset-0 transition-shadow duration-300 -z-10 ${

        scrolled ? 'shadow-[0_2px_20px_-3px_rgba(0,0,0,0.5)]' : 'shadow-none'

      }`} />



      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex items-center justify-between">

          <Link 

            href={ROUTES.HOME}

            className="flex items-center gap-2 relative group"

          >

            <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />

            <Image

              src="/xef.png"

              alt="Xefro Mirror Logo"

              width={60}

              height={60}

              className="object-contain relative z-10"

            />

          </Link>



          <Link href={ROUTES.HOME} className="text-2xl font-bold gradient-text">

            Xefro Mirror

          </Link>

          

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex flex-1 justify-center max-w-2xl mx-auto px-4">

            <div className="flex items-center gap-8 relative">

              {/* Grey line underneath */}

              {/* <div className="absolute -bottom-4 w-full h-[1px] bg-white/10"></div> */}

              

              {NAV_ITEMS.map((item) => (

                <div

                  key={item.path}

                  onMouseEnter={() => setHoveredPath(item.path)}

                  onMouseLeave={() => setHoveredPath(null)}

                  className="relative"

                >

                  <Link 

                    href={item.path}

                    className="relative group py-2"

                  >

                    <span className={`text-sm font-medium transition-all duration-300

                      ${isActive(item.path) 

                        ? 'text-white' 

                        : 'text-[var(--text-secondary)] hover:text-white/90'}`}

                    >

                      {item.label}

                    </span>

                    

                    {/* Active/Hover indicator */}

                    <div className={`absolute -bottom-4 left-0 w-full h-[2px] transition-all duration-300

                      bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)]

                      opacity-0 scale-x-0 origin-center group-hover:opacity-100 group-hover:scale-x-100

                      ${isActive(item.path) ? '!opacity-100 !scale-x-100' : ''}`}

                    />

                  </Link>



                  {/* Dropdown with improved styling */}

                  {item.subRoutes && hoveredPath === item.path && (

                    <motion.div

                      initial={{ opacity: 0, y: 10 }}

                      animate={{ opacity: 1, y: 0 }}

                      className="absolute top-full left-0 mt-2 py-2 px-4 

                               bg-[var(--background)]/95 backdrop-blur-md rounded-lg 

                               shadow-[0_0_25px_-5px_rgba(0,0,0,0.3)]

                               border border-white/[0.08]

                               min-w-[200px]"

                    >

                      {item.subRoutes.map((subRoute) => (

                        <Link

                          key={subRoute.path}

                          href={subRoute.path}

                          className={`block py-2 text-sm transition-all duration-300

                            ${isActive(subRoute.path)

                              ? 'text-white'

                              : 'text-[var(--text-secondary)] hover:text-white hover:pl-2'}`}

                        >

                          {subRoute.label}

                        </Link>

                      ))}

                    </motion.div>

                  )}

                </div>

              ))}

            </div>

          </nav>

          

          {/* Mobile Navigation */}

          <MobileNav />

          

          {/* <Button 

            variant="primary"

            onClick={handleGetApp}

          >

            Get the app

          </Button> */}

        </div>

      </div>

    </header>

  );

} 
