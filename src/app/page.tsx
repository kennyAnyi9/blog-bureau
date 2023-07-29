import Image from "next/image";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
export default function Home() {
  return (
    <div className=" bg-black flex flex-col  h-screen">
      <nav className="w-full h-20 relative   flex flex-row items-center justify-between">
        <div className="flex flex-row mx-5">
          {" "}
          <Image
            width={50}
            height={50}
            src="/images/Bd-1-white.png"
            alt="Login"
          />{" "}
        </div>
        <div className="text-3xl w-10 h-10 flex items-center mr-5 justify-center rounded-full ring-1 ring-gray-500">
          <HiOutlineMenuAlt4 />
        </div>
      </nav>

      <div className="flex flex-col h-screen items-center justify-center">
        {" "}
        <h1
          className="text-7xl font-bold 
                    text-transparent bg-clip-text
                   text-white
                    text-center
                     "
        >
          Blog.
        </h1>
        <h1
          className="text-7xl font-bold 
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-purple-600 to-pink-600
                    text-center
                     "
        >
          Bureau.
        </h1>
        <p className="flex text-xl flex-col text-center text-gray-400 mt-10">
          <span>Unleash the Power of books,</span>
          <span>Uncover key insights,</span>
          <span>& Elevate your journey</span>
        </p>
        <div className="flex w-3/5 justify-between mt-10 mb-10">
          <span>#learn</span>
          <span>#Discover</span>
          <span>#Grow</span>
        </div>
        <div className="relative flex  w-4/5">
          <div className="absolute inset-0 top-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-50"></div>
          <button
            className=" relative px-3 py-4 bg-black rounded-lg ring-1 ring-pink-600 mt-5 
                        leading-none flex items-center divide-x "
          >
            <span className="px-20 flex items-center space-x-2">
              <span className=" text-gray-100">Uncover </span>
              <span className=" text-gray-100">Insights </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
