export default function ContactPage() {
    return (
        <section className="px-2 py-16 lg:px-40 lg:py-20 mt-20">
            <div className="mx-auto w-full max-w-280">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
                    <div className="px-4 lg:px-0 space-y-8">
                        <h1 className="text-[32px] leading-[120%] tracking-[-0.05%] text-foreground md:text-[64px]">
                            Contact Us
                        </h1>

                        <p className="text-[18px] leading-[125%]  tracking-[-0.05%] text-foreground/65 md:text-[20px]">
                            At MonoHR, we&apos;re always here to help. Whether you have questions about hiring in
                            India, compliance, or onboarding, our team is ready to assist you.
                        </p>
                        <div className="px-4 pt-10 lg:px-0 lg:pt-12 hidden lg:block">
                            <div className="space-y-8 leading-[160%] tracking-[-0.05%] text-[18px]">
                                <div>
                                    <p className="text-[#404040]">Phone:</p>
                                    <a href="tel:+919999561145" className="mt-1 inline-block text-[#3649C7]">
                                        +91 99995 61145
                                    </a>
                                </div>

                                <div>
                                    <p className="text-[#4D4D4D]">Email:</p>
                                    <a href="mailto:ashok@buildmonohr.com" className="mt-1 inline-block text-[#2F47D2]">
                                        ashok@buildmonohr.com
                                    </a>
                                </div>

                                <div>
                                    <p className="text-[#4D4D4D]">Address:</p>
                                    <p className="mt-1 text-[#2F47D2]">
                                        440 N Barranca Ave #7914, Covina, CA
                                        <br />
                                        91723, USA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#FFFFFF] px-4 py-6 lg:p-8 ">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="fullName" className="text-[20px] leading-5 text-[#1C1C1C]">
                                    Full Name
                                </label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    placeholder="enter your business name"
                                    className="mt-2 h-10 w-full rounded-sm border border-[#D1D5DB] bg-white px-3 text-[15px] text-[#151515] placeholder:text-[#A1A1AA] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="workEmail" className="text-[20px] leading-5 text-[#1C1C1C]">
                                    Work Email*
                                </label>
                                <input
                                    id="workEmail"
                                    name="workEmail"
                                    type="email"
                                    placeholder="e.g john.doe@company.com"
                                    className="mt-2 h-10 w-full rounded-sm border border-[#D1D5DB] bg-white px-3 text-[15px] text-[#151515] placeholder:text-[#A1A1AA] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="text-[20px] leading-5 text-[#1C1C1C]">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    className="mt-2 h-10 w-full rounded-sm border border-[#D1D5DB] bg-white px-3 text-[15px] text-[#151515] placeholder:text-[#A1A1AA] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="text-[20px] leading-5 text-[#1C1C1C]">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Type your message..."
                                    rows={5}
                                    className="mt-2 w-full resize-none rounded-sm border border-[#D1D5DB] bg-white px-3 py-2 text-[15px] text-[#151515] placeholder:text-[#A1A1AA] focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-1 inline-flex h-10 w-full items-center justify-center rounded-sm bg-[#3649C7] text-[16px] leading-5 text-white hover:bg-[#3442B2]"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                <div className="px-4 pt-10 lg:px-0 lg:pt-12 lg:hidden block">
                    <div className="space-y-8 leading-[160%] tracking-[-0.05%] text-[18px]">
                        <div>
                            <p className="text-[#404040]">Phone:</p>
                            <a href="tel:+919999561145" className="mt-1 inline-block text-[#3649C7]">
                                +91 99995 61145
                            </a>
                        </div>

                        <div>
                            <p className="text-[#4D4D4D]">Email:</p>
                            <a href="mailto:ashok@buildmonohr.com" className="mt-1 inline-block text-[#2F47D2]">
                                ashok@buildmonohr.com
                            </a>
                        </div>

                        <div>
                            <p className="text-[#4D4D4D]">Address:</p>
                            <p className="mt-1 text-[#2F47D2]">
                                440 N Barranca Ave #7914, Covina, CA
                                <br />
                                91723, USA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
