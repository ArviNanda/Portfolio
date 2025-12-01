import React from "react";

const navItems = [
  { name: "Home", icon: "bi-house-door", link: "#top" },
  { name: "About", icon: "bi-person-vcard", link: "#about" },
  { name: "Project", icon: "bi-folder2", link: "#project" },
  { name: "Contact", icon: "bi-envelope", link: "#contact" },
];

const Header = () => {
  return (
    <header className="container-fluid mt-5 d-flex justify-content-center sticky-top">
      <nav className="navbar navbar-expand-lg shadow py-3 px-5 rounded-pill border border-2 fs-6 bg-white justify-content-center">
        <div className="d-lg-none"></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-lg-none"></div>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <div className="d-flex flex-wrap">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="d-flex rounded-pill align-items-center justify-content-center p-4 menuHover flex-grow-1 mx-2 text-dark text-decoration-none"
              >
                <i className={`bi ${item.icon} me-2`}></i>
                <span className="">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
