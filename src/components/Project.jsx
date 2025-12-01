import React from "react";
import projectData from "../assets/project_data";

const ProjectCard = ({ title, image, description }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
      <div className="card h-100 shadow-sm border-0 rounded-lg overflow-hidden transition duration-300 hover:shadow-lg zoom-effect">
        <div className="ratio ratio-4x3">
          <img
            src={image}
            className="card-img-top object-cover w-full"
            alt={title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/400x300/e0e0e0/555555?text=Image+Not+Found";
            }}
          />
        </div>

        <div className="card-body d-flex flex-column p-4">
          <h5 className="card-title fw-bold text-lg mb-2">{title}</h5>
          <p className="card-text flex-grow-1 text-sm  leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div id="project" className="container py-5">
      <div className="text-center mb-5 pb-3">
        <p className="text-muted fw-semibold mb-1 text-uppercase tracking-wider">
          PROJECTS
        </p>
        <h1 className="display-4 fw-bolder mb-3 text-gray-800">
          Featured Work
        </h1>
        <p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: "660px" }}
        >
          A curated selection of my recent work, showcasing technical breadth
          and creative problem-solving across software, hardware, and
          operations.
        </p>
      </div>

      <section className="row justify-content-center">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
          />
        ))}
      </section>
    </div>
  );
};

export default Project;
