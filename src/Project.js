import React, { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { project, projects } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

function Project({ data }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="m-lg-5 about " id="about">
        <h1
          className={`fingerpaint about-head ${data ? "textColor-dark" : ""}`}
        >
          PROJECTS
        </h1>

        <div className="container ">
          <div className="row" data-aos="fade-down" data-aos-once="true">
            {projects.map((project) => {
              return (
                <div
                  className={`${data ? "textColor-dark" : ""}  col m-4`}
                  // data-aos="fade-down"
                  data-aos-once="true"
                >
                  <div
                    className={`${data ? "bg-transparent" : ""} card`}
                    style={{ width: "18rem" }}
                  >
                    <Player
                      className="player"
                      autoplay
                      loop
                      src={project.src}
                      style={{ height: "200px", width: "200px" }}
                      controls={true}
                    ></Player>

                    <div class="card-body">
                      <h5 class="card-title">{project.projectName}</h5>
                      <p class="card-text">{project.desc}</p>
                      <a
                        href={project.project}
                        target="_blank"
                        class={`${
                          data ? "textColor-dark" : ""
                        } btn btn-secondary m-2`}
                      >
                        View Project
                      </a>
                      {project.code.map((item) => {
                        return (
                          <a
                            href={item.source}
                            target="_blank"
                            class={`${
                              data ? "textColor-dark" : ""
                            } btn btn-secondary m-2`}
                          >
                           {item.title}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
