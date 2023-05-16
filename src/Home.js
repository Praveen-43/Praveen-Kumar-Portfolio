import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Profile from "./Profile";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FcDownload } from "react-icons/fc";

import { SiGmail } from "react-icons/si";
import Profile2 from "./Profile2";
function Home({ data }) {
  useEffect(() => {
    AOS.init({ delay: 1500 });
  }, []);
  return (
    <>
      <section className=" container " id="home">
        <div className="row row-cols-lg-2 row-cols-sm-1 mt-md-5 mt-5">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="name fingerpaint mw-100 m-auto col m-sm-auto"
          >
            <h3
              className={` ${
                data ? "textColor-dark" : "text-dark"
              } trispace intro`}
            >
              Hello! 👋 Mate
            </h3>
            <h1 className={` ${data ? "textColor-dark" : "text-dark"} `}>
              PRAVEEN here,
            </h1>

            {/* TypingFont */}
            <div className="fs-5 fs-sm-6 trispace p-0 m-0 typewriter">
              <Typewriter
                options={{
                  strings: [`Full-Stack Developer`, "I Build Websites!"],
                  autoStart: true,
                  loop: true,
                  fontFamily: "Trispace",
                }}
              />
            </div>
            <h6
              className={` ${
                data ? "textColor-dark" : "text-dark"
              } trispace quote mt-2`}
            >
              A self-taught developer with an interest in Technologies.
            </h6>
            <div className="mt-lg-3 mt-auto fs-1 icons">
              <FaGithub
                className={`github`}
                color={` ${data ? "#a2a1a6" : "black"} `}
                onClick={() =>
                  window.open("https://github.com/Praveen-43", "_blank")
                }
              />{" "}
              <FaLinkedin
                className={`linkedin`}
                color={` ${data ? "#a2a1a6" : "black"} `}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/praveen-kumar-v-a140b66a/",
                    "_blank"
                  )
                }
              />{" "}
              <SiGmail
                className={`gmail`}
                color={` ${data ? "#a2a1a6" : "black"} `}
                onClick={() =>
                  window.open("mailto:mechpraveen755@gmail.com", "_blank")
                }
              />{" "}
              <FcDownload
                onClick={() =>
                  window.open(
                    "https://app.luminpdf.com/viewer/6443d997d014bc163ffd639a",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="mw-50 m-auto profile col d-lg-inline d-md-none d-none  "
          >
            <Profile className="control" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="d-lg-none d-md-block profile2"
          >
            <Profile2 />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
