export default function TrustBar() {
  const stats = [
    ["500+", "devices"],
    ["12", "orgs"],
    ["99.1%", "install success rate"],
  ];

  return (
    <section className="border-y border-border-dim bg-bg-base px-5 py-8">
      <div className="mx-auto max-w-[1080px] text-center">
        <p className="mb-4 text-[12px] uppercase tracking-[0.08em] text-text-lo">
          TRUSTED BY IT TEAMS MANAGING
        </p>
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
          {stats.map(([value, label]) => (
            <div key={label}>
              <div className="font-mono text-[20px] font-semibold text-text-hi">{value}</div>
              <div className="text-[12px] text-text-lo">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
