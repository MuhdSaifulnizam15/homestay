import Link from "next/link";

type NotFoundProps = {
  translation: {
    notFound: {
      title: string;
      description: string;
      name: string;
      goBackHome: string;
      copyright: string;
    };
  };
};

export default function NotFound({ translation }: NotFoundProps) {
  const { title, description, goBackHome, copyright, name } = translation.notFound;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="max-w-md text-gray-600 mb-6">{description}</p>
      <Link
        href="/en"
        className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        {goBackHome}
      </Link>
      <footer className="mt-10 text-s{m text-gray-500">
        © {new Date().getFullYear()} {name} {copyright}
      </footer>
    </main>
  );
}
