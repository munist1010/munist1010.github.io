'use client';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Nav from "./Nav";
import Header from "./Header";
import TechStack from "./TechStack.jsx";
import Highlight from "./Highlight.jsx";
import 'swiper/css';
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full bg-[#190B46]">
      <Nav />
      <Header />
      <Swiper className="swiper">
        <SwiperSlide className="swiper-slide"></SwiperSlide>
        <SwiperSlide className="swiper-slide"></SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
      </Swiper>
      <TechStack />
      <Highlight />
    </main>
  );
}
