import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
export default function Home() {
  return (
    <div className=" bg-black flex flex-col justify-center items-center  h-full">
      <nav className="w-full md:w-3/5 h-28 relative   flex flex-row items-center  justify-between ">
        <div className="flex flex-row w-1/3 mx-5">
          {" "}
          <Image
            width={50}
            height={50}
            src="/images/Bd-1-white.png"
            alt="Login"
          />{" "}
        </div>
        <div className="hidden md:flex flex-row justify-around w-1/3">
          <Link href="#" className="pr-5">
            /blog
          </Link>
          <Link href="#" className="pr-5">
            /download
          </Link>
          <Link href="#" className="pr-5">
            /portfolio
          </Link>
        </div>
        <div className="hidden md:flex flex-row justify-around w-1/3  "></div>
        <div className="text-xl w-7 h-7 md:hidden text-white z-10 flex items-center mr-5 justify-center rounded-full ring-1 ring-gray-500">
          <HiOutlineMenuAlt4 />
        </div>
      </nav>

      <div className="flex  flex-col h-screen items-center mt-10 md:mt-20 w-2/3 md:w-3/5">
        {" "}
        <div className="flex flex-col lg:flex-row">
          <h1
            className="text-7xl  font-bold shadow-xl
                    text-transparent bg-clip-text
                   text-white
                    text-center
                     "
          >
            Blog.
          </h1>
          <h1
            className="text-7xl md:text-9xl font-bold shadow-xl
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-purple-600 to-pink-600
                    text-center
                     "
          >
            Bureau.
          </h1>
        </div>
        <div className="w-full">
          <p className="flex text-xl flex-col text-center text-gray-400 mt-10">
            Unleash the power of books through powerful summaries, life changing
            insights & personal reflections
          </p>
        </div>
        <div className="flex w-3/5 md:w-2/5 text-white justify-center space-x-20 mt-10 mb-10">
          <p>#Discover</p>
          <p>#Learn</p>
          <p>#Grow</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center  md:space-x-5 ">
          <button
            className=" relative px-4 py-3 bg-white rounded-lg shadow-md drop-shadow-sm mt-5 
                        leading-none flex items-center divide-x ring-1 ring-white "
          >
            <span className="px-20 md:px-8 flex items-center space-x-2">
              <span className=" text-black font-bold">Discover </span>
              <span className=" text-black font-bold">More </span>
            </span>
          </button>
          <div className="relative flex items-center justify-center w-64">
            <div className="absolute -inset-2 top-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-xl opacity-50"></div>
            <button
              className=" relative px-3 py-3 bg-black rounded-lg ring-1 ring-pink-600 mt-5 
                        leading-none flex items-center divide-x "
            >
              <span className="px-20 md:px-8  flex items-center space-x-2">
                <span className=" text-gray-100">Uncover </span>
                <span className=" text-gray-100">Insights </span>
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:grid  md:grid-cols-2   items-center  mt-20">
          <div className="flex  flex-col items-center ">
            {" "}
            <Image
              width={40}
              height={40}
              src="/images/discover.png"
              alt="Login"
              className="rounded-md"
            />{" "}
            <h1
              className="font-bold shadow-xl mt-5 text-2xl
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-blue-800 to-emerald-700
                    text-center"
            >
              Discover
            </h1>
            <p className="text-center mt-5 text-gray-600 text-lg">
              unleash the power of knowledge in Neurology and Psychlogy. The
              power of the subconscious mind, neurotransmiters and brain
              functioning{" "}
            </p>
          </div>

          <div className="flex  mt-20 flex-col items-center">
            {" "}
            <Image
              width={40}
              height={40}
              src="/images/learn1.png"
              alt="Login"
              className="rounded-md"
            />{" "}
            <h1
              className="font-bold shadow-xl mt-5 text-2xl
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-purple-600 to-pink-800
                    text-center"
            >
              Learn
            </h1>
            <p className="text-center mt-5 text-gray-600 text-lg">
              unleash the power of knowledge in Neurology and Psychlogy. The
              power of the subconscious mind, neurotransmiters and brain
              functioning{" "}
            </p>
          </div>

          <div className="flex  mt-20 flex-col items-center">
            {" "}
            <Image
              width={40}
              height={40}
              src="/images/grow.png"
              alt="Login"
              className="rounded-md"
            />{" "}
            <h1
              className="font-bold shadow-xl mt-5 text-2xl
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-orange-700 to-orange-400
                    text-center"
            >
              Grow
            </h1>
            <p className="text-center mt-5 text-gray-600 text-lg">
              unleash the power of knowledge in Neurology and Psychlogy. The
              power of the subconscious mind, neurotransmiters and brain
              functioning{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
