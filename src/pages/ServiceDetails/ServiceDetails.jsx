import { useLoaderData } from "react-router-dom";
import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";

const ServiceDetails = () => {
    const singleData = useLoaderData();
    const { FestivalName, Image, Price, ShortDescription } = singleData;

    return (
        <div className="lg:h-screen">
            <HelmetTitle title="Service Details" />
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 my-12 px-4">
                <div className="flex-1">
                    <img className="w-3/4 mx-auto" src={Image} alt={FestivalName} />
                    <div className="my-6 space-y-6 text-center">
                        <h3 className="text-3xl font-semibold">{FestivalName}</h3>
                        <p>Ticket Price: {Price}</p>
                    </div>
                </div>
                <div className="flex-1 space-y-4">
                    <h3 className="text-3xl">Event Details:</h3>
                    <p>{ShortDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetails;