import React from "react";
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';


const Carousel2 = ({restaurants}) => {
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
        <div className="carousel-container relative z-10">
            <ResponsiveCarousel {...settings}>
                
            {restaurants.map((restaurant, index) => (
            // <div key={index} className="p-4">
            //     <div className=" shadow-lg rounded-lg overflow-hidden">
            //     <img src={restaurant.Image} alt={restaurant.name} className="max-h-96 max-w-96 object-cover"/>
            //     <div className="p-4">
            //         <h3 className="text-lg font-semibold">{restaurant.name}</h3>
            //         <p className="mt-2 text-center ml-20 mr-20">{restaurant.desc}</p>
            //     </div>
            //     </div>
            // </div>
            <div key={index} className="p-4 flex justify-center items-center">
                <div className=" shadow-lg rounded-lg overflow-hidden max-w-96 flex-shrink-0 ml-24">
                    <img src={restaurant.Image} alt={restaurant.name} className="max-h-96 max-w-full object-cover"/>
                </div>
                <div className="p-4 flex-1 mr-20">
                    <h3 className="text-2xl font-semibold text-new">{restaurant.name}</h3>
                    <p className="mt-2 text-center ml-20 mr-20 font-extrathin text-new">{restaurant.desc}</p>
                </div>
                
            </div>
            ))}


            </ResponsiveCarousel>
        </div>
    );
};

export default Carousel2;