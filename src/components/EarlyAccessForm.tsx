"use client";

import { ValidationError, useForm } from "@formspree/react";

export default function EarlyAccessForm() {
  const [state, handleSubmit] = useForm("xqewjvjv");

  if (state.succeeded) {
    return (
      <div className="rounded-lg border border-success/20 bg-success/10 px-5 py-4 text-left">
        <p className="text-[14px] font-semibold text-success">Request received.</p>
        <p className="mt-1 text-[13px] leading-[1.7] text-text-mid">
          We will reach out within 24 hours with next steps for private beta access.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
      <div className="flex flex-col gap-3 rounded-lg border border-border-dim bg-code-bg p-2 sm:flex-row">
        <label htmlFor="early-access-email" className="sr-only">
          Work email
        </label>
        <input
          id="early-access-email"
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          className="min-h-11 flex-1 rounded-md border border-border-dim bg-bg-base px-4 font-mono text-[14px] text-text-hi outline-none transition-colors placeholder:text-text-lo focus:border-accent"
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="min-h-11 rounded-md bg-accent px-5 text-[14px] font-semibold text-text-hi transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:bg-accent-dim"
        >
          {state.submitting ? "Submitting..." : "Get Early Access →"}
        </button>
      </div>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="mt-2 block text-left text-[12px] text-danger"
      />
      <ValidationError
        errors={state.errors}
        className="mt-2 block text-left text-[12px] text-danger"
      />
      <p className="mt-3 text-center text-[12px] text-text-lo">
        We will reach out within 24 hours. No spam.
      </p>
    </form>
  );
}
