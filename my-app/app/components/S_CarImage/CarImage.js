"use client";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { BsCartCheck } from "react-icons/bs";

export default function CarImage() {
  const data = [
    {
      id: 1,
      image: '/assets/liftrak.png',
      title: 'لیفتراک 5 تن',
    },
    {
      id: 2,
      image: '/assets/liftrak2.png',
      title: 'لیفتراک 3 تن تویوتا',
    },
    {
      id: 3,
      image: '/assets/liftrak3.png',
      title: 'لیفتراک 16 تن دیزل کارا',
    },
    {
      id: 4,
      image: '/assets/liftrak4.png',
      title: 'لیفتراک 3 تن برقی کارا',
    },
    {
      id: 5,
      image: '/assets/liftrak5.png',
      title: 'لیفتراک 5 تن برقی کارا',
    },
    {
      id: 6,
      image: '/assets/Jak1.png',
      title: 'لیفتراک 12 تن برقی کارا',
    }
  ];

  return (
    <Container>
      <Row className="g-4 !my-[90px]">
        <h3 className="mb-5 font-bold text-3xl flex justify-center gap-x-3">
          <BsCartCheck size="35px" className="font-bold text-yellow-500" />
          <span>انواع <span className="text-yellow-500">محصولات</span></span>
          فروش
          <BsCartCheck size="35px" className="font-bold text-yellow-500" />
        </h3>
        {data.map((item, index) => (
          <Col lg={4} md={6} sm={12} key={index} className="flex justify-center gy-5">
            <div className="relative w-full h-[300px] overflow-hidden group shadow-md rounded-lg">
              {/* تصویر لیفتراک */}
              <Image
                src={item.image}
                alt="لیفتراک"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 group-hover:blur-md"
              />
              {/* لایه overlay نیمه‌شفاف */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              {/* متن روی تصویر */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:!opacity-100 transition-opacity duration-300 z-20">
                <span className="text-white text-2xl font-bold">
                  {item.title}
                </span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}