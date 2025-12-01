import React, { useState } from "react";
import CONTACT_INFO from "../assets/contact_info";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const WHATSAPP_NUMBER = "6285711539921";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
      `Halo Arvi, saya ingin berdiskusi:\n\n` +
      `Nama: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Pesan:\n${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div id="contact" className="container py-5">
      <div className="mb-2 text-uppercase fw-medium">CONTACT</div>
      <h1 className="fw-bold mb-5 display-4">Get In Touch With Me</h1>

      <div className="row g-5">
        <div className="col-lg-6 col-12">
          <p className="mb-4 fs-5">
            I'm always open to discuss Project and new opportunities.
          </p>

          <div className="d-flex flex-column gap-3 my-4">
            {CONTACT_INFO.map((item, index) => (
              <div key={index} className="d-flex align-items-center">
                <i className={`bi ${item.icon} me-3 fs-5`}></i>
                <span className="fw-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
            <input
              className="form-control form-control-lg"
              placeholder="Your Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="form-control form-control-lg"
              placeholder="Your Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              className="form-control form-control-lg"
              placeholder="Your Message"
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="btn btn-primary btn-lg">
              Send Message via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
