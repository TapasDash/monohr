const processSteps = [
  {
    id: "01",
    title: "AI-Driven Triangulation",
    description:
      "We begin by working closely with you to understand your business, culture, and specific hiring requirements.",
  },
  {
    id: "02",
    title: "Technical Validation",
    description:
      "Based on your unique needs, we craft a personalized recruitment strategy designed to attract the best talent.",
  },
  {
    id: "03",
    title: "Seamless Deployment",
    description:
      "Using our platform's tools, we match you with top candidates and integrate with your HR systems.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-[#3D4CC2] px-4 py-24 text-white lg:px-11.75 lg:py-28">
      <div className="mx-auto w-full max-w-323">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-[14px] font-bold leading-6 tracking-wide text-[#00235C] uppercase">
            Process
          </span>
          <h2 className="mt-8 text-[36px] font-semibold leading-tight tracking-tight lg:text-[48px] max-w-3xl">
            Efficient process to connect businesses with the best talent.
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-white/80 max-w-2xl">
            We work closely with you to understand your unique needs, culture, and hiring goals.
            Using this insight, we tailor a recruitment strategy that targets the right candidates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {processSteps.map((step) => (
            <article key={step.id} className="group relative space-y-6 p-8 rounded-2xl bg-white/10 border border-white/20 transition-all hover:bg-white/20 hover:border-white/40">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFFFFB] text-[20px] font-bold text-[#1F514C] transition-transform group-hover:scale-110">
                {step.id}
              </span>
              
              <div className="space-y-4">
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-2/5 bg-[#D0F255] transition-all duration-1000 group-hover:w-full" />
                </div>
                <h3 className="text-[22px] font-bold leading-tight tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-white/70 group-hover:text-white/90 transition-colors">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
