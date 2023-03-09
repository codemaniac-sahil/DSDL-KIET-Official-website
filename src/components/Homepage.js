import React from "react";
import "./css/Homepage.css";
import { FaRProject } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { CgScreen } from "react-icons/cg";
import { GoTerminal } from "react-icons/go";
// import Footer from "./Footer";
import Typed from "react-typed";
export default function Homepage() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <>
      <div className="hero-section1">
        <center>
          <div className="hero-section">
            <div className="hero-text">
              <div className="hero-text-heading">
                <Typed
                  className="typed"
                  strings={["Data Science and Deep Learning"]}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </div>
              <center>
                <div className="hero-text-para">
                  <p>
                    The rapidly evolving, DSDL (data science and deep learning)
                    a technical club is composed mainly of Machine Learning with
                    assigned skill mentors.
                  </p>
                </div>
              </center>
              <div className="hero-section-btn">
                <button>Become a member</button>
              </div>
            </div>
          </div>
        </center>
      </div>
      <div className="work-section1">
        <div className="work-section">
          <div className="work-section-text">
            <div className="work-section-text-heading">
              <h1 className="yash_">What we do?</h1>
              <p>
                Data Science Deep Learning is an initiative to help students to
                grow their knowledge on developer technologies and more through
                peer to peer workshops and events, and gain relevant industry
                experience.
              </p>
            </div>
            <div className="work-section-img">
              <div className="project">
                <div className="img">
                  <FaRProject />
                </div>
                <div className="text2">
                  <div className="project-text-heading">
                    <h3>Projects</h3>
                  </div>
                  <div className="project-text-text">
                    Projects with a social impact that help a lot of people.
                  </div>
                </div>
              </div>

              <div className="project">
                <div className="img">
                  <TfiCup />
                </div>
                <div className="text2">
                  <div className="project-text-heading">
                    <h3>Hackathons</h3>
                  </div>
                  <div className="project-text-text">
                    Dream. Explore. Wonder. Build it Together.
                  </div>
                </div>
              </div>

              <div className="project">
                <div className="img">
                  <CgScreen />
                </div>
                <div className="text2">
                  <div className="project-text-heading">
                    <h3>Webinars</h3>
                  </div>
                  <div className="project-text-text">
                    Join live coding sessions and AMAs to explore.
                  </div>
                </div>
              </div>

              <div className="project">
                <div className="img">
                  <GoTerminal />
                </div>
                <div className="text2">
                  <div className="project-text-heading">
                    <h3>Bootcamps</h3>
                  </div>
                  <div className="project-text-text">
                    Learn & Implement with us in detailed bootcamps.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
