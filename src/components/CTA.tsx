import EarlyAccessForm from "@/components/EarlyAccessForm";

export default function CTA() {
  return (
    <section id="cta" className="border-b border-border-dim bg-bg-surface px-5 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-[36px] font-bold leading-tight text-text-hi">
          Stop finding out after it breaks.
        </h2>
        <p className="mb-8 mt-4 text-[15px] leading-[1.7] text-text-mid">
          Join IT teams already using DeviceSync to predict compatibility failures
          before they reach production.
        </p>
        <EarlyAccessForm />
        <p className="mt-4 text-[12px] text-text-lo">
          Free 14-day trial on all plans. No credit card required.
        </p>
      </div>
    </section>
  );
}
