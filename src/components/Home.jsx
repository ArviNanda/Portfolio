import React, { useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import TypeIt from "typeit";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Home = () => {
  const typeitInitialized = useRef(false);

  const handleCopy = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        Swal.fire({
          title: "Disalin!",
          text: `Username Discord ${textToCopy} berhasil disalin ke clipboard.`,
          icon: "success",
          confirmButtonText: "Oke",
          timer: 3000,
          toast: true,
          position: "top-center",
          showConfirmButton: false,
        });
      })
      .catch((err) => {
        console.error("Gagal menyalin teks: ", err);
        Swal.fire({
          title: "Gagal!",
          text: "Gagal menyalin. Pastikan Anda memberikan izin clipboard.",
          icon: "error",
        });
      });
  };

  useEffect(() => {
    if (typeitInitialized.current) {
      return;
    }

    const typeitInstance = new TypeIt("#Job", {
      lifeLike: false,
      speed: 100,
      loop: true,
      cursorChar: "|",
    })
      .type("IT Engineering")
      .pause(10000)
      .delete()
      .pause(500)
      .type("Web Developer")
      .pause(10000)
      .delete()
      .go();

    typeitInitialized.current = true;
    return () => {
      if (typeitInstance) {
        typeitInstance.destroy();
        typeitInitialized.current = false;
      }
    };
  }, []);

  return (
    <>
      <div className="container pb-5">
        <div className="row my-5 align-items-center">
          <div className="col-lg-6 col-md-12 my-5">
            <h1 className="display-2 fw-bold">Hi, I'm Arvi</h1>

            <h2 className="my-4" id="Job"></h2>

            <h3>
              I am an Informatics graduate specializing in web development, with
              proven proficiency in PHP and JavaScript. I previously held the
              position of IT support and operator at an advertising agency.
            </h3>

            <div className="d-flex my-4 gap-4">
              <div className="d-flex align-items-center">
                <i className="bi bi-geo-alt-fill fs-4 me-2"></i>
                <span className="fw-medium">Based In Jakarta</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-suitcase-lg-fill fs-4 me-2"></i>
                <span className="fw-medium">Available</span>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3 mb-5 ">
              <a
                href="#contact"
                className="d-flex align-items-center p-3 rounded-pill bg-black border-0 text-white shadow-sm hireMe text-decoration-none"
              >
                <i className="bi bi-arrow-right me-2"></i>
                <span>Hire Me</span>
              </a>
              <a
                href="/CV_Arvi.pdf"
                download="/CV_Arvi.pdf"
                className="d-flex align-items-center p-3 rounded-pill border border-2 bg-white text-black shadow-sm text-decoration-none menuHover"
              >
                <i className="bi bi-cloud-arrow-down me-2"></i>
                <span>Download CV</span>
              </a>
            </div>

            <hr className="my-1 border-1 border border-black my-3" />

            <div className="d-flex align-items-center my-4">
              <h4 className="fw-bold me-4">Social Media :</h4>
              <div className="d-flex gap-4 fs-3">
                <a
                  className="text-decorations-none follow"
                  href="https://www.instagram.com/arvi_mda"
                >
                  <i className="bi bi-instagram text-danger"></i>
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopy("#arvimda");
                  }}
                  className="text-decoration-none"
                >
                  <i className="bi bi-discord text-primary"></i>
                </a>

                <a href="https://github.com/ArviNanda">
                  <i className="bi bi-github text-dark"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 text-center">
            <div className="profile-image-wrapper">
              <img
                src="/arvi-profile.jpeg"
                alt="Arvi Muhammad"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
