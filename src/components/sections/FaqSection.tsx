"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = t.faq.items;

  return (
    <section id="faq" className="bg-cream py-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <Reveal>
          <div className="section-label text-teal text-center">{t.faq.label}</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title text-center">{t.faq.title}</h2>
          <div className="section-divider bg-teal mx-auto" />
        </Reveal>

        <div className="mt-10 space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={0.05 * index}>
                <div className="rounded-[20px] border border-teal-pale bg-white overflow-hidden shadow-[0_4px_16px_rgba(26,138,125,0.04)]">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left bg-transparent border-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[18px] text-brand-text font-medium leading-snug">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="shrink-0 text-teal"
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-6 pt-1 font-body text-[15px] text-brand-muted leading-relaxed border-t border-teal-pale/60">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
