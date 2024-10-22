import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
export default function ArrowLink({ content, href }: { content: string, href: string }) { 
    return (
        <Link href={href} className="text-vio flex gap-x-2 items-center   text-xs">{content} <FaArrowRight size={20}/></Link>
    )
} 