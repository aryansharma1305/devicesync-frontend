const faqs = [
  {
    question: "Does the agent collect personal data?",
    answer:
      "No. The agent only collects hardware IDs, vendor and device codes, hashes them into a stable machine ID, and never touches usernames, files, or network traffic.",
  },
  {
    question: "Does it work on air-gapped networks?",
    answer:
      "Yes. The agent can be configured to talk to an on-premise DeviceSync instance with no external internet access required.",
  },
  {
    question: "What happens when ML has no data for a device?",
    answer:
      'It returns "unknown" risk and flags the device for manual review. As outcomes are reported, DeviceSync builds a score automatically.',
  },
  {
    question: "How is this different from SCCM or Intune?",
    answer:
      "SCCM and Intune push updates. DeviceSync tells you which updates will break which devices before you push them. It sits upstream of your MDM, not inside it.",
  },
  {
    question: "Is the Go agent open source?",
    answer:
      "The agent is open source. The backend API and ML service are commercial.",
  },
];

export default function FAQ() {
  return (
    <section id="docs" className="border-b border-border-dim bg-bg-base px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[900px]">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-lo">
            FAQ
          </p>
          <h2 className="mt-3 text-[36px] font-bold leading-tight text-text-hi">
            Answers for IT buyers.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border-dim rounded-lg border border-border-dim bg-bg-surface">
          {faqs.map((faq) => (
            <article key={faq.question} className="p-6">
              <h3 className="text-[15px] font-semibold text-text-hi">{faq.question}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-text-mid">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
