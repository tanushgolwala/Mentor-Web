import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TopMentors from "../components/Mentors";


const Home: React.FC = () => {
    return (
        <div className="App">
            <Navbar />
            <Hero id='hero' />
            <TopMentors />
            <Footer />
            {/* <Login /> */}
        </div>
    )
}

export default Home;