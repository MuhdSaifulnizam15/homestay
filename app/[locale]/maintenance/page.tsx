import { Locale } from "@/types";
import Link from "next/link";
import { getLocale } from "../locales";

// type MaintenanceProps = {
//   translation: {
//     maintenance: {
//       title: string;
//       description: string;
//       name: string;
//       goBackHome: string;
//       copyright: string;
//     };
//   };
// };

export default async function MaintenancePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const translation = await getLocale(locale)
  const { title, description, goBackHome, copyright, name } = translation.maintenance;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 text-gray-800 px-6">
      <h1 className="text-4xl font-bold mb-4">🚧 {title}</h1>
      <p className="text-lg max-w-md mb-6">
        {description}
      </p>
      <Link
        href={`/${locale}`}
        className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        {goBackHome}
      </Link>
      <footer className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} {name} {copyright}
      </footer>
    </main>
  );
}
