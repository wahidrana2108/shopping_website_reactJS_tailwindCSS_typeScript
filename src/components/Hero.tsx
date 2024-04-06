"use client";

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {

    var settings = {
        dots: true,
        Infinity: true,
        slidesToScroll: true,
        autoplay: true,
        pauseOnHover: true,
    };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "Explore the Difference",
      price: "$20",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Trending Accessories",
      mainTitle: "Modern Sunglass",
      price: "$50",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Sales Offer",
      mainTitle: "Summer Sales",
      price: "$60",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;