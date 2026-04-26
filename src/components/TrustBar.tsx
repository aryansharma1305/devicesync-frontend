export default function TrustBar() {
  return (
    <section className="border-y border-border-dim bg-bg-base px-5 py-10">
      <div className="mx-auto max-w-[1080px] text-center">
        <p className="mb-3 text-[12px] uppercase tracking-[0.08em] text-text-lo">
          PRIVATE BETA
        </p>
        <p className="mx-auto max-w-2xl text-[22px] font-semibold leading-[1.4] text-text-hi">
          Currently working with our first 10 IT teams.
        </p>
        <p className="mx-auto mt-3 max-w-xl text-[14px] leading-[1.7] text-text-mid">
          DeviceSync is accepting private beta requests from teams managing mixed
          macOS, Windows, and Linux fleets. Apply for early access below.
        </p>
      </div>
    </section>
  );
}
