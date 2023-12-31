"use client";
import Image from "next/image";

import { FcAlarmClock, FcBullish, FcMindMap, FcOrgUnit } from "react-icons/fc";
import { DiGithubBadge } from "react-icons/di";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { Nav } from "@/component/Nav";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({ x: -100 });
    }
  }, [inView]);
  return (
    <div className="flex flex-col items-center  min-h-screen ">
     
      <div className="flex  flex-col relative top-20 h-fit mb-28  items-center mt-10 md:mt-20 w-11/12 md:w-3/5">
        <motion.div
          className="flex flex-col lg:flex-row"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 2, bounce: 0.1 }}
        >
          <h1
            className="text-7xl  font-extrabold dark:shadow-xl
                     bg-clip-text dark:text-white
                    text-black
                    
                    text-center
                     "
          >
            Blog.
          </h1>
          <h1
            className="text-7xl md:text-9xl font-bold dark:shadow-xl
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-purple-600 to-pink-600
                    text-center
                     "
          >
            Bureau.
          </h1>
        </motion.div>
        <div className="w-full">
          <p className="flex text-xl flex-col text-center text-gray-700 dark:text-gray-400 mt-10">
            Unleash the power of books through powerful summaries, life changing
            insights & personal reflections
          </p>
        </div>
        <div className="flex flex-col mt-10 md:flex-row justify-center items-center  md:space-x-5 ">
          <button
            className=" relative px-4 py-3  rounded-lg bg-black dark:bg-white shadow-md drop-shadow-sm mt-5 
                        leading-none flex items-center divide-x ring-1 ring-black dark:ring-white "
          >
            <span className="px-20 md:px-8 flex items-center space-x-2">
              <span className=" text-white dark:text-black font-bold">
                Discover{" "}
              </span>
              <span className=" text-white dark:text-black font-bold">
                More{" "}
              </span>
            </span>
          </button>
          <div className="relative flex items-center justify-center w-64">
            <div className="absolute -inset-2 top-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-xl opacity-50"></div>
            <button
              className=" relative px-3 py-3 bg-balck bg-white dark:bg-black hover:bg-gradient-to-r  dark:hover:bg-gradient-to-r from-purple-600 to-pink-600  rounded-lg ring-1 ring-pink-600 mt-5 
                        leading-none flex items-center divide-x "
            >
              <span className="px-20 md:px-8  flex items-center space-x-2">
                <span className=" text-black dark:text-gray-100">Uncover </span>
                <span className="  text-black dark:text-gray-100">
                  Insights{" "}
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col   items-center  mt-36">
          <div className="flex w-2/3 flex-col items-center ">
            {" "}
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-r  from-blue-600 to-blue-400">
              <h1 className="text-black font-extrabold">1</h1>
            </div>
            <h1
              className="font-bold dark:shadow-xl mt-5 text-4xl
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-blue-600 to-blue-400
                    text-center"
            >
              Discover
            </h1>
            <p className="text-center mt-5 text-black dark:text-gray-200 text-xl">
              Explore the boundless potential of understanding in Neurology and
              Psychology, encompassing the influence of the subconscious mind,
              neurotransmitters, and brain functionality.{" "}
            </p>
          </div>

          <div className="flex w-2/3 mt-20 flex-col items-center">
            {" "}
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-r  from-purple-600 to-pink-800">
              <h1 className="text-black font-extrabold">2</h1>
            </div>
            <h1
              className="font-bold dark:shadow-xl mt-5 text-4xl
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-purple-600 to-pink-800
                    text-center"
            >
              Learn
            </h1>
            <p className="text-center mt-5 text-black dark:text-gray-200 text-xl">
              Embark on a journey of continuous learning and personal
              development. Uncover the fascinating realms of Neurology and
              Psychology, delving into the intricate workings of the
              subconscious mind, the role of neurotransmitters, and the
              complexities of brain function.
            </p>
          </div>

          <div className="flex w-2/3  mt-20 flex-col items-center">
            {" "}
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-r  from-orange-700 to-orange-400">
              <h1 className="text-black font-extrabold">3</h1>
            </div>
            <h1
              className="font-bold dark:shadow-xl mt-5 text-4xl
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-orange-700 to-orange-400
                    text-center"
            >
              Grow
            </h1>
            <p className="text-center  mt-5 text-black dark:text-gray-200 text-xl">
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
            className=" text-4xl md:text-5xl text-center lg:text-center text-black dark:text-white  font-bold bg-clip-text
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
            <br className="md:hidden" />
            <span className="text-black dark:text-white">& </span>
            <br className="md:hidden" />
            <span
              className="text-transparent bg-clip-text 
                    bg-gradient-to-t from-blue-700 to-pink-600"
            >
              Personal Reflections
            </span>
          </h1>
          <p className="mt-10 text-xl text-center text-black dark:text-gray-300">
            Empowering insights in concise form. Unleash the potential of
            powerful book summaries and personal reflections. Discover a wealth
            of knowledge distilled into bite-sized wisdom, ready to inspire and
            transform your journey of personal growth and development
          </p>
        </div>
        <div
          ref={ref}
          className="flex mt-20 flex-wrap space-y-10  items-center justify-around   w-full "
        >
          <div>
            {" "}
            <motion.div
              className=" flex flex-col w-full  md:w-96 h-fit  ring-1 ring-gray-600 rounded-xl"
              animate={animation}
            >
              <div className="text-5xl ml-7 mt-7">
                <FcMindMap />
              </div>
              <div className="m-7">
                <h1
                  className="text-2xl mb-5 font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-blue-700 to-emerald-900 "
                >
                  Self Discipline
                </h1>
                <p className="text-black dark:text-gray-400">
                  {" "}
                  Embark on a transformative journey to master self-discipline.
                  Gain valuable insights, practical tips, and introspective
                  reflections to build healthy habits, conquer procrastination,
                  and foster unwavering determination. Unlock your inner power,
                  embrace personal growth, and achieve success with our
                  thought-provoking content.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            className=" flex flex-col w-full  md:w-96 h-fit  ring-1 ring-gray-600 rounded-xl"
            animate={animation}
          >
            <div className="text-5xl ml-7 mt-7">
              <FcBullish />
            </div>
            <div className="m-7">
              <h1
                className="text-2xl mb-5 font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-emerald-700 to-emerald-900 "
              >
                Daily Habits
              </h1>
              <p className="text-black dark:text-gray-400">
                {" "}
                Embark on a life-changing journey to transform your habits.
                Discover powerful insights, actionable tips, and introspective
                reflections to build positive habits, break free from negative
                patterns, and create lasting change. Unlock your true potential
                and embrace a path of personal growth and success through our
                thought-provoking content.
              </p>
            </div>
          </motion.div>
          <motion.div
            className=" flex flex-col w-full  md:w-96 h-fit  ring-1 ring-gray-600 rounded-xl"
            animate={animation}
          >
            <div className="text-5xl ml-7 mt-7">
              <FcOrgUnit />
            </div>
            <div className="m-7">
              <h1
                className="text-2xl mb-5 font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-blue-800 to-pink-900 "
              >
                The Compound Effect
              </h1>
              <p className="text-black dark:text-gray-400">
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
          </motion.div>
          <motion.div
            className=" flex flex-col w-full  md:w-96 h-fit  ring-1 ring-gray-600 rounded-xl"
            animate={animation}
          >
            <div className="text-5xl ml-7 mt-7">
              <FcAlarmClock />
            </div>
            <div className="m-7">
              <h1
                className="text-2xl mb-5 font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-orange-500 to-orange-900 "
              >
                Time Management
              </h1>
              <p className="text-black dark:text-gray-400">
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
          </motion.div>
        </div>
        <div className="mt-20 w-full ">
          {/* comment out the horizontal line breaking the two sessions */}
          {/* <div className="border-t border-gray-600   "></div> */}
          <div>
            {" "}
            <h1
              className=" text-5xl md:text-6xl lg:text-7xl text-center  font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-blue-800 to-blue-500 mt-20 mb-28"
            >
              Featured Books
              <span className="block font-medium text-xl  text-black dark:text-gray-300 mt-10">
                Discover our collection of powerful book summaries and personal
                reflections on a wide range of topics. From self-development to
                neuroscience, we have curated a selection of thought-provoking
                reads to inspire and empower you on your journey of growth and
                learning.
              </span>
            </h1>
          </div>
          <div className=" w-full lg:w-1/2 rounded-xl h-fit bg-gray-200  dark:bg-zinc-900 dark:ring-2 ring-zinc-950 flex flex-col">
            <div className="flex justify-center items-center">
              <Image
                layout="responsive"
                objectFit="contain"
                height={100}
                width={100}
                src="/images/habits.jpg"
                alt="Login"
                className="rounded-t-xl"
              />{" "}
            </div>
            <div className="p-5 md:p-10 space-y-10">
              <h1
                className="font-bold text-2xl text-transparent bg-clip-text
                    bg-gradient-to-r from-blue-800 to-blue-500"
              >
                Atomic Habits - James Clear
              </h1>

              <div className=" text-black dark:text-gray-300 text-left">
                James Clear presents practical strategies for creating positive
                habits and breaking free from negative ones. By understanding
                the science behind habit formation, readers can make incremental
                changes that lead to significant personal growth and success.
              </div>
              <button className="rounded-3xl float-right  text-white dark:text-black transition duration-150 ease-in-out bg-gradient-to-r from-blue-800 to-blue-700 hover:bg-blue-500 px-5 py-2 drop-shadow-md shadow-xl">
                Start Reading
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative bottom-0 w-full bg-gray-50 dark:bg-zinc-950  mt-10 ">
        <div className="border-t border-gray-600"></div>

        <div className="flex flex-col text-black dark:text-gray-400 mt-20 items-center ">
          {theme === "dark" ? (
            <Image
              width={40}
              height={40}
              src="/images/Bd-1-white.png"
              alt="Login"
            />
          ) : (
            <Image
              width={40}
              height={40}
              src="/images/Bd-1-black.png"
              alt="Login"
            />
          )}
          <p className="font-bold m-2">Blog Bureau</p>
          <p>&copy; 2023 Kennedy Inc.</p>
        </div>
        <div className="flex mb-10 flex-col mt-3 items-center">
          <div className=" flex p-1 cursor-pointer divide-x divide-gray-600 space-x-2 flex-row text-2xl w-fit h-fit rounded-2xl ring-1 ring-gray-500">
            <div className="flex space-x-2 text-black dark:text-gray-500 flex-row">
              <MdOutlineDarkMode onClick={() => setTheme("dark")} />

              <MdOutlineLightMode onClick={() => setTheme("white")} />
            </div>
            <div className="pl-2 text-black dark:text-gray-500">
              <DiGithubBadge />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
