import { getLocale } from "./locales";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Facility } from "@/components/landing/facility";
import { Attraction } from "@/components/landing/attraction";
import { Testimonial } from "@/components/landing/testimonial";
import { Faq } from "@/components/landing/faq";
import { Locale } from "@/types";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const translation = await getLocale(locale) // en

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center">
        <Header translation={translation} />

        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <Hero locale={locale} />
          
          <main className="flex-1 flex flex-col px-4">
            <Facility locale={locale} />
            <Attraction />
            <Testimonial />
            <Faq locale={locale} />
          </main>
        </div>

        <Footer translation={translation} />
      </div>
    </main>
  );
}
