"use client";

import Image from "next/image";
import Link from "next/link";
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
                    className={`flex items-center justify-between px-6 lg:px-7 lg:pr-9 py-3 lg:py-4.5 rounded-[33px] backdrop-blur-[28.2px] bg-background/70 border border-border/40 shadow-sm transition-colors duration-300`}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/assets/images/mono-light.svg"
                            alt="Mono"
                            width={40}
                            height={28}
                            style={{ height: 'auto' }}
                        />
                        <span className="text-[20px] font-[550] text-foreground leading-[120%] tracking-tight">Mono HR</span>
                    </Link>

                    {/* Desktop Navigation - Hidden on mobile */}
                    <div className="hidden lg:flex items-center gap-8">
                        {NAVIGATION_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="font-medium text-[16px] hover:text-foreground/70 transition-colors leading-[125%] tracking-tight text-foreground">
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Mobile Hamburger Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden flex items-center justify-center w-8 h-8 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 32 32"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`size-7 text-foreground transition-transform duration-400 ease-in-out ${isMenuOpen ? "-rotate-45" : "rotate-0"
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
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    {/* Backdrop with blur */}
                    <div
                        className="absolute inset-0 bg-background/80 backdrop-blur-xl transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    {/* Menu Content */}
                    <div className="relative z-50 flex flex-col items-center justify-center h-full p-6 space-y-8">
                        {NAVIGATION_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-3xl font-bold text-foreground hover:text-muted transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar;