"use client";

import { useTheme } from "next-themes";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className="flex items-center gap-1">
            <button
                onClick={() => setTheme("dark")}
                className={`w-12.5 h-8 rounded-5 flex items-center justify-center ${theme === "dark" ? "bg-[#2c2c2c]" : "bg-neutral-200 opacity-50"
                    }`}
            >
                <img
                    src={"/assets/images/moon-icon.svg"}
                    alt="Dark mode"
                    className="w-[16.85px] h-[16.85px]"
                    style={{
                        filter: theme === "dark" ? "invert(1)" : "invert(0.2)",
                    }}
                />
            </button>
            <button
                onClick={() => setTheme("light")}
                className={`w-12.5 h-8 rounded-5 flex items-center justify-center ${theme === "dark" ? "bg-[#1B1B1B] opacity-50" : "bg-[#1b1b1b]"
                    }`}
            >
                <img
                    src={"/assets/images/sun-icon.svg"}
                    alt="Light mode"
                    className="w-[16.85px] h-[16.85px]"
                    style={{
                        filter: theme !== "dark"
                            ? "brightness(10)"
                            : theme === "dark"
                                ? "invert(0.28)"
                                : "",
                    }}
                />
            </button>
        </div>
    )
}