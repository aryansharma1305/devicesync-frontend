import { ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Install the agent",
    description:
      "Run the DeviceSync binary on any machine. It scans every connected device, creates a stable machine ID, and registers with your fleet in under 10 seconds.",
  },
  {
    number: "02",
    title: "Get instant risk scores",
    description:
      "The API checks Redis cache, then your compatibility database, then the ML model. Every device gets a score before any driver is touched.",
  },
  {
    number: "03",
    title: "Deploy with confidence",
    description:
      "Act on AI recommendations. Every install outcome feeds back into the model. Predictions improve with every device added to your fleet.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border-dim bg-bg-base px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1080px]">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-lo">
            HOW IT WORKS
          </p>
          <h2 className="mt-3 text-[36px] font-bold leading-tight text-text-hi">
            Three steps to full fleet visibility.
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-6 lg:flex-row lg:items-stretch">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-1 items-center gap-6">
              <article className="flex-1 p-6">
                <div className="mb-3 font-mono text-[12px] font-semibold text-text-lo">
                  {step.number}
                </div>
                <h3 className="mb-2 text-[16px] font-semibold text-text-hi">{step.title}</h3>
                <p className="text-[14px] leading-[1.7] text-text-mid">{step.description}</p>
              </article>
              {index < steps.length - 1 ? (
                <div className="hidden w-20 items-center lg:flex">
                  <div className="relative w-full border-t border-border-dim">
                    <ChevronRight className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 bg-bg-base text-text-lo" />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
