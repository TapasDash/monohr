import Image from "next/image"
import Link from "next/link"
import { ArrowDownCircle, MessageCircle, X } from "lucide-react"

const servicesLinks = ["EOR India", "Contractor Management", "Contractor of Record"]
const companyLinks = ["About Us", "Our vision", "Contact us"]
const supportLinks = ["Help Center", "Get Support"]

export default function Footer() {
  return (
    <footer className="mt-0">
      <section className="bg-[#3649C7] p-8 lg:p-16">
        <div className="mx-auto grid w-full max-w-323 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="flex items-start">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/assets/images/mono-light.svg"
                alt="Mono HR"
                width={100}
                height={100}
                className="brightness-0 invert w-13 h-8.5"
              />
              <span className="leading-[120%] tracking-[-0.05%] text-[#FFFFFF] text-[30px] font-[550]">
                Mono HR
              </span>
            </Link>
          </div>

          <div className="max-w-[568px] space-y-11">
            <div className="flex flex-col gap-5">
              <h2 className="text-[48px] leading-[130%] font-[450] tracking-[-0.05%] text-[#FFFFFF] ">
                Take the first step toward building your dream team.
              </h2>
              <p className="text-[20px] leading-[125%] tracking-[-0.05%] text-[#FFFFFF] ">
                Start using Linkrow today to connect with top talent faster and more efficiently!
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-full bg-[#FFFFFF] px-[25px] py-[15px] text-[18px] font-medium leading-[130%] tracking-[0.05%] text-[#001B1F]"
              >
                Deploy a Team
                <Image
                  src="/assets/icons/emoji.svg"
                  alt="happy"
                  width={20}
                  height={20}
                  className="invert"
                />
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-full bg-transparent border border-[#FFFFFF] px-[25px] py-[15px] text-[18px] font-medium leading-[130%] tracking-[0.05%] text-[#FFFFFF]"
              >
                Explore jobs
                <MessageCircle
                  size={20}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 py-12 lg:px-26 lg:py-14  mx-auto">
        <div className="mx-auto w-full max-w-323">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_0.9fr_0.9fr_0.7fr] lg:gap-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <Link href="/" className="inline-flex items-center gap-3">
                  <Image
                    src="/assets/images/mono-light.svg"
                    alt="Mono HR"
                    width={100}
                    height={100}
                    className="w-[43px] h-7"
                  />
                  <span className="leading-[120%] tracking-[-0.05%] text-[#000000] text-[24px] font-[550]">
                    Mono HR
                  </span>
                </Link>
              </div>

              <p className=" text-[16px] leading-[135%] tracking-[-0.05%] text-[#0E0500BF]">
                MonoHR is India's leading EOR platform, helping global companies hire and manage
                teams in India with 48-hour setup, 100% compliance, and 40% cost savings.
              </p>

              <div className="flex items-center gap-3">
                <Link href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70 p-2">
                  <Image
                    src="/assets/icons/instagram.svg"
                    alt="instagram"
                    width={100}
                    height={100}
                    className="w-6 h-6"
                  />
                </Link>
                <Link href="#" aria-label="X" className="transition-opacity hover:opacity-70 p-2">
                  <Image
                    src="/assets/icons/x.svg"
                    alt="x"
                    width={100}
                    height={100}
                    className="w-6 h-6"
                  />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="transition-opacity hover:opacity-70 p-2" >
                  <Image
                    src="/assets/icons/linkedin.svg"
                    alt="linkedin"
                    width={100}
                    height={100}
                    className="w-6 h-6"
                  />
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[20px] font-semibold leading-[22.75px] align-middle text-foreground">
                Services
              </h3>
              <ul className="space-y-3.5">
                {servicesLinks.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[16px] leading-5.5 text-[#0E0500BF]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-[20px] font-semibold leading-[22.75px] align-middle text-foreground">
                Company
              </h3>
              <ul className="space-y-3.5">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[16px] leading-5.5 text-[#0E0500BF]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-[20px] font-semibold leading-[22.75px] align-middle text-foreground">
                Support
              </h3>
              <ul className="space-y-3.5">
                {supportLinks.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[16px] leading-5.5 text-[#0E0500BF]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#00000029] mt-20">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between pt-5">
              <p className="text-[14px] leading-5 align-middle text-[#00000099] divide-x divide-[#4A5565]">
                <span className="pr-2">{"\u00A9"} 2026 MonoHR. All rights reserved.</span>
                <span className="inline-block pl-2">Built with
                  <span className="text-[#000000]"> ❤️ </span>
                  in India  •  Powered by
                  <Link href="https://buildmono.com/" className="text-[#155DFC]"> Mono </Link></span>
              </p>

              <div className="flex flex-wrap items-center gap-5 lg:gap-8">
                <Link href="#" className="text-[14px] leading-none text-[#666666]">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-[14px] leading-none text-[#666666]">
                  Terms of Service
                </Link>
                <Link href="#" className="text-[14px] leading-none text-[#666666] ">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
