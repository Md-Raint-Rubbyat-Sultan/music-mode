import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";
import Carousel from "../../components/Carousel/Carousel";
import image1 from "../../assets/carouselImages/SL-123119-26540-05.jpg";
import image2 from "../../assets/carouselImages/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space.jpg";
import image3 from "../../assets/carouselImages/SL_123119_26540_09.jpg";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Home = () => {
    // carousel items array
    const items = [image1, image2, image3];

    // load data
    const services = useLoaderData();

    return (
        <div>
            <HelmetTitle title="Music-Mode" />
            {/* carousel section */}
            <div className="mb-20">
                <Carousel items={items} />
            </div>
            {/* services section */}
            <div className="mb-20">
                <h3 className="text-3xl text-center font-semibold mb-12">Our Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 px-4 xl:px-0">
                    {
                        services.map((service, idx) => <ServiceCard
                            key={idx}
                            service={service}
                        />)
                    }
                </div>
            </div>
            {/* upcoming section */}
            <div className="mb-20">
                <h3 className="text-3xl text-center font-semibold mb-12">Upcoming Event</h3>
                <div className="flex flex-col lg:flex-row justify-center items-center bg-black rounded-xl relative">
                    <div className="flex-1 bg-yellow-500 rounded-t-lg lg:rounded-t-none">
                        <img className="w-3/4 py-8 mx-auto" src="https://cdn-az.allevents.in/events5/banners/1fe1d3a9cfcce1570b1f6e395855a1fe75ad76a835f9b3134f5da3818628f3b4-rimg-w960-h541-gmir.jpg?v=1696370914" alt="upcoming event image" />
                    </div>
                    <div className="flex-1 py-8">
                        <div className="w-3/4 mx-auto text-white space-y-6">
                            <h3 className="text-3xl font-semibold">A Night With JAMES (GURU)</h3>
                            <p>Rock star James will perform at Coke Studio Bangla concert at the Army Stadium in the capital on June 9. The concert will also feature popular bands including Warfaze, Nemesis, Lalon, Jalali Set and others...</p>
                            <Link to={'/upcoming'} className="block" >
                                <button className="bg-yellow-500 px-4 py-2 rounded-lg font-bold uppercase">click to learn more</button>
                            </Link>
                        </div>
                    </div>
                    <p className="absolute right-0 -top-2 text-yellow-500 font-semibold bg-gray-600 px-2 py-1 rounded-lg">Upcoming...</p>
                </div>
            </div>
            {/* Most asked question section */}
            <div className="mb-20">
                <h3 className="text-3xl text-center font-semibold mb-12">Most Asked Questions</h3>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Why to choose us?
                        </div>
                        <div className="collapse-content">
                            <p>We Provide you the most luxurious music show in very low coast.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Ticket Price?
                        </div>
                        <div className="collapse-content">
                            <p>We try to keep ticket price as low as possible. You can trust us we are a company doing this business from last 4 hours.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Can I have late entry?
                        </div>
                        <div className="collapse-content">
                            <p>Yes! of course. It&lsquo;s your choose when to get enter, but keep in mind that you must have to enter before the show gets end.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;