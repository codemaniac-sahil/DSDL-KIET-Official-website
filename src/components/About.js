import React from "react";
import Card from "./Card";
// import Carousel from "react-multi-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="about-section1">
        <div className="about-section">
          <div className="about-section-heading">
            <h1>About Us</h1>
          </div>
          <div className="about-section-content">
            <div className="about-section-text">
              <p>
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
              </p>
            </div>
            {/* <div className="about-section-img">
            <img src={require("../../src/assets/images/img123.png")} />
          </div> */}
          </div>
        </div>
      </div>
      <div className="domain-section">
        <div className="inner-domain-section">
          <div className="domain-section-heading">
            <h1>Domains</h1>
          </div>
          <div className="card-container">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              autoplay={true}
              loop={true}
            >
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  imageUrl="https://thumbs.dreamstime.com/b/machine-learning-technology-artificial-intelligence-modern-manufacturing-144923304.jpg"
                  heading="Machine Learning"
                  content="Machine learning is a subfield of artificial intelligence that involves building systems that can automatically learn from data and improve their performance without being explicitly programmed."
                  alt="machine learning"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  imageUrl="https://img.freepik.com/premium-vector/deep-learning-concept-based-design_1302-12720.jpg"
                  heading="Deep Learning"
                  content="Deep learning is a type of machine learning that uses artificial neural networks with many layers to model and solve complex problems, such as image recognition and natural language processing."
                  alt="deep learning"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  imageUrl="https://community.nasscom.in/sites/default/files/media/images/DATA%20SCIENCE%20MODEL.jpg"
                  heading="Data Science"
                  content="Data science is an interdisciplinary field that combines statistical analysis, machine learning, and computer science to extract insights and knowledge from structured and unstructured data."
                  alt="data science"
                />
              </SwiperSlide>

              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  imageUrl="https://www.oracle.com/a/tech/img/cc06-computer-vision.jpg"
                  heading="Computer Vision"
                  content="Computer vision is a field of study focused on enabling computers to interpret and understand visual information from the world around them, using techniques such as image processing and machine learning."
                  alt="computer vision"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  imageUrl="https://assets-global.website-files.com/606a802fcaa89bc357508cad/611432b386bb6d5c574f91f3_1.png"
                  heading="Backend Development"
                  content="Backend development involves building the server-side of web applications, which includes writing code that communicates with the database, handles requests, and generates dynamic content."
                  alt="backend development"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  imageUrl="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_To_Become_A_Content_Writer.jpg"
                  heading="Content Writing"
                  content="Content writing is the process of creating written material for digital or print media, such as articles, blog posts, and social media posts, with the goal of engaging and informing a specific audience."
                  alt="content writing"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  imageUrl="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  heading="Graphic Designing"
                  content="Graphic designing is the process of creating visual content, such as logos, brochures, and websites, using typography, images, and other design elements to communicate a message or idea."
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
