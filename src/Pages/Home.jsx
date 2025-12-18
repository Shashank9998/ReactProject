import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

/* IMAGES */
import car1 from "../assets/Pic.jpg";
import car2 from "../assets/Pic1.jpg";
import car3 from "../assets/Pic2.jpg";
import car4 from "../assets/Pic3.jpg";
import car5 from "../assets/Pic4.jpg";
import car6 from "../assets/Pic5.jpg";
import car7 from "../assets/Pic6.jpg";
import car8 from "../assets/Pic7.jpg";
import car9 from "../assets/Pic8.jpg";
import car10 from "../assets/Pic9.jpg";

function Home() {
  return (
    <div>

      {/* ================= HERO SLIDER ================= */}
      <Carousel fade interval={4000}>
        <Carousel.Item>
          <img src={car1} alt="Mercedes Sedan" className="hero-img" />
          <div className="hero-overlay">
            <h1>The Best or Nothing</h1>
            <p>Luxury Sedan Collection</p>
            <Link to="/Model" className="hero-btn">Explore</Link>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img src={car2} alt="Mercedes SUV" className="hero-img" />
          <div className="hero-overlay">
            <h1>Command Every Road</h1>
            <p>SUV & G-Class Range</p>
            <Link to="/Model" className="hero-btn">View SUVs</Link>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img src={car3} alt="Mercedes AMG" className="hero-img" />
          <div className="hero-overlay">
            <h1>AMG Performance</h1>
            <p>Power Meets Precision</p>
            <Link to="/Model" className="hero-btn">Discover AMG</Link>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img src={car4} alt="Mercedes EQ" className="hero-img" />
          <div className="hero-overlay">
            <h1>Electric Intelligence</h1>
            <p>EQ Electric Vehicles</p>
            <Link to="/Model" className="hero-btn">Explore EQ</Link>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img src={car5} alt="Mercedes Interior" className="hero-img" />
          <div className="hero-overlay">
            <h1>Crafted Luxury</h1>
            <p>Interior Excellence & Comfort</p>
            <Link to="/contact" className="hero-btn">Mercedes Care</Link>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* ================= ABOUT ================= */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>About Mercedes-Benz</h2>
              <p>
                Mercedes-Benz stands for luxury, innovation and engineering
                excellence. Every vehicle is crafted with precision to deliver
                unmatched comfort and performance.
              </p>
              <p>
                From timeless sedans to powerful AMG and electric EQ models,
                Mercedes-Benz defines the future of mobility.
              </p>
              <Link
                to="/about"
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1.5rem",
                  backgroundColor: "#0d6efd",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "0.25rem",
                  marginTop: "1rem",
                }}
              >
                Learn more
              </Link>
            </div>

            <div className="col-md-6">
              <img
                src={car2}
                alt="About Mercedes"
                className="about-image-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODELS ================= */}
      <section className="section gray">
        <div className="container">
          <h2 className="center">Our Models</h2>

            <div className="row g-4 mt-4">
          <div className="col-md-4">
            <div className="model-card">
              <img src={car4} alt="Sedan" />
              <h5>Sedan</h5>
              <p>Experience elegance and performance in every drive. Crafted with precision engineering for the ultimate luxury driving experience.</p>
              {/* <Link to="/Model" simple>View Details</Link> */}
                <Link
                  to="/Model"
                  style={{
                    // display: "inline-block",
                    // padding: "0.5rem 1.5rem",
                    // backgroundColor: "#0d6efd",
                    color: "#0d6efd",
                    // textDecoration: "none",
                    textDecoration: "underline",
                    // borderRadius: "0.25rem",
                    // marginTop: "1rem",
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="model-card">
                <img src={car7} alt="SUV" />
                <h5>SUV</h5>
                <p>Experience the perfect blend of luxury and capability with our SUV models, designed for every journey. 
                  Perfect for families and adventurers alike.
                </p>
                {/* <Link to="/Model">View Details</Link> */}
                <Link
                  to="/Model"
                  style={{
                    // display: "inline-block",
                    // padding: "0.5rem 1.5rem",
                    // backgroundColor: "#0d6efd",
                    color: "#0d6efd",
                    // textDecoration: "none",
                    textDecoration: "underline",
                    // borderRadius: "0.25rem",
                    // marginTop: "1rem",
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="model-card">
                <img src={car3} alt="AMG" />
                <h5>AMG Performance</h5>
                <p>Experience the thrill of high-performance driving with our AMG models, engineered for maximum power and precision.</p>
                {/* <Link to="/Model">View Details</Link> */}
                <Link
                  to="/Model"
                  style={{
                    // display: "inline-block",
                    // padding: "0.5rem 1.5rem",
                    // backgroundColor: "#0d6efd",
                    color: "#0d6efd",
                    // textDecoration: "none",
                    textDecoration: "underline",
                    // borderRadius: "0.25rem",
                    // marginTop: "1rem",
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES (PARALLAX) ================= */}
      <section className="features-parallax">
        <div className="features-overlay">
          <div className="container">
            <h2 className="center text-white">Why Mercedes-Benz</h2>

            <div className="row g-4 mt-4">
              <div className="col-md-4">
                <div className="feature-card">
                  <h5>Luxury Comfort</h5>
                  <p>
                    Premium interiors crafted with the finest materials for
                    unmatched comfort.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feature-card">
                  <h5>Advanced Safety</h5>
                  <p>
                    Industry-leading safety technologies designed to protect
                    you and your passengers.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feature-card">
                  <h5>Innovative Technology</h5>
                  <p>
                    Intelligent systems that redefine driving experience and
                    connectivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section className="section gray">
        <div className="container">
          <h2 className="center">Latest News</h2>

          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="blog-card">
                <img src={car3} alt="Blog 1" />
                <div className="blog-overlay">
                  <h5>AMG Innovation</h5>
                  <Link to="/blog">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="blog-card">
                <img src={car4} alt="Blog 2" />
                <div className="blog-overlay">
                  <h5>Electric Future</h5>
                  <Link to="/blog">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="blog-card">
                <img src={car5} alt="Blog 3" />
                <div className="blog-overlay">
                  <h5>Luxury Interior</h5>
                  <Link to="/blog">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="section dark">
        <div className="container">
          <h2 className="center contact-title">Contact Us</h2>
          <p className="center contact-subtitle">
            Mercedes-Benz Care — We’re here to assist you
          </p>

          <div className="row align-items-center mt-5">
            {/* LEFT INFO */}
            <div className="col-md-5 contact-info">
              <h4>Mercedes-Benz Care</h4>
              <p>
                Personalized assistance for your Mercedes-Benz — before, during and
                after ownership.
              </p>

              <div className="contact-details">
                <p><strong>📞 Phone:</strong> 1800-102-9222</p>
                <p><strong>📧 Email:</strong> care@mercedes-benz.com</p>
                <p><strong>📍 Location:</strong> India</p>
                <p><strong>🕒 Support:</strong> 24/7 Available</p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="col-md-7">
              <form className="contact-form premium-form">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" placeholder="Email Address" />
                  </div>
                </div>

                <input type="text" placeholder="Vehicle Model" />
                <textarea rows="4" placeholder="How can we help you?" />

                <button type="submit" className="send-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;

