// import React from 'react'

// const About = () => {
//   return (
//     <div>
//         <h2>About Mercedes Benz</h2>
//     </div>
//   )
// }

// export default About


// import React from "react";
// import { Link } from "react-router-dom";
// import "./About.css";

// import img1 from "../assets/Pic1.jpg";
// import img2 from "../assets/Pic3.jpg";
// import img3 from "../assets/Pic6.jpg";
// import img4 from "../assets/Pic8.jpg";

// const About = () => {
//   return (
//     <div className="about-page">

//       {/* ================= HERO ================= */}
//       <section className="about-hero">
//         <div className="about-hero-overlay">
//           <h1>About Mercedes-Benz</h1>
//           <p>The symbol of luxury, innovation & performance</p>
//         </div>
//       </section>

//       {/* ================= INTRO ================= */}
//       <section className="about-section">
//         <div className="container about-grid">
//           <div>
//             <h2>Who We Are</h2>
//             <p>
//               Mercedes-Benz is a global icon of luxury automobiles, renowned for
//               innovation, safety, and engineering excellence. For decades, we
//               have defined what premium mobility truly means.
//             </p>
//             <p>
//               From handcrafted interiors to cutting-edge electric technology,
//               every Mercedes-Benz vehicle is built to exceed expectations and
//               deliver unmatched driving pleasure.
//             </p>
//             <Link to="/Model" className="about-btn">Explore Our Models</Link>
//           </div>

//           <div>
//             <img src={img1} alt="Mercedes Vision" />
//           </div>
//         </div>
//       </section>

//       {/* ================= TIMELINE ================= */}
//       <section className="about-section dark">
//         <h2 className="center">Our Legacy</h2>

//         <div className="timeline">
//           <div className="timeline-item">
//             <span>1886</span>
//             <p>The first automobile is invented by Karl Benz.</p>
//           </div>

//           <div className="timeline-item">
//             <span>1950s</span>
//             <p>Mercedes-Benz becomes a global symbol of luxury & safety.</p>
//           </div>

//           <div className="timeline-item">
//             <span>1999</span>
//             <p>AMG performance division expands worldwide.</p>
//           </div>

//           <div className="timeline-item">
//             <span>2020+</span>
//             <p>Electric EQ models redefine the future of mobility.</p>
//           </div>
//         </div>
//       </section>

//       {/* ================= VALUES ================= */}
//       <section className="about-section gray">
//         <h2 className="center">Our Core Values</h2>

//         <div className="values-grid">
//           <div className="value-card">
//             <h4>Luxury Craftsmanship</h4>
//             <p>
//               Every detail is meticulously designed using premium materials and
//               world-class craftsmanship.
//             </p>
//           </div>

//           <div className="value-card">
//             <h4>Innovation</h4>
//             <p>
//               From autonomous driving to electric intelligence, innovation is at
//               the heart of Mercedes-Benz.
//             </p>
//           </div>

//           <div className="value-card">
//             <h4>Safety</h4>
//             <p>
//               Industry-leading safety technologies designed to protect lives on
//               every journey.
//             </p>
//           </div>

//           <div className="value-card">
//             <h4>Performance</h4>
//             <p>
//               AMG performance models deliver unmatched power, speed and
//               precision.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= PARALLAX ================= */}
//       <section className="about-parallax">
//         <div className="about-parallax-overlay">
//           <h2>Designed for the Future</h2>
//           <p>
//             Intelligent, sustainable and breathtaking — the future of driving
//             starts here.
//           </p>
//         </div>
//       </section>

//       {/* ================= EXPERIENCE ================= */}
//       <section className="about-section">
//         <div className="container about-grid reverse">
//           <div>
//             <img src={img3} alt="Mercedes Interior" />
//           </div>

//           <div>
//             <h2>The Mercedes Experience</h2>
//             <p>
//               Owning a Mercedes-Benz is more than driving a car — it’s an
//               experience. From personalized services to premium interiors, we
//               ensure comfort and excellence at every step.
//             </p>
//             <p>
//               Our commitment extends beyond ownership, offering 24/7 support,
//               advanced diagnostics and world-class customer care.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= GALLERY ================= */}
//       <section className="about-section gray">
//         <h2 className="center">Design & Innovation</h2>

//         <div className="gallery">
//           <img src={img1} alt="Design 1" />
//           <img src={img2} alt="Design 2" />
//           <img src={img3} alt="Design 3" />
//           <img src={img4} alt="Design 4" />
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="about-cta">
//         <h2>The Best or Nothing</h2>
//         <p>Discover the future of luxury mobility today.</p>
//         <Link to="/contact" className="cta-btn">Contact Mercedes-Benz</Link>
//       </section>

//     </div>
//   );
// };

// export default About;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./About.css";

// import img1 from "../assets/Pic1.jpg";
// import img2 from "../assets/Pic3.jpg";
// import img3 from "../assets/Pic6.jpg";

// const About = () => {
//   return (
//     <div className="about-clean">

//       {/* ================= PAGE HEADER ================= */}
//       <section className="about-header">
//         <h1>About Mercedes-Benz</h1>
//         <p>
//           A legacy of innovation, luxury and engineering excellence
//           since 1886.
//         </p>
//       </section>

//       {/* ================= INTRO ================= */}
//       <section className="about-section">
//         <div className="container two-col">
//           <div>
//             <h2>Who We Are</h2>
//             <p>
//               Mercedes-Benz is one of the world’s most respected automotive
//               brands, known for redefining luxury, performance and safety.
//               Our vehicles are designed to deliver an exceptional driving
//               experience through innovation and craftsmanship.
//             </p>
//             <p>
//               From the invention of the first automobile to today’s intelligent
//               electric vehicles, Mercedes-Benz continues to shape the future
//               of mobility.
//             </p>
//           </div>

//           <img src={img1} alt="Mercedes craftsmanship" />
//         </div>
//       </section>

//       {/* ================= STATS ================= */}
//       <section className="about-stats">
//         <div>
//           <h3>130+</h3>
//           <span>Years of Heritage</span>
//         </div>
//         <div>
//           <h3>100+</h3>
//           <span>Countries Worldwide</span>
//         </div>
//         <div>
//           <h3>Millions</h3>
//           <span>Vehicles Delivered</span>
//         </div>
//         <div>
//           <h3>24/7</h3>
//           <span>Customer Support</span>
//         </div>
//       </section>

//       {/* ================= PHILOSOPHY ================= */}
//       <section className="about-section light">
//         <div className="container two-col reverse">
//           <img src={img2} alt="Mercedes design philosophy" />

//           <div>
//             <h2>Our Philosophy</h2>
//             <p>
//               At Mercedes-Benz, we believe luxury is not just about design,
//               but about how technology enhances human experience.
//             </p>
//             <p>
//               Every detail — from materials to performance — is engineered
//               with precision to create comfort, confidence and control.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= VALUES ================= */}
//       <section className="about-section">
//         <h2 className="center">What Defines Us</h2>

//         <div className="values-grid">
//           <div className="value-box">
//             <h4>Luxury Craftsmanship</h4>
//             <p>
//               Premium materials and attention to detail define every vehicle.
//             </p>
//           </div>

//           <div className="value-box">
//             <h4>Innovation</h4>
//             <p>
//               Intelligent systems and forward-thinking technology lead our way.
//             </p>
//           </div>

//           <div className="value-box">
//             <h4>Safety</h4>
//             <p>
//               Industry-leading safety systems designed to protect lives.
//             </p>
//           </div>

//           <div className="value-box">
//             <h4>Performance</h4>
//             <p>
//               Powerful engineering refined by decades of racing expertise.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= EXPERIENCE ================= */}
//       <section className="about-section light">
//         <div className="container two-col">
//           <div>
//             <h2>The Mercedes-Benz Experience</h2>
//             <p>
//               Owning a Mercedes-Benz means experiencing excellence beyond
//               the vehicle itself. From purchase to after-sales service,
//               our customers receive world-class support and care.
//             </p>
//             <p>
//               Our commitment ensures peace of mind, reliability and a
//               premium ownership journey.
//             </p>

//             <Link to="/Model" className="btn-primary">
//               Explore Our Models
//             </Link>
//           </div>

//           <img src={img3} alt="Mercedes interior luxury" />
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="about-cta">
//         <h2>The Best or Nothing</h2>
//         <p>Discover what makes Mercedes-Benz truly exceptional.</p>
//         <Link to="/contact" className="btn-outline">
//           Contact Us
//         </Link>
//       </section>

//     </div>
//   );
// };

// export default About;


import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

import img1 from "../assets/Pic1.jpg";
import img2 from "../assets/Pic3.jpg";
import img3 from "../assets/Pic6.jpg";

const About = () => {
  return (
    <div className="about-clean">

      {/* ================= PAGE HEADER ================= */}
      <section className="about-header">
        <h1>About Mercedes-Benz</h1>
        <p>
          A legacy of innovation, luxury and engineering excellence since 1886.
        </p>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="about-section">
        <div className="container two-col">
          <div>
            <h2>Who We Are</h2>
            <p>
              Mercedes-Benz is one of the world’s most respected automotive
              brands, setting benchmarks in luxury, performance and safety.
            </p>
            <p>
              From the invention of the first automobile to today’s intelligent
              electric vehicles, we continue to shape the future of mobility.
            </p>
          </div>

          <img src={img1} alt="Mercedes craftsmanship" />
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="about-stats">
        <div>
          <h3>130+</h3>
          <span>Years of Heritage</span>
        </div>
        <div>
          <h3>100+</h3>
          <span>Countries Worldwide</span>
        </div>
        <div>
          <h3>Millions</h3>
          <span>Vehicles Delivered</span>
        </div>
        <div>
          <h3>24/7</h3>
          <span>Customer Support</span>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="about-section light">
        <div className="container two-col reverse">
          <img src={img2} alt="Mercedes design philosophy" />

          <div>
            <h2>Our Philosophy</h2>
            <p>
              Luxury is not just design — it is how technology enhances human
              experience through comfort, confidence and control.
            </p>
            <p>
              Every detail is engineered with precision to deliver a refined and
              intelligent driving experience.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="about-section">
        <h2 className="center">What Defines Us</h2>

        <div className="values-grid">
          <div className="value-box">
            <h4>Luxury Craftsmanship</h4>
            <p>Premium materials and attention to detail.</p>
          </div>

          <div className="value-box">
            <h4>Innovation</h4>
            <p>Forward-thinking technology and intelligent systems.</p>
          </div>

          <div className="value-box">
            <h4>Safety</h4>
            <p>Industry-leading safety designed to protect lives.</p>
          </div>

          <div className="value-box">
            <h4>Performance</h4>
            <p>Powerful engineering refined by racing expertise.</p>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="about-section light">
        <div className="container two-col">
          <div>
            <h2>The Mercedes-Benz Experience</h2>
            <p>
              From purchase to after-sales service, Mercedes-Benz delivers a
              premium ownership journey built on trust and excellence.
            </p>
            <p>
              Our commitment ensures peace of mind, reliability and world-class
              customer care.
            </p>

            <Link to="/Model" className="btn-primary">
              Explore Our Models
            </Link>
          </div>

          <img src={img3} alt="Mercedes interior luxury" />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta">
        <h2>The Best or Nothing</h2>
        <p>Discover what makes Mercedes-Benz truly exceptional.</p>
        <Link to="/contact" className="btn-outline">
          Contact Us
        </Link>
      </section>

    </div>
  );
};

export default About;
