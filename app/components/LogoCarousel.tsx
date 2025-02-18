"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';       // For Autoplay

import { Autoplay } from 'swiper/modules';

const logos = [
  { src: "/Asia pacific management club.svg", alt: "Asia Pacific Management Club" },
  { src: "/Consulting Club.svg", alt: "Consulting Club" },
  { src: "/Economics Society.svg", alt: "Economics Society" },
  { src: "/Finance networking florence.svg", alt: "Finance Networking Florence" },
  { src: "/LSE HR.svg", alt: "LSE HR" },
  { src: "/NICASA.svg", alt: "NICASA" },
  { src: "/NTU alumni.svg", alt: "NTU Alumni" },
  { src: "/UoM psychology society.svg", alt: "UoM Psychology Society" },
  { src: "/romulus arg.svg", alt: "Romulus Arg" },
];


const LogoCarousel = () => {
  return (
    <section className="relative flex flex-col items-center justify-center mt-[80px] px-4">
      {/* Title */}
      <h2 className="text-[12px] font-bold mb-8 font-['Plus Jakarta Sans'] text-[#F3ECFE]">
        TRUSTED BY UNIVERSITY SOCIETIES GLOBALLY
      </h2>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 700 }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="w-full max-w-6xl"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={90}
              height={90}
              className="object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LogoCarousel;