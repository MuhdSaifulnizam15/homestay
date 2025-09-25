"use client";

import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { ATTRACTIONS } from "@/constants";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Attraction = () => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (imgs: string[], idx: number) => {
    setImages(imgs);
    setCurrentIndex(idx);
    setOpen(true);
  };

  const nextImage = () =>
    setCurrentIndex((i) => (i + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section className="py-16 px-6 bg-muted/30" id="attractions">
      <h2 className="text-3xl font-bold mb-8 text-center">Nearby Attractions</h2>
      <div className="w-full max-w-4xl mx-auto">
        <Accordion.Root
          type="single"
          collapsible
          className="w-full space-y-4"
        >
          {ATTRACTIONS.map((category, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium text-lg">
                  {category.category}
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="p-4 space-y-6 bg-white">
                {category.items.map((attraction, j) => (
                  <div
                    key={j}
                    className="grid md:grid-cols-2 gap-4 border-b pb-4 last:border-b-0"
                  >
                    {/* Images */}
                    <div className="flex gap-2 overflow-x-auto">
                      {attraction.images.map((img, k) => (
                        <div
                          key={k}
                          className="relative w-40 h-28 flex-shrink-0 rounded-lg overflow-hidden"
                          onClick={() => openGallery(attraction.images, k)}
                        >
                          <Image
                            src={img}
                            alt={attraction.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Details */}
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{attraction.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        📍 {attraction.location}
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        {attraction.description}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Distance:</span>{" "}
                        {attraction.distance}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Operation Hours:</span>{" "}
                        {attraction.operationHours}
                      </p>
                    </div>
                  </div>
                ))}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        {/* Modal Gallery */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/70 z-60" />
            <Dialog.Content
              className="fixed z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                       w-[92vw] max-w-5xl h-[82vh] bg-transparent outline-none"
              aria-label="Image gallery"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-8 right-0 bg-black/50 p-2 text-white z-50"
                >
                  <X size={20} />
                </button>

                {/* Prev */}
                {images.length > 1 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-4 bg-black/50 p-2 rounded-full text-white z-50"
                  >
                    <ChevronLeft size={24} />
                  </button>
                )}

                {/* Image */}
                {images.length > 0 && (
                  <div className="relative w-full h-full">
                    <Image
                      src={images[currentIndex]}
                      alt="Gallery"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Next */}
                {images.length > 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-4 bg-black/50 p-2 rounded-full text-white z-50"
                  >
                    <ChevronRight size={24} />
                  </button>
                )}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}

export { Attraction };