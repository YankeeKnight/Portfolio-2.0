import React from 'react';
import '../styles/styles.css';

function Projects() {
    return (
        <section className="projects-section bg-dark" id="projects">

            <div className="container px-4 px-lg-5">
                <h2 className="text-white mb-4">Projects</h2>
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div className="col-xl-8 col-lg-7 image-gallery"><img class="img-fluid mb-3 mb-lg-0"
                        src="../img/bg-masthead.jpg" alt="..." /></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>Project X</h4>
                            <p className="text-black-50 mb-0">Web App</p>
                        </div>
                    </div>
                </div>

                <div className="row gx-0 mb-5 mb-lg-0 justify-content-center image-gallery">
                    <div className="col-lg-6"><a href="https://shobannah.github.io/BeatsAndEats/" target="_blank" rel="noreferrer"><img
                        className="img-fluid" src="../img/beatsandeats.png" alt="..." /></a></div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">Beats & Eats</h4>
                                    <p className="mb-0 text-white-50">A web app created with HTML, CSS, and JavaScript
                                        leveraging APIs.</p>
                                    <hr className="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-0 justify-content-center image-gallery">
                    <div className="col-lg-6"><a href="https://recibeet-2.herokuapp.com/" target="_blank" rel="noreferrer"><img class="img-fluid"
                        src="../img/recibeet.png" alt="..." /></a></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">ReciBeet</h4>
                                    <p className="mb-0 text-white-50">A web app created with HTML, CSS, and JavaScript
                                        leveraging custom APIs and using HandleBars. Deployed on Heroku.</p>
                                    <hr className="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;