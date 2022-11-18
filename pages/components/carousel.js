import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
const carousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image alt="carousel Image" src="/8.jpg" width={1400} height={600} />

          <Carousel.Caption
            className="rounded-4"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <h3>महाकाली यातायात बहुउद्देश्यीय कम्पनी प्रा.लि</h3>
            <p>प्रधान कार्यालय: भीमदत्त नगरपालिका-४,कन्चनपुर,७</p>
            <p>Cont: 099-522491/521627</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image alt="carousel Image" src="/6.jpg" width={1400} height={600} />

          <Carousel.Caption
            className="rounded-4"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <h3>महाकाली यातायात बहुउद्देश्यीय कम्पनी प्रा.लि</h3>
            <p>प्रधान कार्यालय: भीमदत्त नगरपालिका-४,कन्चनपुर,७</p>
            <p>Cont: 099-522491/521627</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image alt="carousel Image" src="/2.jpg" width={1400} height={600} />

          <Carousel.Caption
            className="rounded-4"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <h3>महाकाली यातायात बहुउद्देश्यीय कम्पनी प्रा.लि</h3>
            <p>प्रधान कार्यालय: भीमदत्त नगरपालिका-४,कन्चनपुर,७</p>
            <p>Cont: 099-522491/521627</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default carousel;
