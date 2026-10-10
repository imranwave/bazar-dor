
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-lime-100 px-4">
      <div className="w-full max-w-xl rounded-3xl border border-green-100 bg-white/80 px-6 py-12 text-center shadow-xl shadow-green-900/5 sm:px-12 sm:py-16">

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-green-700">
          Page Not Found
        </p>

        <h1 className="mb-2 text-8xl font-extrabold tracking-tight text-green-700 sm:text-9xl">
          404
        </h1>

        <h2 className="mb-4 text-2xl font-bold text-green-950 sm:text-3xl">
          Oops! Page Not Found
        </h2>

        <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
          Sorry, the page you are looking for does not exist
          or may have been moved. Please return to the home page.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-green-700 px-8 py-3.5 font-semibold text-white shadow-lg shadow-green-700/20 transition duration-300 hover:-translate-y-1 hover:bg-green-800"
        >
          Back to Home
        </Link>

        <div className="mt-10 border-t border-green-100 pt-5">
          <p className="text-sm text-green-800/60">
            Thank you for visiting Bazar Dor.
          </p>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;