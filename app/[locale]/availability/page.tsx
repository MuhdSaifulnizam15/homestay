import { Header } from "@/components/landing/header"
import { getLocale } from "../locales"
import { Footer } from "@/components/landing/footer"
import { Calendar } from "@/components/calendar"
import { Locale } from "@/types"

export default async function Availability({
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

        <div className="flex-1 flex flex-col p-5">
          <Calendar />
        </div>

        <Footer translation={translation} />
      </div>
    </main>
  )
}