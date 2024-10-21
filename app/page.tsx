import Image from "next/image";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center custom-radial-gradient p-4">
      <NavBar/>
      <Body />
    </div>
  );
}
