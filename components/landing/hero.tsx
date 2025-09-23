import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

import SampleImg from "../../assets/images/sample.jpg"

const Hero = ({ locale = "en" }: { locale: string }) => {
    return (
    <section className="relative flex flex-col items-center justify-center text-center py-10 px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to Our Homestay
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your cozy getaway in the heart of Kampung Raja, Besut. Relax, explore, and enjoy.
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

      <div className="mt-10">
        <Image
          src={SampleImg}
          alt="Homestay preview"
          width={800}
          height={450}
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

export { Hero };