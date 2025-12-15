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
import Model from './Pages/Model/Model';
import Sedan from "./Pages/Model/Sedan";
import SUV from "./Pages/Model/SUV";
import AMG from "./Pages/Model/AMG";
import EQ from "./Pages/Model/EQ";

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
        <Header modelPages={[
          { name: "Sedan", link: "/model/sedan" },
          { name: "SUV", link: "/model/suv" },
          { name: "AMG Performance", link: "/model/amg" },
          { name: "EQ Electric", link: "/model/eq" },
        ]}/>
        {/* <Home /> */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/model" element={<Model />} />
            <Route path="/model/sedan" element={<div>Sedan</div>} />
            <Route path="/model/suv" element={<div>SUV</div>} />
            <Route path="/model/amg" element={<div>AMG Performance</div>} />
            <Route path="/model/eq" element={<div>EQ Electric</div>} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
