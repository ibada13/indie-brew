import Homepic from "@/app/lib/assets/feed-mockup.png"
import Image from "next/image";
import HomeCard from "../lib/ui/Homecard";
export default function Body() { 
    return (
        <div className="flex-grow  w-4/5  flex flex-col-reverse md:flex-row items-end justify-between p-2">
            <div className="w-full md:w-1/2   md:h-full flex justify-center items-center  " >

            <HomeCard />
            </div>
            <div className="w-full md:w-1/2   md:h-full flex justify-center items-center  ">
                <Image src={Homepic} alt="pictture for home page" className="w-[19rem] "/>
            </div>
        </div>
    );
} 