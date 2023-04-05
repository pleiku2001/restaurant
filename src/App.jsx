import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route, useLocation } from "react-router-dom";
import Map from "./pages/Map";
import Restaurant from "./pages/Restaurant";
import ErrorPage from "./pages/ErrorPage";
import Reservation from "./pages/Reservation";
import Loader from "./pages/Loader";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 10000);
  // }, []);
  return (
    <div className="app">
      <CustomCursor />
      <AnimatePresence mode="wait" >
        {loading ? (
          <Loader setLoading={setLoading} />
        ) : (
          <>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/map" element={<Map />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
