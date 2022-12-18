import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Search from "./Search";
import Selection from "./Selection";
import Why from "./Why";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Why />
            <Selection />
            <Search />
            <Footer />
        </div>
    )
}

export default Home