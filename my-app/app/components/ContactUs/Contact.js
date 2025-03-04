import { Container, Row, Col } from "react-bootstrap";
import { IoIosCall } from "react-icons/io";
import { FaTruck } from "react-icons/fa"; // اضافه کردن آیکون کامیون برای لیفتراک
import Head from 'next/head'; // برای اضافه کردن متاتگ‌ها

function Contact() {
  return (
    <>
      <Head>
        <title>تماس با ما - لیفتراک و جک یزد</title>
        <meta name="description" content="با ما برای خرید، اجاره و تعمیر لیفتراک و جک در یزد تماس بگیرید. ارائه خدمات حرفه‌ای لیفتراک در استان یزد." />
        <meta name="keywords" content="لیفتراک, لیفتراک یزد, جک, تماس با ما, خرید لیفتراک, اجاره لیفتراک" />
      </Head>
      <section className="my-5 py-5" id="contact">
        <Container className="px-3 m-auto py-5">
          <Row
            className="my-4 text-center gap-y-10"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-2xl">
                <FaTruck size="30px" className="text-yellow-500"/>
              </span>
              <h1 className="comment-title text-2xl font-bold">تماس با ما - لیفتراک و جک یزد</h1>
            </div>
            <p>برای اطلاعات بیشتر درباره خرید، اجاره یا تعمیر لیفتراک و جک در یزد با ما تماس بگیرید</p>
          </Row>
          <Row className="pt-3 gap-y-6">
            <Col
              xl={6}
              className="order-2 pe-lg-3 px-1 !flex justify-center items-center select-none text-gray-700"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <iframe className="-mt-[100px] shadow-2xl p-2" title="نقشه لیفتراک یزد" src="https://neshan.org/maps/iframe/places/yazd-city#c31.889-54.406-12z-0p/31.888668596019855/54.36412639243247" width="600" height="500" allowFullScreen loading="lazy"></iframe>
            </Col>
            <Col xl={6} className="flex flex-col gap-y-3">
              <Row
                className="gap-y-3"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <Col lg="6" md="6" className="p-0 p-md-1">
                  <div className="shadow-contact-shadow rounded-md p-3 flex flex-col justify-center items-center">
                    <span className="my-3 border-2 text-yellow-500 border-dotted border-yellow-500 p-4 rounded-full">
                      <IoIosCall size="24" />
                    </span>
                    <h2 className="my-3 text-xl">تماس با لیفتراک یزد</h2>
                    <p><a href="tel:+983500000000" className="text-yellow-500 font-bold no-underline">۰۳۵-۶۲۱۷۰۱۳</a></p>
                  </div>
                </Col>
                <Col lg="6" md="6" className="p-0 p-md-1">
                  <div className="shadow-contact-shadow rounded-md p-3 flex flex-col justify-center items-center">
                    <span className="my-3 border-2 text-yellow-500 border-dotted border-yellow-500 p-4 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <h2 className="my-3 text-xl">ایمیل لیفتراک و جک یزد</h2>
                    <p><a href="mailto:info@liftruck-yazd.com" className="text-yellow-500">info@liftruck-yazd.com</a></p>
                  </div>
                </Col>
              </Row>
              <Row className="justify-center items-center gap-y-4">
                <Col sm={12} md={6} lg={12} className="grid gap-x-2 !gap-y-5">
                  <form>
                    <Row className="gap-y-4">
                      <Col md="6" className="!p-1">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="نام شما"
                          title="نام شما"
                          required=""
                        />
                      </Col>
                      <Col md="6" className="!p-1">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="ایمیل شما"
                          title="ایمیل شما"
                          required=""
                        />
                      </Col>
                      <Col md="12" className="!p-1">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="موضوع (مثال: استعلام قیمت لیفتراک)"
                          title="موضوع"
                          required=""
                        />
                      </Col>
                      <Col md="12" className="!p-1">
                        <textarea
                          className="form-control"
                          name="message"
                          rows="6"
                          placeholder="پیام (لطفاً جزئیات درخواست خود درباره لیفتراک یا جک را ذکر کنید)"
                          title="پیام"
                          required=""
                        ></textarea>
                      </Col>
                      <Col md="12" className="text-center p-2">
                        <button
                          type="submit"
                          title="ارسال درخواست لیفتراک"
                          className="bg-yellow-500 px-4 py-2 rounded-pill hover:bg-yellow-700 hover:text-gray-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                        >
                          ارسال درخواست لیفتراک
                        </button>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;