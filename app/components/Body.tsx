import Homepic from "@/app/lib/assets/feed-mockup.png"
import Image from "next/image";
import HomeCard from "../lib/ui/Homecard";
export default function Body() { 
    return (
        <div className="flex-grow h-screen w-4/5  flex items-end justify-between p-2">
            <div className="w-1/2 flex justify-center items-center  h-full" >

            <HomeCard />
            </div>
            <div className="w-1/2 h-full flex justify-center items-center  ">
                <Image src={Homepic} alt="pictture for home page" className="w-[19rem] "/>
            </div>
        </div>
    );
} 