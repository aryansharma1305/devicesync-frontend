const metrics = [
  ["4.2 hrs", "Saved per device per week"],
  ["99.1%", "Driver install success rate"],
  ["3x", "Faster incident resolution"],
  ["< 10s", "From agent install to first score"],
];

export default function Results() {
  return (
    <section className="border-b border-border-dim bg-bg-base px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1080px]">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-lo">
            RESULTS
          </p>
          <h2 className="mt-3 text-[36px] font-bold leading-tight text-text-hi">
            Built on real outcomes.
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([number, label]) => (
            <article
              key={label}
              className="rounded-lg border border-border-dim bg-bg-surface p-8 text-center"
            >
              <div className="mb-2 font-mono text-4xl font-extrabold text-text-hi">
                {number}
              </div>
              <p className="text-[14px] text-text-mid">{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
