import { Check } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    price: "₹499",
    suffix: "/device/month",
    tagline: "For small IT teams.",
    border: "border-border-dim",
    label: "text-text-lo",
    button: "border border-border-bright bg-transparent text-text-hi hover:bg-bg-raised",
    features: [
      "Up to 50 devices",
      "Hardware fingerprinting",
      "Basic risk scores",
      "Driver recommendations",
      "Email support",
    ],
  },
  {
    name: "PRO",
    price: "₹999",
    suffix: "/device/month",
    tagline: "For teams managing 50–500 devices.",
    border: "border-accent",
    label: "text-accent",
    popular: true,
    button: "bg-accent text-text-hi hover:bg-accent-hover",
    features: [
      "Everything in Starter",
      "Unlimited devices",
      "AI compatibility predictions",
      "Outcome learning loop",
      "Fleet risk dashboard",
      "API key management",
      "Intune / Jamf integration",
      "Priority support",
    ],
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    suffix: "",
    tagline: "For large orgs with custom needs.",
    border: "border-border-dim",
    label: "text-text-lo",
    button: "border border-border-bright bg-transparent text-text-hi hover:bg-bg-raised",
    cta: "Contact Sales",
    features: [
      "Everything in Pro",
      "On-premise deployment",
      "SSO / SAML",
      "SLA guarantee",
      "Dedicated account manager",
      "Custom ML model training",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-border-dim bg-bg-base px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1080px]">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-lo">
            PRICING
          </p>
          <h2 className="mt-3 text-[36px] font-bold leading-tight text-text-hi">
            Simple pricing. No surprises.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.7] text-text-mid">
            Start free. Pay only when you scale. Cancel any time.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-lg border ${plan.border} bg-bg-surface p-8`}
            >
              {plan.popular ? (
                <div className="absolute right-4 top-4 rounded-sm bg-accent px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-text-hi">
                  MOST POPULAR
                </div>
              ) : null}
              <p className={`mb-3 font-mono text-[11px] uppercase tracking-[0.08em] ${plan.label}`}>
                {plan.name}
              </p>
              <div className="flex items-end">
                <span className="text-4xl font-extrabold text-text-hi">{plan.price}</span>
                {plan.suffix ? (
                  <span className="ml-1 pb-1 text-[14px] text-text-mid">{plan.suffix}</span>
                ) : null}
              </div>
              <p className="mb-6 mt-2 text-[14px] text-text-mid">{plan.tagline}</p>
              <div className="mb-6 border-t border-border-dim" />
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 py-1.5 text-[14px] text-text-mid">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-success" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 block w-full rounded-md py-2.5 text-center text-[14px] font-semibold transition-colors ${plan.button}`}
              >
                {plan.cta ?? "Start Free Trial"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
