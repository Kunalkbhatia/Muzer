import Link from "next/link";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { AuroraBackground } from "./components/ui/aurora-background";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-2 mt-28 p-20 gap-56">
        <div className="flex flex-col gap-5">
          <TextGenerateEffect words="Engage Your Viewers with muzer"/>
          <p className="text-xl mt-4 text-white">
            Muzer is a platform that allows streamers to play music or videos with their viewers, fostering a more engaging and interactive experience.
          </p>
          <div className="flex gap-5">
          <Link href="/signup" className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">Sign Up</Link>
            <Link href="" className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent uppercase border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">Learn more</Link>
          </div>
        </div>
        <div className=" border border-red-100 h-72 w-72">
              hello
        </div>
      </div>

      <AuroraBackground className="text-white p-12 flex flex-col gap-3 mt-10">
      <h6 className="text-center text-sm">Key Features</h6>
      <h2 className="text-center text-5xl">Elevate Your Streaming Experience</h2>
      <div className="flex justify-center">
        <p className="w-1/2 text-center text-lg">muzer offers a suite of features to help streamers engage with their viewers in new and exciting ways.</p>
      </div>

      <div className="flex gap-16 mt-10">
        <div className="flex flex-col gap-10 justify-evenly">
              <div>
                <h4 className="text-3xl">Synchronized Music</h4>
                <p>Allow your viewers to listen to music or watch videos together in real-time.</p>
              </div>
              <div>
                <h4 className="text-3xl">Viewer Requests</h4>
                <p>Let your viewers request songs or videos to play during your stream.</p>
              </div>
              <div>
                <h4 className="text-3xl">Voting System</h4>
                <p>Enable your viewers to vote on the next song or video to be played.</p>
              </div>
        </div>
        <div className="border border-red-100 h-72 w-72">
          hello
        </div>
      </div>
    </AuroraBackground>

    <div className="grid grid-cols-2 mt-28 p-16 gap-56">
      <div>
        <Link href="" className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
          How it Works
        </Link>
        <TextGenerateEffect words="Seamless Integration for Your Stream"/>
        <p className="text-xl mt-4">
          Muzer is designed to be easy to set up and use, allowing you to focus on engaging with your viewers.
        </p>
      </div>
      <div className=" border border-red-100 h-72 w-72">
          hello
      </div>
    </div>

    <div className="flex flex-col gap-5 mt-28 p-40">
      <h3 className="text-center text-4xl">Ready to Elevate Your Stream?</h3>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="w-1/3 text-center text-lg">Get started with Muzer and start engaging your viewers like never before.</p>
      <Link href="/signup" className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">Sign Up</Link>
      </div>
      <h6 className="text-center text-sm">Sign up to get started with muzer.</h6>
    </div>
    </> 
  );
}