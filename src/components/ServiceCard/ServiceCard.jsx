import PropTypes from 'prop-types';


function ServiceCard({ service }) {
    console.log(service);
    const { FestivalName, Image, Price, ShortDescription } = service;
    return (
        <div className="card bg-black shadow-xl">
            <figure>
                <img className='h-52 w-full' loading='lazy' src={Image} alt={FestivalName} />
            </figure>
            <div className="card-body text-white space-y-6">
                <h2 className="card-title">{FestivalName}</h2>
                <p className=''>{ShortDescription.length < 200 ? ShortDescription : ShortDescription.slice(0, 200) + "..."}</p>
                <p>Coast: {Price}</p>
                <div className="card-actions justify-stat">
                    <button className="bg-yellow-500 px-4 py-2 rounded-lg font-bold uppercase">More Details</button>
                </div>
            </div>
        </div>
    );
}

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
};

export default ServiceCard;