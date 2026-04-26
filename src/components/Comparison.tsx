import { Check, X } from "lucide-react";

const rows = [
  ["Predict before deploy", true, false, false, false],
  ["ML risk scores", true, false, false, false],
  ["Cross-platform agent", true, false, true, false],
  ["Learns from outcomes", true, false, false, false],
  ["On-premise option", true, true, false, true],
] as const;

const columns = ["DeviceSync", "SCCM", "Intune", "Manual"];

function Cell({ value }: { value: boolean }) {
  return value ? (
    <Check className="mx-auto h-4 w-4 text-success" />
  ) : (
    <X className="mx-auto h-4 w-4 text-danger" />
  );
}

export default function Comparison() {
  return (
    <section className="border-b border-border-dim bg-bg-base px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1080px]">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-lo">
            COMPARISON
          </p>
          <h2 className="mt-3 text-[36px] font-bold leading-tight text-text-hi">
            Built upstream of your MDM.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-text-mid">
            SCCM and Intune deploy updates. DeviceSync tells you what will break
            before those tools push anything.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[900px] overflow-x-auto rounded-lg border border-border-dim bg-bg-surface">
          <table className="w-full min-w-[680px] border-collapse">
            <thead>
              <tr className="border-b border-border-dim bg-bg-raised">
                <th className="px-5 py-4 text-left font-mono text-[11px] uppercase tracking-[0.08em] text-text-lo">
                  Capability
                </th>
                {columns.map((column) => (
                  <th
                    key={column}
                    className="px-5 py-4 text-center font-mono text-[11px] uppercase tracking-[0.08em] text-text-lo"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, deviceSync, sccm, intune, manual]) => (
                <tr key={label} className="border-b border-border-dim last:border-0">
                  <td className="px-5 py-4 text-[14px] font-medium text-text-hi">{label}</td>
                  {[deviceSync, sccm, intune, manual].map((value, index) => (
                    <td key={`${label}-${index}`} className="px-5 py-4 text-center">
                      <Cell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
