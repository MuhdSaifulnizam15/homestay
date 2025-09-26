"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";

// import SampleImg from "../../public/images/sample.jpg"

// Sample images – replace with your own
const IMAGES = [
  { src: "/images/facility/facility1.jpg", alt: "Facility" },
  { src: "/images/facility/facility2.jpg", alt: "Facility" },
  { src: "/images/facility/facility3.jpg", alt: "Facility" },
  { src: "/images/facility/facility4.jpg", alt: "Facility" },
  { src: "/images/facility/facility5.jpg", alt: "Facility" },
  { src: "/images/facility/facility6.jpg", alt: "Facility" },
  { src: "/images/facility/facility7.jpg", alt: "Facility" },
  { src: "/images/facility/facility8.jpg", alt: "Facility" },
  { src: "/images/facility/facility9.jpg", alt: "Facility" },
  { src: "/images/facility/facility10.jpg", alt: "Facility" },
  { src: "/images/facility/facility11.jpg", alt: "Facility" },
];

const Hero = ({ locale = "en" }: { locale: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  // const circleImages = IMAGES.slice(0, 6);
  const rowImages = IMAGES.slice(5, 9);
  const remaining = IMAGES.length - 9;

  const openModal = (index: number) => {
    setCurrent(index);
    setIsOpen(true);
  };

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));


  return (
    <section className="relative flex flex-col items-center justify-center text-center py-10 px-4">
      {/* Top text */}
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to Our Homestay
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your cozy getaway in the heart of Kampung Raja, Besut. Relax,
          explore, and enjoy.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button asChild>
            <a href="#facilities">See Facilities</a>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/${locale}/availability`}>Check Availability</Link>
          </Button>
        </div>
      </div>

      {/* Desktop mosaic */}
      <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-2 mt-10 
          w-full max-w-xl aspect-square 
          rounded-full overflow-hidden mx-auto">
        {/* Top-left wide */}
        <div className="col-span-2 row-span-1 relative">
          <Image
            src={IMAGES[0].src}
            alt={IMAGES[0].alt}
            fill
            className="object-cover cursor-pointer"
            onClick={() => openModal(0)}
          />
        </div>

        {/* Top-right small */}
        <div className="col-span-1 row-span-1 relative">
          <Image
            src={IMAGES[1].src}
            alt={IMAGES[1].alt}
            fill
            className="object-cover cursor-pointer"
            onClick={() => openModal(1)}
          />
        </div>

        {/* Bottom-left small */}
        <div className="col-span-1 row-span-1 relative">
          <Image
            src={IMAGES[2].src}
            alt={IMAGES[2].alt}
            fill
            className="object-cover cursor-pointer"
            onClick={() => openModal(2)}
          />
        </div>

        {/* Bottom-middle tall */}
        <div className="col-span-1 row-span-1 relative">
          <Image
            src={IMAGES[3].src}
            alt={IMAGES[3].alt}
            fill
            className="object-cover cursor-pointer"
            onClick={() => openModal(3)}
          />
        </div>

        {/* Bottom-right wide */}
        <div className="col-span-1 row-span-1 relative">
          <Image
            src={IMAGES[4].src}
            alt={IMAGES[4].alt}
            fill
            className="object-cover cursor-pointer"
            onClick={() => openModal(4)}
          />
        </div>
      </div>

      {/* Row of 4 squares below */}
      <div className="hidden md:grid grid grid-cols-5 gap-4 my-6  w-full max-w-3xl">
        {rowImages.map((img, i) => (
          <div key={i} className="relative aspect-square">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => openModal(6 + i)}
            />
          </div>
        ))}

        {remaining > 1 ? (
          <button
            className="relative aspect-square bg-muted rounded-lg flex items-center justify-center text-lg font-bold cursor-pointer"
            onClick={() => openModal(10)}
          >
            +{remaining}
          </button>
        ) :
          (
            <div className="relative aspect-square">
              <Image
                src={IMAGES[9].src} // the 10th image
                alt={IMAGES[9].alt}
                fill
                className="object-cover rounded-lg cursor-pointer"
                onClick={() => openModal(9)}
              />
            </div>
          )}
      </div>


      {/* Mobile/Tablet carousel */}
      <div className="md:hidden relative w-full overflow-hidden mt-10">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {IMAGES.map((img, i) => (
            <div key={i} className="min-w-full relative h-64">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-lg cursor-pointer"
                onClick={() => openModal(i)}
              />
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 rounded-full shadow"
          onClick={prev}
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 rounded-full shadow"
          onClick={next}
        >
          <ChevronRight />
        </Button>
      </div>

      {/* Lightbox modal */}
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 data-[state=open]:animate-fadeIn" />
          <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl flex items-center justify-center">
              {/* Index counter */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-background/70 px-3 py-1 rounded-full text-sm font-medium shadow">
                Page {current + 1} of {IMAGES.length}
              </div>

              <Image
                src={IMAGES[current].src}
                alt={IMAGES[current].alt}
                width={1000}
                height={600}
                className="object-contain max-h-[80vh] rounded-lg"
              />

              {/* Close */}
              <Dialog.Close asChild>
                <button className="absolute top-4 right-4 bg-background/70 rounded-full p-2 shadow">
                  <X />
                </button>
              </Dialog.Close>

              {/* Prev */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/70 rounded-full p-2 shadow"
                onClick={prev}
              >
                <ChevronLeft />
              </button>

              {/* Next */}
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/70 rounded-full p-2 shadow"
                onClick={next}
              >
                <ChevronRight />
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}

export { Hero };