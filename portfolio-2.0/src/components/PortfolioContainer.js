import React, { useState } from 'react';
import Navbar from "./Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "./Footer";
import Socials from "./Socials";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function PortfolioContainer() {

    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {

        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <Router>
            <div>
                <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
                <Socials currentPage={currentPage} handlePageChange={handlePageChange} />
                <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
            <Routes>
                <Route
                    path="/about"
                    element={<About />}
                />
            </Routes>

        </Router>

    );
}