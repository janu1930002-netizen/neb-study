
"use client";

import Link from "next/link";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function Header() {
  return (
    <Navbar
      fluid
      rounded={false}
      className="w-full border-b border-blue-400/20 bg-gradient-to-r from-[#102B68] via-[#1746A2] to-[#123A83] px-4 py-3 shadow-xl sm:px-6"
    >
      {/* Logo and Website Name */}
      <NavbarBrand as={Link} href="/" className="gap-0">
        <div className="h-20 w-20 overflow-hidden sm:h-24 sm:w-24">
          <img
            src="/_logo.svg"
            className="h-full w-full object-cover"
            alt="Website Logo"
          />
        </div>

        <span className="self-center whitespace-nowrap text-lg font-extrabold tracking-wide text-white sm:text-2xl md:text-3xl">
          NEB STUDY NOTES
        </span>
      </NavbarBrand>

      {/* Mobile Menu */}
      <NavbarToggle className="rounded-lg border border-white/20 text-white hover:bg-white/10 focus:ring-2 focus:ring-blue-300" />

      {/* Navigation Links */}
      <NavbarCollapse className="items-center md:gap-2">
        <NavbarLink
          as={Link}
          href="/"
          className="rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:text-blue-200 md:text-base"
        >
          Home
        </NavbarLink>

        <NavbarLink
          as={Link}
          href="/share"
          className="rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:text-blue-200 md:text-base"
        >
          Share
        </NavbarLink>

        <NavbarLink
          as={Link}
          href="/about"
          className="rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:text-blue-200 md:text-base"
        >
          Resource
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
