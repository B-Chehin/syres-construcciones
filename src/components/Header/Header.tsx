"use client";

import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { Navbar } from "../Navbar";
import { useState } from "react";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="container mx-auto my-5">
      <div className="flex items-center justify-between px-5 md:px-0 ml-5">
        <Link href="/">
          <h1 className="font-medium hover:text-secondary hover:scale-110 transition-all duration-500">Syres Construciones</h1>
        </Link>

        <CiMenuFries
          className="block text-2xl md:hidden"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        ></CiMenuFries>

        <Navbar openMobileMenu={openMobileMenu} />

        <div className="flex items-center gap-2 md:gap-5 mr-5" >
          <Link
            href="tel:+5491154022693"
            className="flex items-center gap-4 cursor-pointer px-3 py-2 text-white bg-black hover:bg-secondary hover:scale-125 transition-all duration-500 "
          >
            <BsTelephone />
          </Link>

          <Link
            href="/ChatBot"
            className=" px-3 py-2 text-white bg-black hover:bg-secondary hover:scale-125 transition-all duration-500 "
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </div>
  );
}
