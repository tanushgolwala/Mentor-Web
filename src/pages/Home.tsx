import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Offer from "../components/Offer";


const Home: React.FC = () => {
    return (
        <div className="App">
            <Navbar />
            <Hero id='hero' />
            <Offer />
            <Footer />
            {/* <Login /> */}
        </div>
    )
}

export default Home;