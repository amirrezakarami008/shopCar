"use client";
import { Col, Container, Row } from "react-bootstrap";
import { LuPhone } from "react-icons/lu";
import { TbMessages } from "react-icons/tb";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
export default function Header(){

  const textRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (textRef.current) {
      const text = textRef.current.textContent || "";
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        toast.success("شماره تماس کپی شد!", {
              position: "top-right",
              autoClose: 5000,
            });
        setTimeout(() => setCopied(false), 2000);
      })
    }
  };







    return(
            <div className="!p-0 !m-0">
      {/* هدر سایت */}
      <Container className="py-4">
        <Row className="h-14 hidden max-xl:flex">
          {/* لوگوی اصلی */}
          <Col lg={4} className="flex justify-center items-center">
            <h1 className="text-2xl font-bold" aria-label="لیفتراک حکیمی">
              <span className="sr-only">صفحه اصلی لیفتراک حکیمی</span>
              لیفتراک حکیمی
            </h1>
          </Col>

          {/* منو ناوبری */}
          <Col lg={4} className="bg-yellow-400 flex rounded-md pt-1 -mx-3 !justify-center !items-center">
            <nav aria-label="منوی اصلی">
              <ul className="flex gap-x-3 font-bold">
                <li>
                  <Link
                    href="/"
                    title="لیفتراک"
                    aria-label="رفتن به لیفتراک"
                    className="text-black no-underline hover:!text-[#292a71] hover:text-[18px] transition-all duration-150"
                  >
                    لیفتراک
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    title="جک"
                    aria-label="مشاهده جک"
                    className="text-black no-underline hover:!text-[#292a71] hover:text-[18px] transition-all duration-150"
                  >
                    جک
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    title="محصولات"
                    aria-label="مشاهده محصولات"
                    className="text-black no-underline hover:!text-[#292a71] hover:text-[18px] transition-all duration-150"
                  >
                    محصولات
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    title="وبلاگ"
                    aria-label="مشاهده وبلاگ ها"
                    className="text-black no-underline hover:!text-[#292a71] hover:text-[18px] transition-all duration-150"
                  >
                    وبلاگ
                  </Link>
                </li>
                
              </ul>
            </nav>
          </Col>

          {/* شماره تماس و دکمه مشاوره */}
          <Col lg={4} className="flex justify-center items-center">
            {/* دکمه شماره تماس */}
            <div
              role="button"
              className="p-1 rounded-xl h-12 cursor-pointer"
              aria-label="تماس با شماره 09900175567"
              title="تماس"
            >
              <Row className="">
                <Col onClick={handleCopy}>
                  <p className="text-[13px] text-gray-600">شماره تماس</p>
                  <p ref={textRef} className="font-bold text-[15px] -mt-3 -mx-3">
                  {copied ? "09900175567" : "09900175567"}
                  </p>
                </Col>
                <Col>
                  <LuPhone size={"22px"} aria-hidden="true" className='-mx-4'/>
                </Col>
              </Row>
            </div>

            {/* دکمه مشاوره رایگان */}
            <button
              className="px-2 mx-3 bg-yellow-400 flex gap-x-2 p-1 h-12 rounded-xl justify-center items-center"
              aria-label="مشاوره رایگان"
              title="مشاوره رایگان"
            >
              <TbMessages className="text-black" size={"30px"} aria-hidden="true" />
              <span className="text-black">مشاوره رایگان</span>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
    )
}