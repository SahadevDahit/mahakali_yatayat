import React from "react";
import Image from "next/image";

const aboutUs = () => {
  return (
    <div
      className="w-100 h-100 d-grid fw-bold text-white"
      style={{ backgroundColor: "blue", placeItems: "center" }}
    >
      <div
        className="card my-5 d-grid pt-4 fw-bold fs-5"
        style={{
          width: "40rem",
          placeItems: "center",
          backgroundColor: "rgba(0,0,0,0.3",
        }}
      >
        <Image alt="carousel Image" src="/6.jpg" width={450} height={200} />

        <div className="card-body">
          <h5 className="card-title">
            महाकाली यातायात बहुउद्देश्यीय कम्पनी प्रा.लि
          </h5>
          <ul>
            <li>Registration Code: 191752</li>
            <li>Date of Establishment: 2075-3-1</li>
            <li>Address: भीमदत्त नगरपालिका-४,कन्चनपुर,७</li>
            <li>Contact: 099-522491/521627</li>
          </ul>
        </div>
      </div>

      <div
        className="card mb-3 "
        style={{ maxWidth: "60rem", backgroundColor: "rgba(0,0,0,0.3" }}
      >
        <h2 className="card-title text-center pt-3">Services And Facilities</h2>
        <div className="row g-0">
          <div className="col-md-4 ps-2">
            <Image alt="carousel Image" src="/2.jpg" width={240} height={150} />
            <div className="p-2">
              <ul>
                <li>
                  46 seater Suspension Super-Ac with attach washroom and
                  slepeer.
                </li>
                <li>42 seater Suspension Supper-Ac/Normal-Ac</li>
                <li>
                  40 seater Suspension/Non-Suspension Deluxe/Mini coach etc.
                </li>
                <li>First Aid Facility</li>
                <li>Insurance facility</li>
                <li>
                  During accident, full treatment given to the injured
                  passengers.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div>
                <h3>Travel Routes Inside Nepal</h3>
                <ul>
                  <li>Mahendrangar to Kathmandu</li>
                  <li>
                    Mahendranagar to
                    Mechi-Kakarvitta/Illam/Jhapa/Birgunj/Biratnagar
                  </li>
                  <li>Mahendranagar to Pokhara/Muglin/Palpa/Syangja</li>
                  <li>Mahendrangar to Butwal/Bhairawa/Narayangad/heatauda/</li>
                  <li>
                    Mahendrangar to
                    Dadeldhura/Baitadi/Bajura/Bajhang/Darchula/Achham/Silgadhi
                  </li>
                  <li>Mahendrangar to Pyuthan/Surkhet/Kalikot</li>
                </ul>
              </div>
              <div>
                <h3>Travel Routes to India</h3>
                <ul>
                  <li>Mahendrangar to Delhi</li>
                  <li>Mahendranagar to Deheradhun</li>
                  <li>Mahendranagar to Punjab (Comming soon)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
