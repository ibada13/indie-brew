import NavBar from "./components/NavBar"
import Body from "./components/Body"
export default function SignUp() { 
    return (
        <div className="h-screen w-screen flex flex-col items-center p-4 bg-wvio gap-y-2">
            <NavBar/>
            <Body />

        </div>
    )
}