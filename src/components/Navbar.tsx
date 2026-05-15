"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

const NAVIGATION_ITEMS = [
    { href: "/jobs", label: "Jobs" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact Us" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="relative z-50">
            {/* Navigation bar container */}
            <div className="fixed left-1/2 transform -translate-x-1/2 top-9 z-50 w-full lg:max-w-187.5 xl:max-w-217.75 px-4 lg:px-0 ">
                <nav
                    className={`flex items-center justify-between px-6 lg:px-7 lg:pr-9 py-3 lg:py-4.5 rounded-33 backdrop-blur-[28.2px] rounded-[33px] bg-[#FFFFFF] shadow `}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/assets/images/mono-light.svg"
                            alt="Mono"
                            width={49}
                            height={32}
                        />
                        <span className="text-[24px] font-[550] text-foreground leading-[120%] tracking-[-0.05%]">Mono HR</span>
                    </Link>

                    {/* Desktop Navigation - Hidden on mobile */}
                    <div className="hidden lg:flex items-center gap-8.75">
                        {NAVIGATION_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="font-medium text-[18px] hover:underline leading-[125%] tracking-[-0.05%] text-foreground">
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Theme Toggle - Hidden on mobile */}


                    <div className="hidden lg:flex items-center ml-7 absolute left-full ">
                        <ThemeToggle />
                    </div>

                    {/* Mobile Hamburger Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden flex items-center justify-center w-8 h-8 filter-[brightness(200%)] filter-200"
                        aria-label="Toggle menu"
                    >
                        <svg
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 32 32"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`size-7 text-black transition-transform duration-400 ease-in-out ${isMenuOpen ? "-rotate-45" : "rotate-0"
                                }`}
                        >
                            <path
                                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                                className="transition-all duration-400 ease-in-out "
                                style={{
                                    strokeDasharray: isMenuOpen ? "20 300" : "12 63",
                                    strokeDashoffset: isMenuOpen ? "-32.42" : "0",
                                }}
                            />
                            <path d="M7 16 27 16" />
                        </svg>
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}

            {isMenuOpen && (
                <div className="fixed inset-0 top-0 z-40 lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute bg-black"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    {/* Menu Content */}
                    <div className="relative z-50 flex flex-col items-start justify-center bg-black p-6 pt-45.5">
                        {/* 182px = 36 from the top + 68 header height + 78 after header */}
                        {/* Navigation Links */}
                        <div className="flex flex-col items-start gap-1.5 md:gap-5 mb-6">
                            {NAVIGATION_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="font-aspekta font-semibold md:font-medium text-16 md:text-24 bg-neutral-200 rounded px-4 py-2 text-black hover:bg-neutral-100 hover:shadow active:shadow-none transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        {/* Theme Toggle */}
                        <ThemeToggle />
                    </div>
                </div>
            )}

        </header>
    )
}

export default Navbar;