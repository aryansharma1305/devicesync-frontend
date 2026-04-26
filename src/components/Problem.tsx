const problems = [
  {
    stat: "4.2 hrs",
    label: "Lost per device per week",
    text: "The average IT team member spends 4+ hours weekly resolving driver-related incidents.",
  },
  {
    stat: "34%",
    label: "Of hardware incidents are driver failures",
    text: "A third of all enterprise hardware support tickets trace back to driver compatibility problems.",
  },
  {
    stat: "0",
    label: "Visibility before deployment",
    text: "No tool tells you which devices will break before you push a Windows update to 300 machines.",
  },
  {
    stat: "3–5 days",
    label: "To resolve a driver-caused outage",
    text: "When a driver fails in production, resolution takes days, not hours.",
  },
  {
    stat: "₹12L+",
    label: "Annual cost for a 100-device org",
    text: "Downtime, support hours, and emergency fixes add up fast when there is no predictive layer.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="border-b border-border-dim bg-bg-base px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1080px]">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-lo">
            THE PROBLEM
          </p>
          <h2 className="mt-3 text-[36px] font-bold leading-tight text-text-hi">
            Driver management is broken.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.7] text-text-mid md:mb-16">
            Every IT team deals with it. A device fails after an update. Someone
            spends hours hunting drivers. The same problem happens again next
            quarter.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem.label}
              className="rounded-lg border border-border-dim bg-bg-surface p-6 transition-colors hover:border-border-bright"
            >
              <div className="font-mono text-3xl font-extrabold text-text-hi">
                {problem.stat}
              </div>
              <h3 className="mt-2 text-[14px] font-semibold text-text-hi">{problem.label}</h3>
              <p className="mt-1 text-[13px] leading-[1.7] text-text-mid">{problem.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
