import Button from "./button";
const HomeCard = () => { 
    return (
        <div className="felx-grow h-full flex flex-col justify-start gap-y-3">
            <div>
            <p className="text-4xl font-semibold">Your weekly</p>
            <p className="text-4xl font-semibold">personal feed digest.</p>
            </div>
            <p></p>
            <Button />
            <div></div>
        </div>
    );
}

export default HomeCard