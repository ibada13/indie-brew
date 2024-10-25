import Image from "next/image";
import logo from "@/app/LIB/assets/logo.svg"
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
const NavBar = () => {
    return (
        <div className="flex p-2 w-4/5  items-center ">
            <div className="flex-grow p-2">
                <Image src={logo} alt="logo"/>
            </div>
            <div className="flex-grow items-center flex justify-end p-2 ">
                <Link href="/" className="flex items-center gap-x-3" >
                    <div className="flex bg-white w-8 h-8  border border-black  rounded-md  items-center justify-center"><IoIosArrowBack size={25}/></div>
                    <p className="text-sm font-semibold hidden sm:block">Back to homepage</p>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;