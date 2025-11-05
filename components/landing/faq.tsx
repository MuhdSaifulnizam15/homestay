"use client";

import { useState, useEffect } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { FAQS_BY_CATEGORY } from "@/constants";
import { Locale } from "@/types";

type FaqProps = {
  translation: {
    faq: {
      title: string;
      description: string;
      more: string;
      showLess: string;
    };
  },
  locale: Locale;
};

const Faq = ({ translation, locale }: FaqProps) => {
  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const { title, description, more, showLess } = translation.faq;

  // Detect desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleFaqsCategories =
    isDesktop || showAll ? FAQS_BY_CATEGORY : FAQS_BY_CATEGORY.slice(0, 3);
  const remainingCount = FAQS_BY_CATEGORY.length - 3;

  return (
    <section className="w-full py-8 px-4 md:px-8 lg:px-16" id="faqs">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-6">
        {/* Left section (title) */}
        <div className="flex flex-col text-center lg:text-left lg:col-span-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Right section (accordion lists) */}
        <div className="lg:col-span-2 space-y-6">
          {visibleFaqsCategories.map((cat, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-lg bg-white dark:bg-neutral-900 p-4 sm:p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{cat.category[locale]}</h3>
              <Accordion.Root
                type="single"
                collapsible
                className="space-y-2"
              >
                {cat.items.map((item, j) => (
                  <Accordion.Item
                    key={j}
                    value={`${cat.category}-${j}`}
                    className="rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger
                        className="flex w-full items-center justify-between px-4 py-3 text-left font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                      >
                        {item.question[locale]}
                        <Plus className="h-5 w-5 shrink-0 transition-transform duration-200 radix-state-open:rotate-45" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="px-4 pb-4 text-sm text-neutral-600 dark:text-neutral-300">
                      {item.answer[locale]}
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          ))}

          {/* Centered Show More / Show Less button (only on tablet/mobile) */}
          {!isDesktop && remainingCount > 0 && (
            <div className="flex justify-center pt-4">
              {!showAll ? (
                <button
                  onClick={() => setShowAll(true)}
                  className="text-primary font-medium border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl px-6 py-2 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
                >
                  {`+${remainingCount} ${more}`}
                </button>
              ) : (
                <button
                  onClick={() => setShowAll(false)}
                  className="text-primary font-medium border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl px-6 py-2 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
                >
                  {showLess}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export { Faq };