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
import Link from "next/link";

export default function SwiperComponent() {
  const data = [
    {
      id: 1,
      image: "/assets/liftrak.png",
      title: "لیفتراک دست دوم در یزد",
      description: "لیفتراک دست دوم با کیفیت بالا در یزد",
    },
    {
      id: 2,
      image: "/assets/liftrak3.png",
      title: "لیفتراک جدید در یزد",
      description: "لیفتراک جدید با گارانتی معتبر در یزد",
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
            <Link href="/products/liftruck-yazd" passHref legacyBehavior>
              <a aria-label={item.title} className='no-underline'>
                <section aria-labelledby={`slide-title-${item.id}`}>
                  <Row>
                    <Col lg={6} className="lg:bg-yellow-400 xs:hidden lg:flex lg:justify-end order-1 lg:order-2">
                      <Image
                        src={item.image}
                        alt={item.description}
                        width={1000}
                        height={1000}
                        className="-me-[300px] lg:h-[600px]"
                        aria-label={item.description}
                      />
                    </Col>
                    <Col lg={6} className="!text-black  flex flex-col items-center lg:order-1">
                      <h2
                        id={`slide-title-${item.id}`}
                        className="mt-[150px] mb-[30px] text-[50px] w-[400px] text-center"
                      >
                        خرید و فروش انواع {" "}
                        <span className="font-bold">لیفتراک و جک در یزد</span>
                      </h2>
                      <div className="flex">
                        <button
                          className="px-2 mx-3 bg-yellow-400 flex gap-x-2 p-1 h-12 rounded-xl justify-center items-center"
                          aria-label="دریافت مشاوره رایگان برای لیفتراک"
                          title="مشاوره رایگان لیفتراک"
                        >
                          <TbMessages className="text-black" size={"30px"} aria-hidden="true" />
                          <span className="text-black">مشاوره رایگان</span>
                        </button>
                        <button
                          className="px-2 mx-3 bg-[#F6F6F6] flex gap-x-2 p-1 h-12 rounded-xl justify-center items-center"
                          aria-label="آدرس فروشگاه لیفتراک در یزد"
                          title="آدرس فروشگاه"
                        >
                          <span className="text-gray-900">آدرس</span>
                          <TbMapPinDown className=" text-gray-900" size={"25px"} aria-hidden="true" />
                        </button>
                      </div>
                    </Col>
                  </Row>
                </section>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}