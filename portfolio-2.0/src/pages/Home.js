import React from 'react';
import '../styles/styles.css';
import '../pages/About';

export default function Home() {
    return (
        <header className="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 mb-5 text-uppercase my-name">Emmanuel Rivera</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">A Full Stack Developer with a background in graphics,
                            communications and technology.</h2>
                        <a className="btn btn-primary" role="button" href={process.env.PUBLIC_URL + '/About'}>Learn More</a>
                    </div>
                </div>
            </div>
        </header>
    );
}