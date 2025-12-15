// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//         <h2>Welcome to the Mercedes Benz Home Page</h2>
//     </div>
//   )
// }

// export default Home


// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Home.css";


// // IMAGES
// import car1 from "../assets/Pic.jpg";
// import car2 from "../assets/Pic1.jpg";
// import car3 from "../assets/Pic2.jpg";
// import car4 from "../assets/Pic3.jpg";
// import car5 from "../assets/Pic4.jpg";

// function Home() {
//   return (
//     <div>

//       {/* ================= HERO SLIDER ================= */}
//       <Carousel fade interval={4000}>
//         <Carousel.Item>
//           <img src={car1} alt="Mercedes Sedan" style={styles.heroImg} />
//           <div style={styles.heroOverlay}>
//             <h1 style={styles.heroTitle}>The Best or Nothing</h1>
//             <p style={styles.heroSub}>Luxury Sedan Collection</p>
//             <Link to="/Model" style={styles.heroBtn}>Explore</Link>
//           </div>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img src={car2} alt="Mercedes SUV" style={styles.heroImg} />
//           <div style={styles.heroOverlay}>
//             <h1 style={styles.heroTitle}>Command Every Road</h1>
//             <p style={styles.heroSub}>SUV & G-Class Range</p>
//             <Link to="/Model" style={styles.heroBtn}>View SUVs</Link>
//           </div>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img src={car3} alt="Mercedes AMG" style={styles.heroImg} />
//           <div style={styles.heroOverlay}>
//             <h1 style={styles.heroTitle}>AMG Performance</h1>
//             <p style={styles.heroSub}>Power Meets Precision</p>
//             <Link to="/Model" style={styles.heroBtn}>Discover AMG</Link>
//           </div>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img src={car4} alt="Mercedes EQ" style={styles.heroImg} />
//           <div style={styles.heroOverlay}>
//             <h1 style={styles.heroTitle}>Electric Intelligence</h1>
//             <p style={styles.heroSub}>EQ Electric Vehicles</p>
//             <Link to="/Model" style={styles.heroBtn}>Explore EQ</Link>
//           </div>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img src={car5} alt="Mercedes Interior" style={styles.heroImg} />
//           <div style={styles.heroOverlay}>
//             <h1 style={styles.heroTitle}>Crafted Luxury</h1>
//             <p style={styles.heroSub}>Interior Excellence & Comfort</p>
//             <Link to="/contact" style={styles.heroBtn}>Mercedes Care</Link>
//           </div>
//         </Carousel.Item>
//       </Carousel>

//       {/* ================= ABOUT ================= */}
//       <section className="section">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <h2>About Mercedes-Benz</h2>
//               <p>
//                 Mercedes-Benz has shaped the future of mobility for more than
//                 130 years. Innovation, safety and luxury define every vehicle.
//               </p>
//               <p>
//                 From refined sedans to high-performance AMG and electric EQ
//                 models, excellence is our standard.
//               </p>
//               <Link to="/about" className="simple-link">Read More →</Link>
//             </div>
//             <div className="col-md-6">
//               <img src={car2} alt="about" className="img-box" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= MODELS ================= */}
//       <section className="section gray">
//         <div className="container">
//           <h2 className="center">Our Models</h2>
//           <div className="row g-4 mt-4">
//             {[
//               { title: "Sedan", img: car1 },
//               { title: "SUV", img: car2 },
//               { title: "AMG", img: car3 },
//             ].map((m, i) => (
//               <div className="col-md-4" key={i}>
//                 <div className="model-card">
//                   <img src={m.img} alt={m.title} />
//                   <h5>{m.title}</h5>
//                   <Link to="/models">View Details</Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= FEATURES ================= */}
//       {/* <section className="section">
//         <div className="container">
//           <h2 className="center">Why Mercedes-Benz</h2>
//           <div className="row g-4 mt-4">
//             {["Luxury Comfort", "Advanced Safety", "Cutting-Edge Technology"].map(
//               (f, i) => (
//                 <div className="col-md-4" key={i}>
//                   <div className="feature-box">
//                     <h5>{f}</h5>
//                     <p>
//                       Engineered with precision to deliver unmatched driving
//                       confidence and comfort.
//                     </p>
//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </section> */}

//       <section className="features-parallax">
//   <div className="features-overlay">
//     <div className="container">
//       <h2 className="center text-white">Why Mercedes-Benz</h2>

//       <div className="row g-4 mt-4">
//         <div className="col-md-4">
//           <div className="feature-card">
//             <h5>Luxury Comfort</h5>
//             <p>Crafted interiors with unmatched elegance and comfort.</p>
//           </div>
//         </div>

//         <div className="col-md-4">
//           <div className="feature-card">
//             <h5>Advanced Safety</h5>
//             <p>World-class safety systems designed to protect you.</p>
//           </div>
//         </div>

//         <div className="col-md-4">
//           <div className="feature-card">
//             <h5>Innovative Technology</h5>
//             <p>Intelligent systems that redefine driving experience.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


//       {/* ================= BLOG ================= */}
//       <section className="section gray">
//         <div className="container">
//           <h2 className="center">Latest News</h2>
//           <div className="row g-4 mt-4">
//             {[car3, car4, car5].map((img, i) => (
//               <div className="col-md-4" key={i}>
//                 <div className="blog-card">
//                   <img src={img} alt="blog" />
//                   <div className="blog-overlay">
//                     <h5>Mercedes Update {i + 1}</h5>
//                     <Link to="/blog">Read More</Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= MERCEDES CARE ================= */}
//       <section className="section dark">
//         <div className="container">
//           <p style={{ color: "#aaa5a5ff", fontSize: "50px", fontWeight: "bold" , alignItems: "center", justifyContent: "center", textAlign: "center", marginBottom: "90px" , marginTop: "30px"}}>Contact US</p>
//           <div className="row align-items-center">
//             <div className="col-md-5">
//               <h2>Mercedes-Benz Care</h2>
//               <p>
//                 Personalized assistance for your Mercedes — anytime, anywhere.
//               </p>
//               <p>📞 24/7 Support: 1800-102-9222</p>
//               <p>📧 care@mercedes-benz.com</p>
//             </div>

//             <div className="col-md-7">
//               <form className="contact-form">
//                 <input type="text" placeholder="Full Name" />
//                 <input type="email" placeholder="Email" />
//                 <input type="text" placeholder="Vehicle Model" />
//                 <textarea placeholder="How can we help you?" />
//                 <button type="submit">Submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= CSS ================= */}
//       {/* <style>{css}</style> */}
//     </div>
//   );
// }

// // /* ================= STYLES ================= */
// // const styles = {
// //   heroImg: {
// //     height: "95vh",
// //     width: "100%",
// //     objectFit: "cover",
// //   },
// //   heroOverlay: {
// //     position: "absolute",
// //     inset: 0,
// //     background: "rgba(0,0,0,0.55)",
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     color: "#fff",
// //     textAlign: "center",
// //   },
// //   heroTitle: {
// //     fontSize: "52px",
// //     fontWeight: 700,
// //   },
// //   heroSub: {
// //     fontSize: "20px",
// //     marginBottom: "25px",
// //     color: "#ddd",
// //   },
// //   heroBtn: {
// //     padding: "12px 36px",
// //     border: "1px solid #fff",
// //     color: "#fff",
// //     textDecoration: "none",
// //     borderRadius: "30px",
// //   },
// //   /* ===== FEATURES PARALLAX ===== */
// // .features-parallax {
// //   background-image: url("../assets/car4.jpg");
// //   background-size: cover;
// //   background-position: center;
// //   background-attachment: fixed;
// //   min-height: 80vh;
// //   display: flex;
// //   align-items: center;
// // }

// // .features-overlay {
// //   background: rgba(0,0,0,0.6);
// //   width: 100%;
// //   padding: 100px 0;
// // }

// // /* ===== FEATURE CARD ===== */
// // .feature-card {
// //   background: rgba(255,255,255,0.95);
// //   padding: 28px;
// //   border-radius: 16px;
// //   text-align: center;
// //   box-shadow: 0 12px 35px rgba(0,0,0,0.2);
// //   transition: 
// //     transform 0.35s ease,
// //     box-shadow 0.35s ease;
// //   cursor: pointer;
// // }

// // /* 🟢 MERCEDES STYLE HOVER */
// // .feature-card:hover {
// //   transform: translateY(-10px);
// //   box-shadow: 0 20px 50px rgba(0,0,0,0.35);
// // }

// // /* Typography */
// // .feature-card h5 {
// //   font-weight: 700;
// //   margin-bottom: 12px;
// // }

// // .feature-card p {
// //   color: #555;
// //   font-size: 15px;
// // }

// // /* Mobile safety */
// // @media (max-width: 768px) {
// //   .features-parallax {
// //     background-attachment: scroll;
// //   }
// //   .feature-card:hover {
// //     transform: none;
// //   }
// // }

// // };

// // const css = `
// // .section { padding: 90px 15px; }
// // .gray { background:#f5f5f5; }
// // .dark { background:#111; color:#fff; }
// // .center { text-align:center; }

// // .img-box {
// //   width:100%;
// //   border-radius:12px;
// // }

// // .simple-link {
// //   text-decoration:none;
// //   font-weight:600;
// // }

// // .model-card {
// //   background:#fff;
// //   padding:20px;
// //   border-radius:15px;
// //   text-align:center;
// //   box-shadow:0 10px 25px rgba(0,0,0,0.1);
// // }
// // .model-card img {
// //   width:100%;
// //   height:220px;
// //   object-fit:cover;
// //   border-radius:10px;
// // }

// // .feature-box {
// //   text-align:center;
// //   padding:20px;
// // }

// // .blog-card {
// //   position:relative;
// //   border-radius:15px;
// //   overflow:hidden;
// // }
// // .blog-card img {
// //   width:100%;
// //   height:250px;
// //   object-fit:cover;
// // }
// // .blog-overlay {
// //   position:absolute;
// //   inset:0;
// //   background:rgba(0,0,0,0.6);
// //   display:flex;
// //   flex-direction:column;
// //   align-items:center;
// //   justify-content:center;
// //   color:#fff;
// // }

// // .contact-form input,
// // .contact-form textarea {
// //   width:80%;
// //   padding:10px;
// //   margin-bottom:10px;
// //   border:none;
// //   border-radius:5px;
// // }
// // .contact-form button {
// //   width:30%;
// //   padding:12px;
// //   background:gray;
// //   border-radius:5px;
// //   color:#fff;
// //   border:none;
// // }
// // `;

// export default Home;

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
      {/* <section className="section dark">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-5">
              <h2>Mercedes-Benz Care</h2>
              <p>
                Personalized assistance for your Mercedes-Benz — anytime,
                anywhere.
              </p>
              <p>📞 24/7 Support: 1800-102-9222</p>
              <p>📧 care@mercedes-benz.com</p>
            </div>

            <div className="col-md-7">
              <form className="contact-form">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Vehicle Model" />
                <textarea placeholder="How can we help you?" />
                <button type="submit">Submit Request</button>
              </form>
            </div>

          </div>
        </div>
      </section> */}

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

