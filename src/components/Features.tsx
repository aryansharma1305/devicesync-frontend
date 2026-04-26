import { Brain, Key, LayoutDashboard, RefreshCw, Shield, Terminal } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Hardware Fingerprinting",
    description:
      "Scans USB, PCI, Bluetooth and Network interfaces. Generates a stable SHA256 machine ID, with no personal data collected.",
  },
  {
    icon: Brain,
    title: "AI Compatibility Scores",
    description:
      "XGBoost classifier trained on real install outcomes. Returns a 0–1 risk score per device in milliseconds, with Redis caching for hot paths.",
  },
  {
    icon: RefreshCw,
    title: "Outcome Learning Loop",
    description:
      "Every install result retrains the model automatically. 500 new outcomes triggers a hot-swap retrain with no downtime.",
  },
  {
    icon: Terminal,
    title: "Go Agent — Cross Platform",
    description:
      "Lightweight binary for macOS, Windows, and Linux. Runs as a background service, reports on boot and on device change events.",
  },
  {
    icon: LayoutDashboard,
    title: "Fleet Risk Dashboard",
    description:
      "Live view of every device across your org filtered by risk level. Cursor-based pagination, ML scores, and driver recommendations inline.",
  },
  {
    icon: Key,
    title: "API-First Architecture",
    description:
      "REST API with JWT + API key auth. Integrates with Intune, Jamf, and SCCM. Every route documented and versioned at /api/v1.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-b border-border-dim bg-bg-base px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1080px]">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-lo">
            FEATURES
          </p>
          <h2 className="mt-3 text-[36px] font-bold leading-tight text-text-hi">
            Everything your fleet needs.
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-lg border border-border-dim bg-bg-surface p-6 transition-colors hover:border-border-bright"
              >
                <Icon className="mb-4 h-[18px] w-[18px] text-accent" />
                <h3 className="mb-2 text-[15px] font-semibold text-text-hi">{feature.title}</h3>
                <p className="text-[13px] leading-[1.7] text-text-mid">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
