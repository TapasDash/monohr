const processSteps = [
  {
    id: '1',
    title: 'AI-Driven Triangulation',
    description:
      'We begin by working closely with you to understand your business, culture, and specific hiring requirements.',
  },
  {
    id: '2',
    title: 'Technical Validation',
    description:
      'Based on your unique needs, we craft a personalized recruitment strategy designed to attract the best talent.',
  },
  {
    id: '3',
    title: 'Seamless Deployment',
    description:
      "Using our platform's tools, we match you with top candidates and integrate with your HR systems.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-[#3D4CC2] px-4 py-14 text-white lg:px-11.75 lg:py-18">
      <div className="mx-auto w-full max-w-1440 space-y-6">
        <span className="inline-flex rounded-full bg-white px-3.5 py-1.5 align-middle text-[16px] leading-6 tracking-[-0.56px] text-[#00235C]">
          How it works
        </span>
        <div className="max-w-[755px] space-y-5">
          <h2 className="text-[40px] leading-[130%] tracking-[-0.05%] lg:text-[48px]">
            Efficient process to connect businesses with the best talent.
          </h2>

          <p className="text-[20px] leading-[125%] tracking-[-0.05%]">
            We work closely with you to understand your unique needs, culture,
            and hiring goals. Using this insight, we tailor a recruitment
            strategy that targets the right candidates.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-9 lg:grid-cols-3">
          {processSteps.map(step => (
            <article key={step.id} className="space-y-4">
              <span className="inline-flex h-7.5 min-w-7.5 items-center justify-center rounded-md bg-[#FFFFFB] px-3 py-1 text-[16px] leading-[135%] tracking-[-0.05%] text-[#1F514C]">
                {step.id}
              </span>
              <div className="h-px w-full bg-[#AEDA9433]">
                <div className="h-full w-2/5 bg-[#D0F255]" />
              </div>
              <h3 className="text-[20px] leading-[135%] font-[550] tracking-[-0.05%]">
                {step.title}
              </h3>
              <p className="text-[16px] leading-[135%] tracking-[-0.05%]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
