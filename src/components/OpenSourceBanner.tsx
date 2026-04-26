import { Code, ExternalLink } from "lucide-react";

export default function OpenSourceBanner() {
  return (
    <section className="border-b border-border-dim bg-bg-base px-5 py-10">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-5 rounded-lg border border-border-dim bg-bg-surface p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-accent-dim bg-accent-dim text-accent">
            <Code className="h-5 w-5" />
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-text-lo">
              OPEN SOURCE AGENT
            </p>
            <h2 className="mt-1 text-[20px] font-semibold text-text-hi">
              Inspect the code that runs on your machines.
            </h2>
            <p className="mt-2 text-[14px] leading-[1.7] text-text-mid">
              The DeviceSync agent is open source so IT teams can audit exactly
              what is collected before deploying it fleet-wide.
            </p>
          </div>
        </div>
        <a
          href="https://github.com/aryansharma1305/devicesync-backend/tree/main/agent"
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border-bright px-4 py-2.5 font-mono text-[13px] text-text-hi transition-colors hover:bg-bg-raised"
        >
          View agent source
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
