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
            <NavLink href="/download">{`Télécharger l'application`}</NavLink>
            <NavLink href="/planner">{`Planifier un trajet`}</NavLink>
            <NavLink href="/rewards">{`Programme de fidélité`}</NavLink>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <NavLink href="/download" mobile>
            {`Télécharger l'application`}
          </NavLink>
          <NavLink href="/planner" mobile>
            {`Planifier un trajet`}
          </NavLink>
          <NavLink href="/rewards" mobile>
            {`Programme de fidélité`}
          </NavLink>
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
