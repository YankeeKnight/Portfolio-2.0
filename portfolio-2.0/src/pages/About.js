import React from 'react';
import '../styles/styles.css';

function About() {
    return (

        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <img className="rounded-circle me" src="../img/headshot.PNG" alt="Manny Rivera" />
                        <h2 className="text-white mb-4">About Me</h2>
                        <p className="text-white-50">
                            A Full Stack Developer with a background in graphics, communications and technology. Passionate
                            about developing applications to solve problems and create the best user experience possible.
                            Strengths in project management, high paced multitasking, employee engagement and fluency in
                            Spanish.
                        </p>
                        <img className="img-fluid" src="../img/aboutback.png" alt="..." />
                    </div>
                </div>

            </div>
        </section>

    );
}

export default About;