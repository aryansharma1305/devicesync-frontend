import { Code, Globe, Mail } from "lucide-react";

const footerColumns = [
  {
    label: "PRODUCT",
    links: ["Features", "Pricing", "Docs", "API Reference", "Changelog"],
  },
  {
    label: "COMPANY",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    label: "LEGAL",
    links: ["Privacy Policy", "Terms of Service", "Security"],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-dim bg-bg-base px-5 py-16">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-12 rounded-lg border border-border-dim bg-bg-surface p-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-text-lo">
              EARLY ACCESS
            </p>
            <h3 className="mt-2 text-[22px] font-bold text-text-hi">
              Bring predictive driver management to your fleet.
            </h3>
          </div>
          <a
            href="#cta"
            className="mt-6 inline-flex rounded-md bg-accent px-5 py-2.5 text-[14px] font-semibold text-text-hi transition-colors hover:bg-accent-hover md:mt-0"
          >
            Get Early Access
          </a>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-3 flex items-center gap-2 text-[16px] font-bold text-text-hi">
              <span className="text-accent">▪</span>
              <span>DeviceSync</span>
            </div>
            <p className="max-w-sm text-[13px] leading-[1.7] text-text-lo">
              Predictive hardware compatibility, driver recommendations, and
              fleet risk visibility for IT teams that need answers before
              deployment.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="DeviceSync source"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border-dim text-text-lo transition-colors hover:border-border-bright hover:text-text-mid"
              >
                <Code className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="DeviceSync website"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border-dim text-text-lo transition-colors hover:border-border-bright hover:text-text-mid"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@devicesync.dev"
                aria-label="Email DeviceSync"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border-dim text-text-lo transition-colors hover:border-border-bright hover:text-text-mid"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.label}>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-text-lo">
                {column.label}
              </p>
              {column.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="mb-2 block text-[14px] text-text-mid transition-colors hover:text-text-hi"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border-dim pt-6 md:flex-row md:items-center">
          <p className="text-[13px] text-text-lo">
            © {year} DeviceSync. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-text-lo">
            <a href="#" className="transition-colors hover:text-text-mid">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-text-mid">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-text-mid">
              Security
            </a>
            <a href="#" className="transition-colors hover:text-text-mid">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
