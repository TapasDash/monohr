import Image from "next/image";

const HeroSection = () => {
    return (
        <section
            className="relative px-4 pb-16 lg:px-11.75 lg:pb-18.5"
            aria-labelledby="hero-heading"
        >
            <div className="mx-auto flex w-full max-w-230 flex-col items-center text-center">
                <div className="mb-8 inline-flex flex-wrap items-center justify-center overflow-hidden rounded-full border border-border bg-background shadow-[0_1px_0_rgba(0,0,0,0.04)] lg:mb-10 divide-y sm:divide-x divide-border">
                    <span className=" px-3.5 py-1.5 text-[16px] leading-6 text-foreground">
                        Avg time-to-hire: 48h
                    </span>
                    <span className=" px-3.5 py-1.5 text-[16px] leading-6 text-foreground">
                        Vetted talent: 1.5M+
                    </span>
                    <span className="px-3.5 py-1.5 text-[16px] leading-6 text-foreground">
                        Open roles: 12.4k
                    </span>
                </div>

                <h1
                    id="hero-heading"
                    className="max-w-[815px] text-[42px] font-[450] leading-[120%] tracking-[-0.05%] text-foreground sm:text-[52px] lg:text-[64px]"
                >
                    Ship Faster. Hire the Top 1% of Engineering Talent.
                </h1>

                <p className="mt-6 max-w-[427px] text-[14px] leading-[1.15] tracking-[-0.01em] text-muted sm:text-[16px] lg:mt-7 lg:text-[20px]">
                    Payroll, compliance, benefits, and everything you need to hire remotely with
                    confidence.
                </p>

                <button
                    type="button"
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-[25px] py-[15px] text-[18px] font-medium leading-none text-background transition-all hover:scale-105 active:scale-95 lg:mt-9"
                >
                    Deploy a Team

                    <Image
                        src="/assets/icons/emoji.svg"
                        alt="happy"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </section>
    )
}

export default HeroSection;
