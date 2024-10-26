import Button from "@/app/lib/ui/button";
const Body = () => { 
    return (
        <div className="flex w-4/5 flex-col md:flex-row gap-y-12 md:gap-y-0 items-center justify-between gap-x-0 md:gap-x-12 p-4 bg-wvio">
            <div className="h-screen md:h-full flex-1 flex items-center">
                <div className="h-4/5 flex flex-col gap-y-2 text-sm ">
                <p className="font-bold text-2xl">Lorem ipsum dolor  consectetur.</p>
                <div>
                    🎈
                    <p className="font-bold inline"> Lorem, ipsum dolor.</p>
                    <p className="inline"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, expedita?</p>
                    </div>
                    <div>
                    🗞
                    <p className="font-bold inline"> Lorem, ipsum dolor.</p>
                    <p className="inline"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, expedita?</p>
                </div>
                <div>
                💡
                    <p className="font-bold inline"> Lorem, ipsum dolor.</p>
                    <p className="inline"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, expedita?</p>
                </div>
                </div>
            </div>
            <div className="h-screen md:h-full flex flex-col p-6  flex-1 bg-white gap-y-1 rounded-md">
                <p className="font-bold text-lg">Create your indieBrew account</p>
                <form action="" className="flex flex-col w-full gap-y-3">
                    <div className="flex flex-col gap-y-1"> 

                    <label htmlFor="" className="font-semibold">Email</label>
                    <input className="border border-black rounded-md p-2 focus:outline-none" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="flex flex-col gap-y-1">

                    <label htmlFor="" className="font-semibold">Full name</label>
                    <input className="border border-black rounded-md p-2 focus:outline-none" type="text" name="" id="" placeholder="Jogn Doe" />
                    </div>
                    <div className="flex flex-col gap-y-1">

                    <label htmlFor="" className="font-semibold">Password</label>
                    <input className="border border-black rounded-md p-2 focus:outline-none" type="password" name="" placeholder="at least 8 charcters" id="" />
                    </div>
                    <div className="">
                    <input type="checkbox" name="" id="" />
                    <p className="inline ml-2 text-sm">By creating an acount in indieBrew , you agree to the <span className="text-vio underline">Terms & Conditions</span></p>
                    </div>
                    <button type="submit" className="w-full p-2 bg-vio rounded-md text-white font-semibold">

                    Create an account
                    </button>
                </form>
            </div>
        </div>
    );
}


export default Body