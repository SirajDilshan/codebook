import { Link } from "react-router-dom";
import Logo from "../../assets/logo .png";

export const Header = () => {
  return (
    <header>
      <nav classNameName="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Code Book Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span class="cursor-pointer text-xl text-gray-700 dark:text-white  bi bi-gear-wide-connected"></span>
            <span class="cursor-pointer text-xl text-gray-700 dark:text-white  bi bi-search"></span>
            <span class="cursor-pointer text-xl text-gray-700 dark:text-white  bi bi-cart-fill"></span>
            <span class="cursor-pointer text-xl text-gray-700 dark:text-white  bi bi-person-circle"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};
