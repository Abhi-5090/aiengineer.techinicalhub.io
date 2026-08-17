export default function VideoBox() {
    return (<div>
            <div className="container-full">
                <div className="hidden">
                    <h2 className="xl:text-6xl md:text-5xl text-4xl">Services</h2>
                </div>
                <video className="w-full max-h-700 object-cover" autoPlay loop muted playsInline webkit-playsinline="true" preload="auto">
                    <source src={`${import.meta.env.BASE_URL}video/video2.mp4`} type="video/mp4"/>
                </video>
            </div>
        </div>);
}
