import Button from "./button";
import Image from "next/image";
import customers from "@/app/lib/assets/user-avatars.svg"
const HomeCard = () => { 
    return (
        <div className="w-full h-4/5 flex flex-col justify-start gap-y-4">
            <div>
            <p className="text-4xl font-semibold">Your weekly</p>
            <p className="text-4xl font-semibold">personal feed digest.</p>
            </div>
            <p className="font-light text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta accusamus molestiae doloremque porro veritatis hic consequatur .</p>
            <Button />
            <div className="flex flex-col gap-y-2">
            <Image className="w-1/2" src={customers} alt="customers pics"/>
                <p className="text-xs font-light">Join <span className="text-vio font-bold">19265646</span> indieberews in curating personal digest </p>
            </div>
        </div>
    );
}

export default HomeCard