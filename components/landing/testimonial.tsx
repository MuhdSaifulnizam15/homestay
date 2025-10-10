"use client";

import { useState, useRef } from "react";
import { TESTIMONIALS } from "@/constants";
import { Button } from "../ui/button";

const Testimonial = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + 3, TESTIMONIALS.length)
    );
  };

  const handleShowLess = () => {
    setVisibleCount(3);
    // Smooth scroll back to top of section
    containerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const isExpanded = visibleCount >= TESTIMONIALS.length;

  return (
    <section
      ref={containerRef}
      className="py-16 px-6 bg-muted/30"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        What Our Guests Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {TESTIMONIALS.slice(0, visibleCount).map((t, idx) => (
          <div
            key={idx}
            className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="italic">“{t.feedback}”</p>
            <p className="mt-4 font-semibold text-right">- {t.name}, {t.location}</p>
          </div>
        ))}
      </div>

      {TESTIMONIALS.length > 3 && (
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={isExpanded ? handleShowLess : handleShowMore}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </section>
  );
}

export { Testimonial };