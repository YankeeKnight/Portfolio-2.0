import React from 'react';
import '../../styles/styles.css';

function BandE() {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Beats & Eats</h5>
                <p class="card-text">A web app created with HTML, CSS, and JavaScript leveraging APIs.</p>
            </div>
            <img class="card-img-top" src={process.env.PUBLIC_URL + '/img/beatsandeats.png'} alt="Beats & Eats" />
            <div class="card-body">
                <button> <a rel="noopener" target="_blank" href="https://shobannah.github.io/BeatsAndEats/">View
                    App</a></button>
                <button><a rel="noopener" target="_blank" href="https://github.com/shobannah/BeatsAndEats">View
                    GitHub</a></button>
            </div>
        </div>
    );
}

export default BandE;