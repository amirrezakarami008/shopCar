"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { TbMessages } from "react-icons/tb";
import { TbMapPinDown } from "react-icons/tb";
export default function SwiperComponent() {
  const data = [
    {
      id: 1,
      image:
        "/assets/liftrak.png" ,
      title: "Slide 1",
      description: "تصویر لیفتراک", // توضیح برای تصویر
    },
    {
      id: 2,
      image:
        "/assets/liftrak.png" ,
      title: "Slide 1",
      description: "تصویر لیفتراک", // توضیح برای تصویر
    },
  ];

  return (
    <div className="relative bg-white">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper absolute"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="h-16">
            <section aria-labelledby={`slide-title-${item.id}`}>
              <Row>
                <Col lg={6} className="lg:bg-yellow-400 xs:hidden lg:flex lg:justify-end order-1 lg:order-2">
                <Image src={item.image} alt="لیفتراک" width={1000} height={1000} className="-me-[300px]" />
                </Col>
                <Col lg={6} className="flex flex-col items-center lg:order-1">
                  <h2
                    id={`slide-title-${item.id}`}
                    className="mt-[150px] mb-[30px] xs:text-3xl text-[50px] w-[400px] text-center"
                  >
                    خرید و فروش انواع {" "}
                    <span className="font-bold">لیفتراک</span>
                  </h2>
                  <div className="flex">
                    <button
                      className="px-2 mx-3 bg-yellow-400 flex gap-x-2 p-1 h-12 rounded-xl justify-center items-center"
                      aria-label="مشاوره رایگان"
                      title="مشاوره رایگان"
                    >
                      <TbMessages
                        className="text-black"
                        size={"30px"}
                        aria-hidden="true"
                      />
                      <span className="text-black">مشاوره رایگان</span>
                    </button>
                    <button
                      className="px-2 mx-3 bg-[#F6F6F6] flex gap-x-2 p-1 h-12 rounded-xl justify-center items-center"
                      aria-label="آدرس"
                      title="آدرس"
                    >
                      <span className="text-gray-900">آدرس</span>
                      <TbMapPinDown
                        className=" text-gray-900"
                        size={"25px"}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Col>
              </Row>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
//اضافع کردن brack point xs