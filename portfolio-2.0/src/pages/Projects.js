import React from 'react';
import '../styles/styles.css';

function Projects() {
    return (
        <section class="projects-section bg-dark" id="projects">
            <h2 className="text-white mb-4 headingCon">Projects</h2>
            <div className="project-wrapper move">
                <div>
                    <ul>
                        <li><a rel="noopener" target="_blank" href="https://shobannah.github.io/BeatsAndEats/">
                            <span>Beats & Eats</span> </a>
                        </li>
                        <li><a rel="noopener" target="_blank" href="https://bayjs.org"> <span>ReciBeet</span> </a>
                        </li>
                        <li><a rel="noopener" target="_blank" href="https://cookiemunch.dunks1980.com">
                            <span>Coming Soon</span> </a>
                        </li>
                        <li><a rel="noopener" target="_blank" href="https://screentimeconverter.com"> <span>Coming Soon</span> </a>
                        </li>
                        <li><a rel="noopener" target="_blank" href="https://inlinesvg.dunks1980.com/">
                            <span>Coming Soon</span> </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Beats & Eats</h5>
                    <p class="card-text">A web app created with HTML, CSS, and JavaScript leveraging APIs.</p>
                </div>
                <img class="card-img-top" src={process.env.PUBLIC_URL + '../img/beatsandeats.png'} alt="Beats & Eats" />
                <div class="card-body">
                    <button> <a rel="noopener" target="_blank" href="https://shobannah.github.io/BeatsAndEats/">View
                        App</a></button>
                    <button><a rel="noopener" target="_blank" href="https://github.com/shobannah/BeatsAndEats">View
                        GitHub</a></button>
                </div>
            </div>
            <div class="card hide">
                <div class="card-body">
                    <h5 class="card-title">ReciBeet</h5>
                    <p class="card-text">A web app created with HTML, CSS, and JavaScript leveraging APIs.</p>
                </div>
                <img class="card-img-top" src="../img/recibeet.png" alt="Card image cap" />
                <div class="card-body">
                    <button> <a rel="noopener" target="_blank" href="https://shobannah.github.io/BeatsAndEats/">View
                        App</a></button>
                    <button><a rel="noopener" target="_blank" href="https://github.com/shobannah/BeatsAndEats">View
                        GitHub</a></button>
                </div>
            </div>
        </section>
    );
}

export default Projects;