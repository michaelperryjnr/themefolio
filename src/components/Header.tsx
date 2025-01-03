"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icons } from "@/assets";
import { SchemeToggle } from "@/components";
import Link from "next/link";
import { FiGithub, FiTwitter, FiMail, FiHome } from "react-icons/fi";
import { TfiPencil } from "react-icons/tfi";
import { BsJournalText, BsBell } from "react-icons/bs";
import { FaSignature } from "react-icons/fa";

interface NavLinkProps {
  name: string;
  icon: React.ReactNode;
  href: string | string[];
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  icon,
  href,
  isActive = false,
  name,
}) => {
  const primaryHref = Array.isArray(href) ? href[0] : href;
  return (
    <Link
      href={primaryHref}
      className={`flex flex-row items-center justify-center gap-1 text-xs sm:text-lg sm:gap-2 font-medium ${
        isActive
          ? "bg-glow-200 text-glow-200 border-glow-200 dark:text-white border-[1.3px] dark:bg-slate-400 dark:border-slate-400 border-opacity-25  bg-opacity-25 py-1 px-2 rounded-xl dark:bg-opacity-[0.55]"
          : "dark:text-slate-300 text-grey-200 "
      }`}
    >
      {isActive && icon}
      {name}
    </Link>
  );
};

const Links: Array<NavLinkProps> = [
  {
    name: "Home",
    icon: <FiHome />,
    href: "/",
  },
  {
    name: "Blog",
    icon: <BsJournalText />,
    href: ["/blog", "/posts", "/archive/posts"],
  },
  {
    name: "Thoughts",
    icon: <TfiPencil />,
    href: ["/thoughts"],
  },
  {
    name: "Asore",
    icon: <BsBell />,
    href: ["/asore", "/archive/devotionals"],
  },
  {
    name: "Guestbook",
    icon: <FaSignature />,
    href: ["/guestbook"],
  },
];

const Header = () => {
  const pathname = usePathname();
  const isLinkActive = (href: string | string[]): boolean => {
    if (typeof href === "string") {
      return href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);
    }

    return href.some((path) => {
      if (pathname === path) return true;
      if (pathname.startsWith(`${path}/`)) {
        const isExactSubpath = href.includes(path) && pathname.startsWith(path);
        return isExactSubpath;
      }
      return false;
    });
  };

  return (
    <header className="flex flex-col gap-6 sm:gap-8">
      <div className="flex flex-row items-center justify-between">
        <Link href="/">
          <Image
            src={Icons.coloredLogo}
            alt="Colored logo"
            className="w-5 h-5 sm:w-10 sm:h-10"
          />
        </Link>
        <div className="flex flex-row items-center justify-center gap-3 border-[1.6px] border-solid dark:bg-ground-400 dark:border-ground-500 border-ground-700 bg-ground-700 border-opacity-20 rounded-xl p-1 dark:bg-opacity-40 bg-opacity-20 sm:p-3 sm:rounded-2xl">
          <Link href="mailto:admin@theniitettey.live" target="blank">
            <FiMail size={15} className="text-white " />
          </Link>
          <Link href="https://x.com/theniitettey" target="blank">
            <FiTwitter size={15} className="text-white" />
          </Link>
          <Link href="https://github.com/michaelperryjnr" target="blank">
            <FiGithub size={15} className="text-white" />
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <nav className="flex flex-row items-center justify-start gap-2 sm:gap-4">
          {Links.map((link, index) => (
            <NavLink
              key={index}
              name={link.name}
              icon={link.icon}
              href={link.href}
              isActive={isLinkActive(link.href)}
            />
          ))}
        </nav>
        <SchemeToggle />
      </div>
    </header>
  );
};

export default Header;
