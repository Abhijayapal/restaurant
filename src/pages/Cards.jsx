import React from "react";
import r1 from '../pics/r1.jpg'
import r2 from '../pics/r2.jpg'
import r3 from '../pics/r3.jpg'
import r4 from '../pics/r4.jpg'
import r5 from '../pics/r5.jpg'
import r6 from '../pics/r6.jpg'
const cards=[
    {
        img:r1,
        name:'HOUSE OF MING',
        place:'Taj Mahal, New Delhi',
        desc:'Rediscover the landmark House of Ming, where Sichuan, Cantonese and Hunan cuisines are served in an eclectic, nostalgic setting inspired by its bygone dynastic namesake. Enjoy familiar and novel flavours, warm service amid architecture that is reminiscent of the Ming Dynasty. With culinary maestros in the kitchen transporting you to a different time and era, this is yet another one of the best restaurants in New Delhi',
        food:'Cuisine:Chinese',
    },
    {
        img:r2,
        name:'MACHAN',
        place:'Taj Mahal, New Delhi',
        desc:'In its new avatar, Machan showcases an extensive international à​ la carte menu. A favourite with discerning patrons since 1978, Machan is where you can enjoy perfectly executed favourites cooked with imaginative flair. ',
        food:'Cuisine:Multi-Cuisine',
    },
    {
        img:r3,
        name:'CAPTAIN-CELLAR',
        place:'Taj Mahal, New Delhi',
        desc:'Introducing an adventure extraordinaire, a treasure trove of taste and texture. Captain’s Cellar, the Capital’s only wine lounge, invites you to discover exceptional flavours and peerless experiences',
        food:'Cuisine:International',
    },
    {
        img:r4,
        name:'VARQ',
        place:'Taj Mahal, New Delhi',
        desc:'Indian cuisine comes alive at this experiential restaurant, where all five senses are engaged thanks to our expert chefs who have spun a creative web on heritage recipes. Surprising preparations, stunning plating and exceptional service make for an incredible meal at Varq, one of the best restaurants in New Delhi.',
        food:'Cuisine:Indian',
    },
    {
        img:r5,
        name:'RICKS',
        place:'Taj Mahal, New Delhi',
        desc:'An evening at Ricks comes with the promise of glamour and intrigue. Tantalize your tongue with the finest of drinks and delicious food. Our urban lounge bar is all about innovative tastes and progressive flavour profiles.gold-more-icon.',
        food:'Cuisine:Finger food',
    },
    {
        img:r6,
        name:'EMPEROR LOUNGE',
        place:'Taj Mahal, New Delhi',
        desc:'Whatever time of day, enjoy a moment of extravagance at the Emperor Lounge. Enjoy a coffee or tea, exquisite cigar, or dessert–including our handmade chocolates. Taj Mahal, New Delhi restaurants seldom come this indulgent.',
        food:'Cuisine:Multi-Cuisine',
    },   
];

const Card=({ img, name, place, desc, food})=>(
    <div className=" w-full bg-colorgolden p-4 border-r-2 rounded-3xl text- ">
        <img src={img} alt="" className="w-full h-48 object-cover rounded-3xl shadow-xl "/>
        <h2 className="p-2 text-colorgold font-semibold">{name}</h2>
        <h3 className="p-2">{place}</h3>
        <p className="p-2 text-lightviolet">{desc}</p>
        <p className="p-2 text-purecopper">{food}</p>

    </div>
);

const Cards=()=>{
    return(
        <>
        <header className="text-center p-4">
            <h1>Search for restaurant or cuisine</h1>
        </header>
        <br /> 
        
        <main>
            <div className="grid grid-cols-3 gap-10 bg-colordark m-6">
                {cards.map((card,index)=>(
                    <Card key={index} {...card}/>
                ))}
            </div>
        </main>
        <hr  className="border-t-last2 m-2"/>
        </>
        
    );
};
export default Cards;