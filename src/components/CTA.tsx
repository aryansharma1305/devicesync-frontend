import EarlyAccessForm from "@/components/EarlyAccessForm";

const demoUrl = "https://calendly.com/aryansharma1305/devicesync-demo";

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
        <div className="mt-6 flex justify-center">
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border-bright px-6 py-3 text-[14px] text-text-mid transition-colors hover:text-text-hi"
          >
            Book a Demo
          </a>
        </div>
        <p className="mt-4 text-[12px] text-text-lo">
          Free 14-day trial on all plans. No credit card required.
        </p>
      </div>
    </section>
  );
}
