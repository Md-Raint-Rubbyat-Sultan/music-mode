import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function ServiceCard({ service }) {
    const { FestivalName, Image, Price, ShortDescription, id } = service;

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="card bg-black shadow-xl" data-aos="fade-left">
            <figure>
                <img className='h-52 w-full' loading='lazy' src={Image} alt={FestivalName} />
            </figure>
            <div className="card-body text-white space-y-6">
                <h2 className="card-title">{FestivalName}</h2>
                <p className=''>{ShortDescription.length < 200 ? ShortDescription : ShortDescription.slice(0, 200) + "..."}</p>
                <p>Coast: {Price}</p>
                <div className="card-actions justify-stat">
                    <Link to={`/service/${id}`} className='block'>
                        <button className="bg-yellow-500 px-4 py-2 rounded-lg font-bold uppercase">More Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
};

export default ServiceCard;