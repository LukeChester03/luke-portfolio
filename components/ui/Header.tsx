import React from "react";
import Link from "next/link";

//Components
import Nav from "./Nav";
import { Button } from "./button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* LoGo */}
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold">
            Luke <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
