import { Link } from "react-router-dom";

const EmptyPages = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center ">
      <h1 className="mb-4 text-6xl font-extrabold text-gray-600 animate-bounce">404</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 tracking-wider">Oops! Page not found.</p>
      <p className="mb-8 text-sm text-gray-500 dark:text-gray-400 tracking-wider">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg border-black border hover:tracking-widest transition-all duration-700 hover:bg-gray-600 hover:text-white hover:shadow-2xl shadow-xl"
      >
        Go back to Home
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
      <div className="mt-10">
        <svg
          className="w-16 h-16 animate-spin text-[#2b2b2b]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default EmptyPages;