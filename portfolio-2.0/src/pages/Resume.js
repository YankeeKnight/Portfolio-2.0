import React from 'react';
import '../styles/styles.css';

function Resume() {
    return (
        <section className="projects-section bg-dark" id="projects">
            <div>
                <a className="btn btn-primary resumeDL" role="button" href="../img/Emmanuel Rivera Resume Aug 2022 V3.pdf" download="Emmanuel Rivera's Resume" target="_blank">Download Resume</a>
            </div>

            <div className="main-projects">
                <h2 className="text-white mb-4 heading">Front End Skills</h2>
                <div className="project-wrapper">
                    <div>
                        <ul className="text-white mb-4">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main-projects">
                <h2 className="text-white mb-4 heading">Back End Skills</h2>
                <div className="project-wrapper">
                    <div>
                        <ul className="text-white mb-4">
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongolize</li>
                            <li>REST</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Resume;