import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import TeamCard from "./TeamCard";
import "./css/Team.css";
function Teams() {
  return (
    <>
      <div className="team-section">
        <div className="inner-team-section">
          <center>
            <div className="team-section-heading">
              {/* <h4 className="text">Our Team</h4> */}
              <h1 className="text">Meet our team</h1>
            </div>
          </center>
          <div className="team-card-container">
            <TeamCard
              imgUrl="vedika-chauhan.jpg"
              alt="vedika-chauahan"
              name="Vedika Chauhan"
              designation="President"
              linkedin_url="https://www.linkedin.com/in/vedika-chauhan-931030200"
              instagram_url="https://instagram.com/vedikachauhan2002"
              github_url=""
            />
            <TeamCard
              imgUrl="anubhav-yadav.JPG"
              alt="anbhav-yadav"
              name="Anubhav Yadav"
              designation="Vice President"
              linkedin_url="https://www.linkedin.com/in/anubhav-yadav-872a93205/"
              instagram_url="https://www.instagram.com/anubhav_7071/"
              github_url=""
            />

            <TeamCard
              imgUrl="nandini-tyagi.jpg"
              alt="nandini tyagi"
              name="Nandini Tyagi"
              designation="ML Head"
              linkedin_url="hhttps://www.linkedin.com/in/nandini-tyagi-276a75213"
              instagram_url="https://www.instagram.com"
              github_url=""
            />
            <TeamCard
              imgUrl="ujjawal-yadav.jpg"
              alt="ujjawal yadav"
              name="Ujjawal Yadav"
              designation="Deep learning Head"
              linkedin_url="https://www.linkedin.com/in/ujjwaly"
              instagram_url="https://instagram.com/ujjwal__y"
              github_url=""
            />
            <TeamCard
              imgUrl="rishabh.jpg"
              alt="rishabh"
              name="Rishabh"
              designation="Backend Head"
              linkedin_url="https://www.linkedin.com/in/rishabh-397b16202"
              instagram_url="https://instagram.com/03_rishu"
              github_url=""
            />
            <TeamCard
              imgUrl="shreyansh-gupta.jpg"
              alt="shreyansh gupta"
              name="Shreyansh Gupta"
              designation="Graphics Head"
              linkedin_url="https://www.linkedin.com/in/shreyanshishere"
              instagram_url="https://instagram.com/shreyansh.gupta.315"
              github_url=""
            />
            <TeamCard
              imgUrl="avishi-tayal.jpeg"
              alt="avishi tayal"
              name="Avishi Tayal"
              designation="Data Science Head"
              linkedin_url="https://www.linkedin.com/in/avishi-tayal-29a554216"
              instagram_url="https://instagram.com/avishitayal"
              github_url=""
            />
            <TeamCard
              imgUrl="astha-goel.jpg"
              alt="astha goel"
              name="Astha Goel"
              designation="Content Head"
              linkedin_url="https://www.linkedin.com/in/goel-astha/"
              instagram_url="https://www.instagram.com/_asthagoel_/"
              github_url=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
