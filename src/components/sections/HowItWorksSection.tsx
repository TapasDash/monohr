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
    <section className="bg-[#0F172A] px-4 py-20 text-white lg:px-11.75 lg:py-28">
      <div className="mx-auto w-full max-w-323">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[14px] font-medium leading-6 tracking-wide text-white uppercase">
            Process
          </span>
          <h2 className="mt-8 text-[36px] font-semibold leading-tight tracking-tight lg:text-[48px] max-w-3xl">
            Efficient process to connect businesses with the best talent.
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-slate-400 max-w-2xl">
            We work closely with you to understand your unique needs, culture, and hiring goals.
            Using this insight, we tailor a recruitment strategy that targets the right candidates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {processSteps.map((step) => (
            <article key={step.id} className="group relative space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10 transition-all hover:bg-white/[0.08] hover:border-white/20">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[20px] font-bold text-white transition-colors group-hover:bg-white group-hover:text-[#0F172A]">
                {step.id}
              </span>
              
              <div className="space-y-4">
                <h3 className="text-[22px] font-bold leading-tight tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                  {step.description}
                </p>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/30 transition-all" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
