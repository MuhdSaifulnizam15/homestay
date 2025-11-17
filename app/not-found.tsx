import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Halaman Tidak Dijumpai</h2>
      <p className="max-w-md text-gray-600 mb-6">Maaf, halaman yang anda cari tidak dapat dijumpai. Ia mungkin telah dipindahkan, dinamakan semula, atau tidak tersedia buat sementara waktu.</p>
      <Link
        href={`/`}
        className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Kembali ke Laman Utama
      </Link>
      <footer className="mt-10 text-s{m text-gray-500">
        © {new Date().getFullYear()} Laman Cik De. Hak cipta terpelihara.
      </footer>
    </main>
  )
}