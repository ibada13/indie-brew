'use client';
import Link from "next/link";
import Button from "../lib/ui/button";
import Logo from "@/app/lib/assets/logo.svg"
import Image from "next/image";
import { useState } from "react";
import { CgList } from "react-icons/cg";
export default function NavBar() { 
    const [IsNavOpen, SetNavOpen] = useState(false);
    return (
        <div className="flex relative items-center  w-4/5 text-black font-semibold">
            <div className="flex-grow  p-2">
                <Link href="/">
                    <Image src={Logo} alt="logo"  />
                </Link>
            </div>
            <div  className="w-full hidden md:flex">

            <div className="flex-grow flex  p-2 justify-end items-center gap-x-4">
                <Link href="" className="hover:text-vio transition-all duration-300 ">Pricing</Link>
                <Link href="" className="hover:text-vio transition-all duration-300 ">Support</Link>
                <Button />   
            </div>
            </div>
           
                <CgList className="self-end block md:hidden" size={35} onClick={()=>SetNavOpen(e=>!e)}/>

            
            {IsNavOpen &&<>
            <div className="w-full text-center flex flex-col absolute top-full left-0 p-2 justify-between items-center gap-x-4 bg-white rounded-lg">
                <Link href="" className="hover:text-vio transition-all duration-300 w-full ">Pricing</Link>
                <Link href="" className="hover:text-vio transition-all duration-300 w-full ">Support</Link>
                <Link href="" className="text-vio hover:text-black transition-all duration-300 w-full ">Get Started</Link>

                </div>
            </>
            }
        </div>
    );
} 