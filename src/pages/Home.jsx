import React from 'react'
//integrate navbar ,carousel

import Carousel from '../components/Carousel';


function Home() {
  return (
    <div className="relative">
      <div className="relative inset-0 z-0">
        <Carousel />
      </div>

    </div>
  );
}
export default Home;
