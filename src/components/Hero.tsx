import TerminalMotion from "@/components/TerminalMotion";

function TerminalLine({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`block ${className}`}>{children}</span>;
}

export default function Hero() {
  return (
    <section className="bg-bg-base px-5 pb-20 pt-24">
      <div className="mx-auto grid max-w-[1080px] items-center gap-12 lg:grid-cols-[55fr_45fr]">
        <div>
          <div className="inline-flex rounded-md bg-accent-dim px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
            NOW IN BETA
          </div>
          <h1 className="mt-6 max-w-2xl text-[40px] font-extrabold leading-[1.05] text-text-hi md:text-[64px]">
            Stop firefighting
            <br />
            driver failures.
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-text-mid">
            DeviceSync predicts hardware compatibility before deployment, automates
            driver installs, and learns from every outcome across your fleet. Built
            for IT teams who are tired of finding out after the fact.
          </p>
          <div className="mt-8 flex flex-row gap-3">
            <a
              href="#cta"
              className="rounded-md bg-accent px-4 py-2.5 text-center text-[14px] font-semibold text-text-hi transition-colors hover:bg-accent-hover sm:px-5"
            >
              Get Early Access
            </a>
            <a
              href="#docs"
              className="rounded-md border border-border-bright bg-transparent px-4 py-2.5 text-center text-[14px] text-text-mid transition-colors hover:text-text-hi sm:px-5"
            >
              View the API docs
            </a>
          </div>
          <p className="mt-3 text-[12px] text-text-lo">
            macOS · Windows · Linux · No credit card required
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-code-border bg-code-bg font-mono text-[11px] text-text-mid sm:text-[13px]">
          <TerminalMotion />
          <div className="flex items-center justify-between border-b border-code-border bg-bg-raised px-4 py-2.5">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-danger" />
              <span className="h-3 w-3 rounded-full bg-warning" />
              <span className="h-3 w-3 rounded-full bg-success" />
            </div>
            <span className="text-[11px] text-text-lo">devicesync-agent v0.1.0</span>
          </div>
          <pre className="overflow-x-auto p-5 leading-[1.8]">
            <code>
              <TerminalLine>
                <span className="text-accent">$</span>{" "}
                <span className="text-text-hi">devicesync scan --fleet acme-corp</span>
              </TerminalLine>
              <TerminalLine>&nbsp;</TerminalLine>
              <TerminalLine>
                <span className="text-success">[✓]</span> Connected to DeviceSync API
              </TerminalLine>
              <TerminalLine>
                <span className="text-success">[✓]</span> Machine registered:{" "}
                <span className="text-success">7cd0b6b8</span>
              </TerminalLine>
              <TerminalLine>&nbsp;</TerminalLine>
              <TerminalLine>Scanning hardware...</TerminalLine>
              <TerminalLine>&nbsp;</TerminalLine>
              <TerminalLine className="text-text-hi">
                DEVICE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CLASS&nbsp;&nbsp; RISK&nbsp;&nbsp;&nbsp;&nbsp; SCORE
              </TerminalLine>
              <TerminalLine>─────────────────────────────────────────────</TerminalLine>
              <TerminalLine>
                Apple USB 3.0 Hub&nbsp;&nbsp;&nbsp; USB&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-success">LOW</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-success">0.97</span>
              </TerminalLine>
              <TerminalLine>
                Intel I225-V LAN&nbsp;&nbsp;&nbsp;&nbsp; PCI&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-warning">MEDIUM</span>&nbsp;&nbsp; <span className="text-warning">0.61</span>
              </TerminalLine>
              <TerminalLine>
                Broadcom BCM4364&nbsp;&nbsp;&nbsp;&nbsp; PCI&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger">HIGH</span>&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger">0.12</span>
              </TerminalLine>
              <TerminalLine>
                Logitech USB Recv.&nbsp;&nbsp; USB&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-success">LOW</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-success">0.94</span>
              </TerminalLine>
              <TerminalLine>&nbsp;</TerminalLine>
              <TerminalLine>
                <span className="text-warning">[!]</span> 1 device requires attention
              </TerminalLine>
              <TerminalLine>
                <span className="text-accent">[→]</span> Run:{" "}
                <span className="text-text-hi">devicesync fix --device bcm4364</span>
              </TerminalLine>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
