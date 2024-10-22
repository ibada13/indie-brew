import Image from "next/image";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Marketing from "./components/Marketing";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center custom-radial-gradient p-4 gap-y-5">
      <NavBar/>
      <Body />
      <Marketing/>
      <Footer />
    </div>
  );
}
