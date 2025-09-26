import "./Home.css"

function Home() {
    return (
        <div id="home-landing" className="flex flex-col justify-center items-center h-[100vh]">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl p-4 font-semibold">Building Your Vision, One Piece at a Time</h1>
            <p className="text-md lg:text-lg xl:text-xl text-[var(--light-grey)]">Software Design & Development Services</p>
            <button id="build-button" className="mt-6">Let's Build!</button>
        </div>
    )

}
export default Home;