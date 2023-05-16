import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import dash from "./img/menu-bar.png";
import animationData from "./animation/63004-profile-password-unlock.json";
import { Player } from "@lottiefiles/react-lottie-player";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Project from "./Project";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  var [display, setDisplay] = useState(false);

  let changeStyle = () => {
    let style = document.getElementById("style");
    let mainBg = document.getElementById("main-bg");
    if (display === true) {
      style.innerText = "🌙";

      document.body.style.backgroundColor = "#ffff";
      display = false;
      setDisplay(display);
      // console.log(display);
    } else {
      style.innerText = "☀️";
      document.body.style.backgroundColor = "#22222b";
      display = true;
      setDisplay(display);
      // console.log(display);
    }
  };

  return (
    <>
      {loading ? (
        <Player
          className="player"
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_no6msz4f.json"
          style={{ height: "500px", width: "300px" }}
          controls={true}
        ></Player>
      ) : (
        <>
          <section id="main-bg ">
            <Navbar data={display} />
            <span className="d-flex justify-content-end fixed-bottom m-3 ">
              <a
                id="style"
                className={`trigger bounce-in text-decoration-none border border rounded-circle ${
                  display ? "bg-light" : "bg-dark"
                }  p-0 m-0`}
                onClick={() => changeStyle()}
              >
                🌙
              </a>
            </span>

            {/* Home section */}

            <Home data={display} />
            {/* Horizontal Line */}
            <div className=" d-flex justify-content-center">
              <hr className=" border opacity-50 mt-5 line " />
            </div>

            {/* About section */}

            <About data={display} />
            {/* Horizontal Line */}
            <div className=" d-flex justify-content-center">
              <hr className=" border opacity-50 mt-5 line " />
            </div>
            {/* Skills section */}
            <Skills data={display} />
            {/* Horizontal Line */}
            <div className=" d-flex justify-content-center">
              <hr className=" border opacity-50 mt-5 line " />
            </div>
            <Project data={display}/>
            {/* Horizontal Line */}
            <div className=" d-flex justify-content-center">
        <hr className=" border opacity-50 mt-5 line "/>
        </div>
            <Contact data={display} />
          </section>
        </>
      )}
    </>
  );
}

export default App;
