import Link from "next/link"
const Button = () => { 
    return (
        <Link href="/signup" className="flex justify-center items-center p-3 bg-vio text-white rounded-md w-1/2   ">
            
            <p className="font-semibold">Get Started-</p>
            <p>it`&apos;`s free</p>
        </Link>
    )
}

export default Button 