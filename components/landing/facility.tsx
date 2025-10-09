"use client";

import { useEffect, useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { FACILITIES } from "@/constants";
import { Locale } from "@/types";

const Facility = ({ locale }: { locale: Locale }) => {
  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleFacilities =
    isDesktop || showAll ? FACILITIES : FACILITIES.slice(0, 9);
  const remainingCount = FACILITIES.length - 9;

  return (
    <section className="w-full py-8 px-4 md:px-8 lg:px-16" id="facilities">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Facilities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {visibleFacilities.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <Tooltip.Provider key={i} delayDuration={150}>
                <Tooltip.Root>
                  {/* Trigger */}
                  <Tooltip.Trigger asChild>
                    <div className="flex flex-col items-center text-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-md p-4 transition hover:shadow-lg cursor-default">
                      <Icon className="h-8 w-8 mb-2 text-primary" />
                      <span className="font-medium text-sm">{facility.name[locale]}</span>
                      {/* Show description inline only on desktop */}
                      <span className="hidden lg:block text-xs text-neutral-500 mt-1">
                        {facility.description[locale]}
                      </span>
                    </div>
                  </Tooltip.Trigger>

                  {/* Tooltip content for mobile/tablet */}
                  <Tooltip.Content
                    side="top"
                    className="lg:hidden rounded-md bg-neutral-800 text-white px-3 py-2 text-xs shadow-lg"
                  >
                    {facility.description[locale]}
                    <Tooltip.Arrow className="fill-neutral-800" />
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>
            );
          })}

          {/* Only show toggle on mobile/tablet and if more than 9 */}
          {!isDesktop && !showAll && remainingCount > 0 && (
            <div
              onClick={() => setShowAll(true)}
              className="col-span-full flex justify-center"
            >
              <span className="text-sm font-medium text-primary">+{remainingCount} more</span>
            </div>
          )}

          {!isDesktop && showAll && FACILITIES.length > 9 && (
            <div
              onClick={() => setShowAll(false)}
              className="col-span-full flex justify-center"
            >
              <span className="text-sm font-medium text-primary">Show less</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export { Facility };