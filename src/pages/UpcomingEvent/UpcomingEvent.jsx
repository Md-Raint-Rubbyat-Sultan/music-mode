import HelmetTitle from "../../components/shared/HelmetTitle/HelmetTitle";

const UpcomingEvent = () => {
    return (
        <div>
            <HelmetTitle title="Upcoming" />
            <div className="flex flex-col md:flex-row items-start gap-6 my-12 px-4">
                <div className="flex-1">
                    <img className="w-3/4 mx-auto" src="https://cdn-az.allevents.in/events5/banners/1fe1d3a9cfcce1570b1f6e395855a1fe75ad76a835f9b3134f5da3818628f3b4-rimg-w960-h541-gmir.jpg?v=1696370914" alt="upcoming event image" />
                    <div className="my-6 space-y-6 text-center">
                        <h3 className="text-3xl font-semibold">A Night With JAMES (GURU)</h3>
                        <p>Ticket Price: $30.00 (assumed)</p>
                        <div className="flex justify-center items-center gap-2">
                            <p className="font-semibold">Rete Event:</p>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" checked readOnly />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 space-y-4">
                    <h3 className="text-3xl">Event Details:</h3>
                    <p>Rock star James will perform at Coke Studio Bangla concert at the Army Stadium in the capital on June 9. The concert will also feature popular bands including Warfaze, Nemesis, Lalon, Jalali Set and others.

                        The concert will start at 4:00pm and will continue till 9:00pm. Music lovers can collect their tickets through the Coke Studio Bangla Live website.

                        Coca-Cola has another attraction for the audience, as they can also take a picture with the Fifa original trophy at the event.
                        Coke Studio Bangla has released songs like &lsquo;Nasek Nasek&rsquo;, &lsquo;Prarthona&rsquo; &lsquo;Bulbuli&rsquo, and &lsquo;Chiltey Roud&rsquo;. The songs have been received huge positive responses from the audience.</p>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvent;