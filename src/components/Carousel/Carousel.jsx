import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from "prop-types";

const Carousel = ({ items }) => {
    const ref = useRef(null);
    const [currentIdx, setCurrentIdx] = useState(() => 0);
    const [currentWidth, setCurrentWidth] = useState(() => window.innerWidth < 1280 ? window.innerWidth : 1280);

    const goNext = useCallback(() => {
        (currentIdx < items.length - 1) ? setCurrentIdx((currentIdx) => currentIdx + 1) : setCurrentIdx(0);
    }, [currentIdx, items]);

    const goPrevious = () => {
        (currentIdx > 0) ? setCurrentIdx((currentIdx) => currentIdx - 1) : setCurrentIdx(items.length - 1);
    }

    const handelWindowSize = () => {
        const size = window.innerWidth;
        if (size < 1280) {
            setCurrentWidth(size);
        } else {
            setCurrentWidth(1280);
        }
    }

    useEffect(() => {
        let mount = true
        if (mount) {
            if (ref.current) {
                clearTimeout(ref.current);
            }
            ref.current = setTimeout(goNext, 3000);
            window.addEventListener("resize", handelWindowSize);
        }
        return () => {
            mount = false;
            if (!mount) {
                clearTimeout(ref.current)
            }
        };
    }, [goNext, currentWidth])

    return (
        <div className='w-full'>
            <div className='relative overflow-hidden xl:rounded-xl'>
                <div
                    className="flex items-center h-52 md:h-72 lg:h-[500px]"
                    style={{
                        width: `${currentWidth * items.length}px`
                    }}
                >
                    {
                        items.map((item, idx) =>
                            <img className='h-full transition-transform'
                                key={idx}
                                src={`${item}`}
                                alt={item.slide}
                                loading='lazy'
                                style={{
                                    width: `${currentWidth}px`,
                                    transform: `translateX(-${currentIdx * 100}%)`,
                                }}
                            />
                        )
                    }
                </div>
                <div onClick={goPrevious} className='absolute top-1/2 -translate-y-1/2 left-2 cursor-pointer z-20'>
                    <p className='text-white bg-[#00000080] text-lg lg:text-3xl font-black pt-[2px] md:pt-[3px] lg:pt-1 px-[6px] md:px-2 lg:px-3 pb-[5px] md:pb-[7px] lg:pb-[10px] rounded-full'>&larr;</p>
                </div>
                <div onClick={goNext} className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer z-20'>
                    <p className='text-white bg-[#00000080] text-lg lg:text-3xl font-black pt-[2px] md:pt-[3px] lg:pt-1 px-[6px] md:px-2 lg:px-3 pb-[5px] md:pb-[7px] lg:pb-[10px] rounded-full'>&rarr;</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                {
                    items.map((_, idx) =>
                        <div
                            onClick={() => setCurrentIdx(idx)}
                            key={idx}
                            className={`text-7xl leading-[0px] mx-[10px] cursor-pointer hover:text-white hover:border-2 hover:border-black ${(currentIdx === idx) ? "text-white border-2 border-black" : ''}`}
                        >.</div>
                    )
                }
            </div>
        </div>
    );
};

Carousel.propTypes = {
    items: PropTypes.array.isRequired,
}

export default Carousel;