/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-black overflow-x-hidden">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#55C5CE] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <p className="relative inline-block text-sm font-medium text-[#55C5CE] group active:text-[#55C5CE] focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#55C5CE] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </p>
      </button>
    </main>
  );
};
export default PageNotFound;
