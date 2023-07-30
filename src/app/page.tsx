import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FcAlarmClock, FcBullish, FcMindMap, FcOrgUnit } from "react-icons/fc";
import { DiGithubBadge } from "react-icons/di";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function Home() {
  return (
    <div className="relative   bg-black flex flex-col items-center  min-h-screen ">
      <nav className="w-full z-10 backdrop-filter backdrop-blur-md bg-opacity-50 fixed md:w-3/5 h-20 bg-black   flex flex-row items-center  justify-between ">
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

      <div className="flex  flex-col relative top-20 h-fit mb-28  items-center mt-10 md:mt-20 w-4/5 md:w-3/5">
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
        <div className="flex flex-col mt-10 md:flex-row justify-center items-center  md:space-x-5 ">
          <button
            className=" relative px-4 py-3  rounded-lg bg-white shadow-md drop-shadow-sm mt-5 
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
              Explore the boundless potential of understanding in Neurology and
              Psychology, encompassing the influence of the subconscious mind,
              neurotransmitters, and brain functionality.{" "}
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
              Embark on a journey of continuous learning and personal
              development. Uncover the fascinating realms of Neurology and
              Psychology, delving into the intricate workings of the
              subconscious mind, the role of neurotransmitters, and the
              complexities of brain function.
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
              Nurture your personal growth and evolution. Unlock the potential
              within yourself as you explore the realms of Neurology and
              Psychology. Discover the profound impact of the subconscious mind,
              delve into the intricacies of neurotransmitters, and gain insights
              into the fascinating workings of the human brain. Embrace a path
              of transformation and growth, empowering yourself to become the
              best version of you.
            </p>
          </div>
        </div>
        <div className="mt-20 ">
          <h1
            className="text-5xl text-center lg:text-center text-white text-transparent font-bold bg-clip-text
                    "
          >
            Powerful Book{" "}
            <span
              className="text-transparent bg-clip-text 
                    bg-gradient-to-r from-purple-700 to-pink-600
                   "
            >
              Summaries{" "}
            </span>
            <span className="text-white">and </span>
            <span
              className="text-transparent bg-clip-text 
                    bg-gradient-to-t from-blue-700 to-pink-600"
            >
              Personal Reflections
            </span>
          </h1>
          <p className="mt-10 text-xl text-center text-gray-300">
            Empowering insights in concise form. Unleash the potential of
            powerful book summaries and personal reflections. Discover a wealth
            of knowledge distilled into bite-sized wisdom, ready to inspire and
            transform your journey of personal growth and development
          </p>
        </div>
        <div className="grid mt-20 grid-cols-1 space-y-5 md:grid-cols-2  w-full ">
          <div className=" flex flex-col w-full  md:w-96 h-fit  ring-2 ring-gray-600 rounded-xl">
            <div className="text-5xl ml-7 mt-7">
              <FcMindMap />
            </div>
            <div className="m-7">
              <h1
                className="text-2xl mb-5 font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-blue-400 to-emerald-800 "
              >
                Self Discipline
              </h1>
              <p className="text-gray-400">
                {" "}
                Embark on a transformative journey to master self-discipline.
                Gain valuable insights, practical tips, and introspective
                reflections to build healthy habits, conquer procrastination,
                and foster unwavering determination. Unlock your inner power,
                embrace personal growth, and achieve success with our
                thought-provoking content.
              </p>
            </div>
          </div>
          <div className=" flex flex-col w-full  md:w-96 h-fit  ring-2 ring-gray-600 rounded-xl">
            <div className="text-5xl ml-7 mt-7">
              <FcBullish />
            </div>
            <div className="m-7">
              <h1
                className="text-2xl mb-5 font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-emerald-400 to-emerald-900 "
              >
                Daily Habits
              </h1>
              <p className="text-gray-400">
                {" "}
                Embark on a life-changing journey to transform your habits.
                Discover powerful insights, actionable tips, and introspective
                reflections to build positive habits, break free from negative
                patterns, and create lasting change. Unlock your true potential
                and embrace a path of personal growth and success through our
                thought-provoking content.
              </p>
            </div>
          </div>
          <div className=" flex flex-col w-full  md:w-96 h-fit  ring-2 ring-gray-600 rounded-xl">
            <div className="text-5xl ml-7 mt-7">
              <FcOrgUnit />
            </div>
            <div className="m-7">
              <h1
                className="text-2xl mb-5 font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-blue-400 to-pink-900 "
              >
                The Compound Effect
              </h1>
              <p className="text-gray-400">
                {" "}
                Experience the profound impact of the compound effect through
                our enlightening content. Uncover how small, consistent actions
                can lead to remarkable results over time. Discover powerful
                insights, practical strategies, and reflective perspectives to
                harness the power of compounding in your life. Unlock the secret
                to achieving exponential growth and success through our
                thought-provoking materials.
              </p>
            </div>
          </div>
          <div className=" flex flex-col w-full  md:w-96 h-fit  ring-2 ring-gray-600 rounded-xl">
            <div className="text-5xl ml-7 mt-7">
              <FcAlarmClock />
            </div>
            <div className="m-7">
              <h1
                className="text-2xl mb-5 font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-orange-600 to-orange-900 "
              >
                Time Management
              </h1>
              <p className="text-gray-400">
                {" "}
                Optimize your life with effective time management techniques.
                Delve into our insightful content and discover valuable
                strategies, practical tips, and introspective reflections to
                make the most of your time. Learn to prioritize tasks, eliminate
                distractions, and achieve greater productivity. Unlock the key
                to mastering your schedule and embracing a balanced, fulfilling
                life through our thought-provoking materials.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative bottom-0 w-full bg-zinc-950  mt-10 ">
        <div className="border-t border-gray-600"></div>

        <div className="flex flex-col text-gray-400 mt-20 items-center ">
          {" "}
          <Image
            width={40}
            height={40}
            src="/images/Bd-1-white.png"
            alt="Login"
          />{" "}
          <p className="font-bold m-2">Blog Bureau</p>
          <p>&copy; 2023 Kennedy Inc.</p>
        </div>
        <div className="flex mb-10 flex-col mt-3 items-center">
          <div className=" flex p-1 divide-x divide-gray-600 space-x-2 flex-row text-2xl w-fit h-fit rounded-2xl ring-1 ring-gray-500">
            <div className="flex space-x-2 text-gray-500 flex-row">
              <MdOutlineDarkMode />
              <MdOutlineLightMode />
            </div>
            <div className="pl-2 text-gray-500">
              <DiGithubBadge />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
