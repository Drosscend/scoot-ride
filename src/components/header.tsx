"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-primary text-2xl font-bold">
            {`Scoot'Ride`}
          </Link>
          <div className="hidden space-x-4 md:flex">
            <NavLink href="#features">{`Caractéristiques`}</NavLink>
            <NavLink href="#about">{`À propos`}</NavLink>
            <NavLink href="#stats">{`Chiffres clés`}</NavLink>
            <NavLink href="#map">{`Carte`}</NavLink>
            <NavLink href="#faq">{`FAQ`}</NavLink>
            <NavLink href="#contact">{`Contact`}</NavLink>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <NavLink href="#features" mobile>{`Caractéristiques`}</NavLink>
          <NavLink href="#about" mobile>{`À propos`}</NavLink>
          <NavLink href="#stats" mobile>{`Chiffres clés`}</NavLink>
          <NavLink href="#map" mobile>{`Carte`}</NavLink>
          <NavLink href="#faq" mobile>{`FAQ`}</NavLink>
          <NavLink href="#contact" mobile>{`Contact`}</NavLink>
        </div>
      )}
    </header>
  );
}

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
};
function NavLink({ href, children, mobile = false }: NavLinkProps) {
  const baseClasses = "text-gray-700 hover:text-primary transition-colors duration-300";
  const mobileClasses = "block py-2 px-4 text-sm";
  const classes = mobile ? `${baseClasses} ${mobileClasses}` : baseClasses;

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
