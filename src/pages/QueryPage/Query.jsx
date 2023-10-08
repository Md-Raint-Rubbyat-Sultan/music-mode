import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";

const Query = () => {
    return (
        <div>
            <HelmetTitle title="Query" />
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/K2ssXth/Electro-Fusion-Festival.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Query us!</h1>
                        <p className="mb-5">If you wanna know something about us or wanna give feed back then send it us through the input bellow.</p>
                        <p className="mb-5">Thank you!</p>
                        <div className="join">
                            <input className="input input-bordered join-item" placeholder="Email" />
                            <button className="bg-yellow-500 text-white px-2 md:px-4 join-item rounded-lg">Feed Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Query;