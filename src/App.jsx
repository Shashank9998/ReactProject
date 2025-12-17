// import './App.css';
// import Header from './Component/Header';


// function App() {
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Model from './Pages/Model';
import Sedan from "./Pages/Sedan";
import SUV from "./Pages/SUV";
import AMG from "./Pages/AMG";
import EQ from "./Pages/EQ";

function App() {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Header />
        {/* <Home /> */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/model" element={<Model />} />
            <Route path="/sedan" element={<Sedan />} />
            <Route path="/suv" element={<SUV />} />
            <Route path="/amg" element={<AMG />} />
            <Route path="/eq" element={<EQ />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
