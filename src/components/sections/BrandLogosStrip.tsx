import Image from 'next/image';
import Link from 'next/link';

interface LogoItem {
  image: string;
  alt: string;
  tooltip?: string;
  url?: string;
}

const logos: LogoItem[] = [
  {
    image: '/assets/partner_logos/quess.png',
    alt: 'Quess Logo',
  },
  {
    image: '/assets/partner_logos/artech.png',
    alt: 'Maple Drive Logo',
  },
  {
    image: '/assets/partner_logos/otto.png',
    alt: 'Otto Logo',
  },
  {
    image: '/assets/partner_logos/simplified.png',
    alt: 'PrepInsta Logo',
  },
  {
    image: '/assets/partner_logos/livspace.png',
    alt: 'ProjectHero Logo',
  },
  {
    image: '/assets/partner_logos/maple-drive.png',
    alt: 'Roomi Logo',
  },
];

const extendedLogos = [...logos, ...logos];

const BrandLogosStrip = () => {
  return (
    <div className="relative mx-auto my-37 flex w-full max-w-323 items-center justify-center overflow-hidden">
      <div className="animate-scroll flex items-center">
        {extendedLogos.map((logo, index) => {
          const logoImage = (
            <Image
              src={logo.image}
              alt={logo.alt}
              width="157"
              height="40"
              className={`max-h-full max-w-full`}
              title={logo.tooltip}
            />
          );

          return (
            <div
              key={index}
              className={`group mx-[20.5px] flex shrink-0 items-center justify-center p-8 grayscale transition-all duration-200 ease-in-out hover:grayscale-0`}
            >
              {logo.url ? (
                <Link
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-full w-full items-center justify-center`}
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
  );
};

export default BrandLogosStrip;
