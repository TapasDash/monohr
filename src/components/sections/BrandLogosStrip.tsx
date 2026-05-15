import Image from "next/image";
import Link from "next/link";


interface LogoItem {
    image: string;
    alt: string;
    tooltip?: string;
    url?: string;
}

const logos: LogoItem[] = [
    {
        image: "/assets/partner_logos/quess.png",
        alt: "Quess Logo",
    },
    {
        image: "/assets/partner_logos/artech.png",
        alt: "Maple Drive Logo",
    },
    {
        image: "/assets/partner_logos/otto.png",
        alt: "Otto Logo",
    },
    {
        image: "/assets/partner_logos/simplified.png",
        alt: "PrepInsta Logo",
    },
    {
        image: "/assets/partner_logos/livspace.png",
        alt: "ProjectHero Logo",
    },
    {
        image: "/assets/partner_logos/maple-drive.png",
        alt: "Roomi Logo",
    },
];

const extendedLogos = [...logos, ...logos];


const BrandLogosStrip = () => {
    return (
        <div className="relative w-full my-37 overflow-hidden max-w-323 justify-center mx-auto flex items-center">
            <div className="flex items-center animate-scroll ">
                {extendedLogos.map((logo, index) => {
                    const logoImage = (
                        <Image
                            src={logo.image}
                            alt={logo.alt}
                            width="157"
                            height="40"
                            style={{ height: 'auto' }}
                            className={`max-w-full max-h-full`}
                            title={logo.tooltip}
                        />
                    );

                    return (
                        <div
                            key={index}
                            className={`group shrink-0 flex items-center justify-center p-8 mx-[20.5px] grayscale hover:grayscale-0 transition-all duration-200 ease-in-out`}
                        >
                            {logo.url ? (
                                <Link
                                    href={logo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-center w-full h-full`}
                                    title={logo.tooltip}
                                >
                                    {logoImage}
                                </Link>
                            ) : (
                                logoImage
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default BrandLogosStrip;