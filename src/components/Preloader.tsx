"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1350);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-base"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="w-[300px] rounded-lg border border-border-dim bg-code-bg">
            <div className="flex items-center justify-between border-b border-code-border bg-bg-raised px-4 py-2.5">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-danger" />
                <span className="h-3 w-3 rounded-full bg-warning" />
                <span className="h-3 w-3 rounded-full bg-success" />
              </div>
              <span className="font-mono text-[11px] text-text-lo">boot</span>
            </div>
            <div className="p-5 font-mono text-[12px] leading-[1.8]">
              <div>
                <span className="text-accent">$</span>{" "}
                <span className="text-text-hi">devicesync init</span>
              </div>
              <motion.div
                className="mt-4 h-1.5 overflow-hidden rounded-sm bg-bg-raised"
                initial={false}
              >
                <motion.div
                  className="h-full bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.div
                className="mt-4 text-success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.25 }}
              >
                [✓] loading fleet intelligence
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
