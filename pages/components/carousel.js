import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
const carousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image
            alt="carousel Image"
            src="/main.jpg"
            width={1400}
            height={600}
          />

          <Carousel.Caption
            className="rounded-4 px-3"
            style={{ backgroundColor: "red", marginBottom: "0rem" }}
          >
            <h1
              className="fw-bold  rounded-4"
              style={{ backgroundColor: "blue" }}
            >
              महाकाली यातायात बहुउद्देश्यीय कम्पनी प्रा.लि
            </h1>
            <h4 className="rounded-4 bg-white text-black fw-bold">
              प्रधान कार्यालय: भीमदत्त नगरपालिका-४,कन्चनपुर,७
            </h4>
            <h5 className="rounded-4" style={{ backgroundColor: "green" }}>
              Cont: 099-522491/521627
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            alt="carousel Image"
            src="/seat.jpg"
            width={1400}
            height={600}
          />

          <Carousel.Caption
            className="rounded-4 px-3"
            style={{ backgroundColor: "red" }}
          >
            <h1
              className="fw-bold  rounded-4"
              style={{ backgroundColor: "blue" }}
            >
              महाकाली यातायात बहुउद्देश्यीय कम्पनी प्रा.लि
            </h1>
            <h4 className="rounded-4 bg-white text-black fw-bold">
              प्रधान कार्यालय: भीमदत्त नगरपालिका-४,कन्चनपुर,७
            </h4>
            <h5 className="rounded-4" style={{ backgroundColor: "green" }}>
              Cont: 099-522491/521627
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image alt="carousel Image" src="/8.jpg" width={1400} height={600} />

          <Carousel.Caption
            className="rounded-4 px-3"
            style={{ backgroundColor: "red" }}
          >
            <h1
              className="fw-bold  rounded-4"
              style={{ backgroundColor: "blue" }}
            >
              महाकाली यातायात बहुउद्देश्यीय कम्पनी प्रा.लि
            </h1>
            <h4 className="rounded-4 bg-white text-black fw-bold">
              प्रधान कार्यालय: भीमदत्त नगरपालिका-४,कन्चनपुर,७
            </h4>
            <h5 className="rounded-4" style={{ backgroundColor: "green" }}>
              Cont: 099-522491/521627
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default carousel;
