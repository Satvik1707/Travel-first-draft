import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Service from "./routes/Service.js";
import Order from "./routes/Order.js";
import Hospital from "./routes/Hospital";
import Wheater from "./routes/Wheater.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/all-packages" element={<Service />} />
        <Route path="/hospital-packages" element={<Hospital />} />
        <Route path="/contact-us" element={<Order />} />
        <Route path="/weather" element={<Wheater />} />
      </Routes>
    </div>
  );
}

export default App;
