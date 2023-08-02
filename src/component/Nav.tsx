import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export const Nav = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="w-screen z-10 backdrop-filter backdrop-blur-md bg-opacity-50 fixed lg:w-3/5 h-20 dark:bg-black   flex flex-row items-center  justify-between ">
      <div className="flex flex-row w-1/3 mx-5  lg:mx-0">
        {" "}
        {theme === "dark" ? (
          <Image
            width={50}
            height={50}
            src="/images/Bd-1-white.png"
            alt="Login"
            className="cursor-pointer"
          />
        ) : (
          <Image
            width={50}
            height={50}
            src="/images/Bd-1-black.png"
            alt="Login"
            className="cursor-pointer"
          />
        )}
      </div>
      <div className="hidden md:flex text-black dark:text-white flex-row justify-around w-1/3">
        <Link href="#" className=" pr-5 ">
          /blog
        </Link>
        <Link href="#" className="pr-5">
          /download
        </Link>
        <Link href="#" className="pr-5">
          /portfolio
        </Link>
      </div>
      <div className="hidden md:flex flex-row justify-around w-1/3  ">
        <div className=" flex p-1 divide-x divide-white space-x-2 flex-row text-2xl w-fit h-fit rounded-2xl ring-1 ring-gray-500">
          <div className="flex space-x-2 text-black cursor-pointer  dark:text-white flex-row">
            <MdOutlineDarkMode onClick={() => setTheme("dark")} />

            <MdOutlineLightMode onClick={() => setTheme("white")} />
          </div>
        </div>
      </div>
      <div className="text-xl w-7 h-7 md:hidden text-black dark:text-white z-10 flex items-center mr-5 justify-center rounded-full ring-1 ring-gray-500">
        <HiOutlineMenuAlt4 />
      </div>
    </nav>
  );
};
