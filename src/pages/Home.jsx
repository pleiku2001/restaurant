import React from "react";
import Navbar from "../components/navbar/Navbar";
import Info from "../components/Info/Info";
import Intro from "../components/Intro/Intro";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "../components/Menu/Menu";
import Map from "../components/Map/Map";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <div className="relative w-[100%] overflow-hidden">
      <Navbar />
      <Intro />
      <Info />
      <Menu />
      <Map />
      <Footer />
    </div>
  );
}

export default Home;
