import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ABOUT_ME_DATA from "../assets/about_me_data.js";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row g-4 align-items-center">
        <div className="col-lg-7 col-12">
          <span className="mb-4">{ABOUT_ME_DATA.title}</span>

          <h1 className="mt-3 display-4 fw-bold">
            {ABOUT_ME_DATA.headline.part1} <br />
            {ABOUT_ME_DATA.headline.part2}
          </h1>

          <hr className="my-3 border-1 border border-black" />

          {ABOUT_ME_DATA.paragraphs.map((text, index) => (
            <p
              key={index}
              className={
                index < ABOUT_ME_DATA.paragraphs.length - 1 ? "mb-4" : "mb-0"
              }
            >
              {text}
            </p>
          ))}

          <h3 className="mt-4 mb-4">What Drives Me</h3>

          <div className="row g-3">
            {ABOUT_ME_DATA.drives.map((drives, index) => (
              <div
                key={index}
                className={`${drives.gridClass} zoom-effect border border-black border-2 text-center rounded-3 p-3 mx-1`}
              >
                <h4 className="fw-bold mb-1">{drives.title}</h4>
                <div>{drives.content}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-5 col-12">
          <Carousel fade indicators={false} controls={true} interval={4000}>
            {ABOUT_ME_DATA.carouselImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image.src}
                  className="d-block w-100 rounded-3 shadow-lg"
                  alt={image.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
