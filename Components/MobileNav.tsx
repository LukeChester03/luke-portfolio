"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/sheet";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "CV", path: "/CV" },
  { name: "portfolio", path: "/portfolio" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [pendingPath, setPendingPath] = useState<string | null>(null);

  const handleNav = (path: string) => {
    if (path !== pathName) {
      setPendingPath(path);
      router.push(path);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (pendingPath && pendingPath === pathName) {
      setOpen(false);
      setPendingPath(null);
    }
  }, [pathName, pendingPath]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col items-center justify-start pt-24 gap-12 bg-white/80 backdrop-blur-md border-l border-borderGray/30 shadow-2xl">
        <Link href="/" onClick={() => handleNav("/")} className="text-3xl font-bold text-accent">
          Luke
        </Link>

        <nav className="flex flex-col items-center gap-8">
          {links.map((link, index) => {
            const isActive = link.path === pathName;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <button
                  onClick={() => handleNav(link.path)}
                  className={`capitalize text-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "text-accent font-semibold border-b-2 border-accent pb-1"
                      : "hover:text-accent"
                  }`}
                >
                  {isActive && <span className="mr-2">•</span>}
                  {link.name}
                </button>
              </motion.div>
            );
          })}
        </nav>

        <motion.div
          className="absolute bottom-8 text-sm text-textSecondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
        >
          © {new Date().getFullYear()} Luke Chester
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
