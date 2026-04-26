import { Check, X } from "lucide-react";

const withoutItems = [
  "Discover failures after deployment",
  "Manual driver hunting per device",
  "No history of what worked before",
  "Blame game between IT and vendors",
  "Same failures repeat every cycle",
];

const withItems = [
  "Predict failures before they happen",
  "AI-recommended drivers per device",
  "ML model trained on your fleet history",
  "Full audit trail for every install",
  "Every outcome makes predictions better",
];

export default function Solution() {
  return (
    <section className="border-b border-border-dim bg-bg-base px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1080px]">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-lo">
            THE SOLUTION
          </p>
          <h2 className="mt-3 text-[36px] font-bold leading-tight text-text-hi">
            Know before it breaks.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-text-mid">
            DeviceSync gives every device in your fleet a live compatibility score,
            updated by real install outcomes, served in milliseconds.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-border-dim bg-bg-surface p-8">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.08em] text-danger">
              WITHOUT DEVICESYNC
            </p>
            <h3 className="mb-5 text-[20px] font-semibold text-text-hi">Before DeviceSync</h3>
            <ul>
              {withoutItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-border-dim py-3 text-[14px] text-text-mid last:border-0"
                >
                  <X className="mt-1 h-3.5 w-3.5 shrink-0 text-danger" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-accent-dim border-t-2 border-t-accent bg-bg-surface p-8">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
              WITH DEVICESYNC
            </p>
            <h3 className="mb-5 text-[20px] font-semibold text-text-hi">With DeviceSync</h3>
            <ul>
              {withItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-border-dim py-3 text-[14px] text-text-hi last:border-0"
                >
                  <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
