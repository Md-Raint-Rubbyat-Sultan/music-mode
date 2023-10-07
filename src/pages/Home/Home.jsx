import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";
import Carousel from "../../components/Carousel/Carousel";
import image1 from "../../assets/carouselImages/SL-123119-26540-05.jpg";
import image2 from "../../assets/carouselImages/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space.jpg";
import image3 from "../../assets/carouselImages/SL_123119_26540_09.jpg";

const Home = () => {
    const items = [image1, image2, image3];
    return (
        <div>
            <HelmetTitle title="Music-Mode" />
            <div className="mb-16">
                <Carousel items={items} />
            </div>
        </div>
    );
};

export default Home;