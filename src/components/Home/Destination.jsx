import { useCallback, useRef, useState } from "react";
import { Text } from "../atoms/Text";
import { TopDestinationTexts } from "../particles/DataLists";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../molecules/Card";
import { Button } from "../atoms/Button";
import { AirplaneTilt, CaretLeft, CaretRight } from "@phosphor-icons/react";


export default function Destination() {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const itinerary = [
    {
      id: 1,
      title: "Bali, Indonesia",
      duration: "7 days",
      image: "bali.jpg",
      categories: {
        categoryName: "Beach",
      },
    },

    {
      id: 2,
      title: "Paris, France",
      duration: "5 days",
      image: "paris.jpg",
      categories: {
        categoryName: "City",
      },
    },

    {
      id: 3,
      title: "New York, USA",
      duration: "3 days",
      image: "newyork.jpg",
      categories: {
        categoryName: "City",
      },
    },

    {
      id: 4,
      title: "Tokyo, Japan",
      duration: "5 days",
      image: "tokyo.jpg",
      categories: {
        categoryName: "City",
      },
    },

    {
      id: 5,
      title: "Venice, Italy",
      duration: "4 days",
      image: "venice.jpg",
      categories: {
        categoryName: "City",
      },
    },
  ];

  return (
    <section className='w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 '>
      <Text
        as='h2'
        className='text-3xl font-bold tracking-tight'>
        {TopDestinationTexts.secondText}
      </Text>

      {/* Controllers  */}
      <div className='w-full flex justify-end gap-5 items-center md:px-6 px-3'>
        <Button
          onClick={previous}
          className='cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full'
          type='button'>
          <CaretLeft size={18} color='currentColor' />
        </Button>
        <Button
          onClick={next}
          className='cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full'
          type='button'>
          <CaretRight size={18} color='currentColor' />
        </Button>
      </div>

      {/* Slides  */}
      <div className='w-full h-auto mt-4'>
        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
          {itinerary.map((itinerary, index) => (
            <div key={index} className='md:px-6 px-3'>
              <Card
                cardClass='overflow-hidden shadow-md rounded-lg cursor-pointer group'
                imageAlt={itinerary.image}
                imageSrc={itinerary.image}
                imageWrapperClass='w-full h-[250px] overflow-hidden'
                cover='group-hover:scale-125 transition duration-500 ease'
                textWrapperClass='flex flex-col gap-4 w-full px-5 py-5'>
                <div className='flex justify-between items-center'>
                  <Text as='h4' className='text-base font-medium text-color3'>
                    {itinerary.title}
                  </Text>
                  <Text as='small' className=' text-color3 font-light text-sm'>
                    {itinerary.duration}
                  </Text>
                </div>
                <div className='w-full flex gap-4 items-center justify-between text-color3'>
                  <div className='flex gap-4'>
                    <AirplaneTilt size={20} color='currentColor' />
                    <Text as='p' className=' text-color3 font-light text-base'>
                      {/* {itinerary.categories.categoryName} */}
                    </Text>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
