import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./Button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* LoGo */}
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold">
            Luke <span className="text-blue-600">.</span>
          </h1>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
