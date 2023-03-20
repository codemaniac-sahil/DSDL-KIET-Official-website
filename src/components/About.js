import React from "react";
import "./css/About.css";
import Lottie from "lottie-react";
import AI from "../assets/AI.json";
import Carousel from "./Carousel";
const About = () => {
  return (
    <div>
      <div className="about-main">
        <div className="about-main2">
          <div className="about1">
            <center>
              {" "}
              <div className="about-text">About Us</div>
            </center>
            <div className="about-text-2">
              <div className="text-about">
                Welcome to DSDL, a squad dedicated to exploring the exciting
                field of Data Science and Deep Learning. The club was
                established in the year 2019, founded by Dr. Vineet Sharma [HoD
                CSE dept.] and led by Mr. Abhi Rathi, former & first President,
                and Mr. Amit Tripathi, former Vice President, with the goal of
                providing a platform for students to learn, collaborate, and
                experiment with cutting-edge technologies and techniques in this
                rapidly growing field. Now, we are a team of 150 members from a
                variety of domains, bringing diverse perspectives and skills to
                the table. We are fortunate to have the support of Dr. Vineet
                Sharma, who serves as the advisor for our club. He is a leading
                expert in the field of data science & deep learning and brings a
                wealth of knowledge and experience to our organization. His
                guidance and support have been instrumental in helping us
                achieve our goals and make a meaningful impact on the college
                community.
              </div>
              <div className="text-about-2">
                <Lottie loop={true} animationData={AI} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <center>
        {" "}
        <Carousel />
      </center>
    </div>
  );
};

export default About;
