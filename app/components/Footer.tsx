import { GiThorHammer } from "react-icons/gi";
const Footer = () => { 
    return (
        <div className="h-[30vh] w-4/5 p-2 bg-[#fdfcf9] text-xs flex">
            <div className="w-1/2 h-full flex flex-col justify-between items-start" >
                <div className=" w-2/3 flex  flex-col  gap-y-2">
                    
                <p className="font-bold">IndieBrew</p>
                <p className="font-light ">Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Quibusdam, dignissimos.</p>
                </div>
                <p className="text-nowrap font-semibold  p-2 text-sm pl-0">made with <GiThorHammer className="inline text-vio"/> in <span className="text-vio">DZ</span></p>
            </div>
            <div className="w-1/2 flex flex-col md:flex-row font-light ">
                <div className="flex ">

                <div className="flex flex-col items-center gap-y-2 flex-grow">
                    <p className="font-bold">Sitemap</p>
                    <p>Homepage</p>
                    <p>Pricing</p>
                </div>

                <div className="flex flex-col items-center gap-y-2 flex-grow">
                    <p className="font-bold">Resoures</p>
                    <p>Support</p>
                    <p>Contact</p>
                    <p>FAQ</p>
                </div>
                </div>
                <div className="flex">
                <div className="flex flex-col items-center gap-y-2 flex-grow">
                    <p className="font-bold">Company</p>
                    <p>About</p>
                    <p>customers</p>
                    <p>Blog</p>
                </div>
                <div className="flex flex-col items-center gap-y-2 flex-grow">
                    <p className="font-bold">Portfolio</p>
                    <p>HackerNews</p>
                    <p>Reddit</p>
                    <p>Twitter</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer