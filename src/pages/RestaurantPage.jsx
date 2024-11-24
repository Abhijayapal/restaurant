import React from "react";
import Carousel2 from "../components/Carousel2";
import img5 from '../pics/c1.jpg';
import img6 from '../pics/c1 (2).jpg';
import img7 from '../pics/c1 (3).jpg';
import img8 from '../pics/c1 (4).jpg';
import img9 from '../pics/c1 (5).jpg';
import img10 from '../pics/c1 (6).jpg';
import img11 from '../pics/c1 (7).jpg';

// making all restaurants 
// name, image , description
const restaurants=[
    {
        name:'Tado',
        Image:img5,
        desc:'Enjoy the taste of perfection with our exquisite selection of cakes, pastries and desserts alongside our deli counter that holds a world of savoury delights, including artisanal cheeses and premium charcuterie.',

    },{
        name:'Paranda',
        Image:img6,
        desc:'Inspired by the elements of nature, we celebrate the rich heritage of Punjab through every bite. From fragrant tandoori delights to hearty Punjabi curries and reinvented street food delights, each dish is a tribute to recipes passed down through generations, albeit with a modern twist.',
    },
    {
        name:'Celsius',
        Image:img7,
        desc:'As you bask in the balmy sunlight by the poolside, indulge in succulent grills and barbecued treats. Step into a realm where every dish is crafted with precision and passion, reflecting the diverse flavours of both local and international cuisines.',
    },{
        name:'The Blue Bar',
        Image:img9,
        desc:'Head to The Blue Bar and choose from a huge selection of cocktails, vintage wines, aged spirits and international liquors as you overlook the pool or ask our resident mixologist to concoct something just for you.',
    },{
        name:'The Tea Lounge In New Delhi',
        Image:img8,
        desc:'Relaxed yet regal, the Tea Lounge at Taj Palace, Delhi is famed for an extensive array of single-estate coffees and specialty teas from India and further afield. The temptation continues with a magnificent selection of sandwiches and patisseries.',
    },{
        name:'Loya',
        Image:img10,
        desc:'Loya is a grand gastronomic journey across the rugged north of our country. From the foothills of the Himalayas, to the Punjab and Kashmir, Loya is a confluence of flavours, techniques and culinary culture filled with long-preserved dishes, authentic recipes and time-honoured cooking styles. From the glass-fronted kitchen, watch kebabs being grilled, spices being pounded and pots bubbling with aromatic curries at this Indian restaurant in New Delhi that welcomes guests above 8 years of age.',
    },{
        name:'Machan',
        Image:img11,
        desc:'In its new avatar, Machan showcases an extensive international à​ la carte menu. A favourite with discerning patrons since 1978, Machan is where you can enjoy perfectly executed favourites cooked with imaginative flair.',
    },
];
const RestaurantPage=()=>{
    return(
        
        <div className="bg-colordark">
            <header>
                <div>
                    <hr className="  border-t-last2"/>
                    <h1 className="text-center text-high  text-4xl mt-20">RESTAURANTS IN NEW DELHI</h1>
                    <p className="text-center text-medium text-sm pl-20 pr-20 mt-10">Embark on a culinary journey at our restaurants in New Delhi, where a remarkable flavour expedition awaits. </p>
                </div>
            </header>
            <br />
            <br />
            <main>
                <Carousel2 restaurants={restaurants}/>
            </main>
            <hr className="border-t-last2"/>
        </div>

    );
};
export default RestaurantPage;