import Homepic from "@/app/lib/assets/feed-mockup.png"
import Image from "next/image";
import HomeCard from "../lib/ui/Homecard";
export default function Body() { 
    return (
        <div className="flex-grow w-4/5  flex items-center justify-between ">
            <HomeCard />
            <div className="w-1/2 h-full bg-red-500">
                <Image src={Homepic} alt="pictture for home page" className="w-80 "/>
            </div>
        </div>
    );
} 