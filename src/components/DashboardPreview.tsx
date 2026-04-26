const stats = [
  ["TOTAL", "247", "border-accent"],
  ["LOW", "189", "border-success"],
  ["MEDIUM", "41", "border-warning"],
  ["HIGH", "17", "border-danger"],
];

const devices = [
  ["Apple USB 3.0 Hub", "USB", "LOW", "0.97", "darwin", "2m ago"],
  ["Intel I225-V LAN", "PCI", "MEDIUM", "0.61", "windows", "14m ago"],
  ["Broadcom BCM4364", "PCI", "HIGH", "0.12", "darwin", "1h ago"],
  ["Logitech USB Recv.", "USB", "LOW", "0.94", "linux", "3m ago"],
  ["Realtek RTL8153", "USB", "HIGH", "0.09", "windows", "22m ago"],
];

function riskClass(risk: string) {
  if (risk === "LOW") {
    return "border-success/20 bg-success/10 text-success";
  }
  if (risk === "MEDIUM") {
    return "border-warning/20 bg-warning/10 text-warning";
  }
  return "border-danger/20 bg-danger/10 text-danger";
}

export default function DashboardPreview() {
  return (
    <section className="border-b border-border-dim bg-bg-base px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1080px]">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-lo">
            PRODUCT PREVIEW
          </p>
          <h2 className="mt-3 text-[36px] font-bold leading-tight text-text-hi">
            A fleet view built for IT teams.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-text-mid">
            Real compatibility data. Not a BI dashboard. Not a spreadsheet. A
            live risk map of your hardware.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[900px] overflow-hidden rounded-lg border border-border-dim bg-bg-surface">
          <div className="flex h-10 items-center border-b border-border-dim bg-bg-raised px-4">
            {["Overview", "Devices", "Machines"].map((tab) => (
              <div
                key={tab}
                className={`flex h-full items-center px-4 font-mono text-[13px] ${
                  tab === "Overview"
                    ? "border-b-2 border-accent text-text-hi"
                    : "text-text-mid"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          <div className="p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(([label, value, borderClass]) => (
                <div
                  key={label}
                  className={`rounded-md border-l-2 ${borderClass} bg-bg-raised px-4 py-3`}
                >
                  <div className="font-mono text-[11px] uppercase text-text-lo">{label}</div>
                  <div className="font-mono text-2xl font-extrabold text-text-hi">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="border-b border-border-dim bg-bg-raised">
                    {["DEVICE", "CLASS", "RISK", "SCORE", "OS", "LAST SEEN"].map((header) => (
                      <th
                        key={header}
                        className="px-4 py-2 text-left font-mono text-[11px] font-medium uppercase text-text-lo"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {devices.map(([name, deviceClass, risk, score, os, lastSeen]) => (
                    <tr key={name} className="border-b border-border-dim last:border-0">
                      <td className="px-4 py-3 text-[13px] text-text-hi">{name}</td>
                      <td className="px-4 py-3 font-mono text-[13px] text-text-mid">
                        {deviceClass}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-md border px-2 py-1 font-mono text-[11px] ${riskClass(risk)}`}
                        >
                          {risk}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-[13px] text-text-mid">{score}</td>
                      <td className="px-4 py-3 font-mono text-[13px] text-text-mid">{os}</td>
                      <td className="px-4 py-3 text-[13px] text-text-mid">{lastSeen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="border-t border-border-dim px-6 py-3 font-mono text-[12px] text-text-lo">
            Showing 5 of 247 devices · Last updated just now
          </div>
        </div>
      </div>
    </section>
  );
}
