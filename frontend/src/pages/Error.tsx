import "./Error.css";
import { Link } from "react-router-dom";
import emblem from "../assets/error-emblem.png"

function Error() {
    return (
        <div id="error-page" className="flex flex-col justify-center items-center min-h-[100vh] p-10 md:p-20 text-center">
            <img src={emblem} alt="404 Not Found" className="mb-5 max-w-full h-auto animate-bounce" width={200} />
            <h1 className="text-2xl md:text-8xl font-bold">404</h1>
            <p className="mt-4">Oh oh! We can't seem to find what you're looking for.</p>
            <button id="return-home-button" className="mt-8"><Link to="/">Return Home</Link></button>
        </div>
    );
}

export default Error;
