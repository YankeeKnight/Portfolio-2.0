import React, { useState } from 'react';
import BandE from '../components/BandE';
import Recibeet from '../components/Recibeet';
import '../styles/styles.css';
import PlushiNet from '../components/PlushiNet';
import ProjPick from '../components/ProjPick';

function Projects() {
    const [currentComponent, setCurrentComponent] = useState("component");

    const handleComponentChange = (event) => {
        setCurrentComponent(event.target.value);
    };

    const renderComponent = () => {
        switch (currentComponent) {
            case "BandE":
                return <BandE />;
            case "Recibeet":
                return <Recibeet />;
            case "PlushiNet":
                return <PlushiNet />
            default:
                return <ProjPick />;
        }
    };

    return (
        <section class="projects-section bg-dark" id="projects">
            <h2 className="text-white mb-4 headingCon">Projects</h2>
            <div className="project-wrapper move">
                <div>
                    <select onChange={handleComponentChange} value={currentComponent}>
                        <option value="defualt">Pick A Project</option>
                        <option value="BandE">Beats & Eats</option>
                        <option value="Recibeet">Recibeet</option>
                        <option value="PlushiNet">PlushiNet</option>
                    </select>
                </div>
            </div>

            <div>
                {renderComponent()}
            </div>
        </section>
    );
}

export default Projects;