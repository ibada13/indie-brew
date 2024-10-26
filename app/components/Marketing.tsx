import ArrowLink from "../lib/ui/ArrowLink"
import Image from "next/image"
import socialmedia from "@/app/lib/assets/social-media-icons.png"
import phonePic from "@/app/lib/assets/phone-mockup.png"
export default function Marketing() {
    return (
        <div className="bg-white flex flex-col gap-y-7 justify-between items-center p-2 w-4/5">
            <div className="h-screen md:h-1/3 flex flex-col-reverse md:flex-row items-center justify-between">
                    <div className=" w-full md:w-1/2 h-full flex flex-col gap-y-2 ">
                        <p className="font-bold text-xl"> Lorem  amet consectetur adipisicing elit. Perspiciatis, rerum!</p>
                        <p className="text-xs font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt repellendus, voluptatum officiis atque ea ad ipsum. Accusamus dignissimos at incidunt.</p>
                        <ArrowLink href="" content="See full list of resuourse"/>
                    </div>
                <div className="w-full md:w-1/3 h-full flex  justify-center items-center ">
                <Image src={socialmedia} alt="social media companies " className=""/>
                </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-between basis-full h-3/5 gap-y-4">
                <div className="flex justify-center items-center w-full md:w-1/3">
                    <Image src={phonePic} alt="cool phone picture" />
                </div>
                    <div className=" w-full md:w-1/2 flex flex-col gap-y-2 ">
                        <p className="font-bold text-xl"> Lor sit amet. adipisicing elit. Perspiciatis, rerum!</p>
                        <p className="text-xs font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt repellendus, voluptatum officiis atque ea ad ipsum. Accusamus dignissimos at incidunt.</p>
                        <ArrowLink href="" content="Sign up for the waitlist"/>
                    </div>
            </div>
        </div>
    )
}
