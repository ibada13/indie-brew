import Link from "next/link";
import Button from "../lib/ui/button";
import Logo from "@/app/lib/assets/logo.svg"
import Image from "next/image";
export default function NavBar() { 
    return (
        <div className="flex items-center  w-4/5 text-black font-semibold">
            <div className="flex-grow  p-2">
                <Link href="/">
                    <Image src={Logo} alt="logo"  />
                </Link>
            </div>
            <div className="flex-grow flex  p-2 justify-end items-center gap-x-4">
                <Link href="" className="hover:text-vio transition-all duration-300 ">Pricing</Link>
                <Link href="" className="hover:text-vio transition-all duration-300 ">Support</Link>
                <Button />   
            </div>
        </div>
    );
} 