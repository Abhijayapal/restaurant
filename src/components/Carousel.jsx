// slide effect at home page
import React from "react";
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import img1 from '../pics/res5.jpg'
import img2 from '../pics/res6.jpg'
import img3 from '../pics/res7.jpg'
import img4 from '../pics/res8.jpg'

const Carousel = () => {
    const settings = {
        showThumbs: false,
        showStatus: false,
        infiniteLoop: true,
        useKeyboardArrows: true,
        autoPlay: true,
        interval: 3000,
        transitionTime: 1500,
    };

    return (
        <div className="carousel-container relative z-0">
            <ResponsiveCarousel {...settings}>
                <div>
                    <img src={img1} alt="Slide 1" className="w-full h-screen" />
                </div>
                <div>
                    <img src={img2} alt="Slide 2" className="w-full h-screen" />
                </div>
                <div>
                    <img src={img3} alt="Slide 3" className="w-full h-screen" />
                </div>
                <div>
                    <img src={img4} alt="Slide 4" className="w-full h-screen" />
                </div>
            </ResponsiveCarousel>
        </div>
    );
};

export default Carousel;