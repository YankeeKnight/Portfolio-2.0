import React, { useState } from 'react';
import Navbar from "../src/components/Navbar";
import About from "../src/pages/About";
import Home from "../src/pages/Home";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";
import Footer from "../src/components/Footer";
import Socials from "../src/components/Socials";
import Resume from "../src/pages/Resume";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {

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
        if (currentPage === 'Resume') {
            return <Resume />;
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
                <Route path='/' element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>

        </Router>

    );
}
