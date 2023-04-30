import React from 'react';
import '../../styles/styles.css';

function PlushiNet() {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">PlushiNet</h5>
                <p class="card-text">A web app created with React, GraphQL, MongoDB, Node.js, Express.js, and JavaScript deployed on Heroku .</p>
            </div>
            <img class="card-img-top" src={process.env.PUBLIC_URL + '/img/plushinetscreen.png'} alt="Beats & Eats" />
            <div class="card-body">
                <button> <a rel="noopener" target="_blank" href="https://plushinet.herokuapp.com/">View
                    App</a></button>
                <button><a rel="noopener" target="_blank" href="https://github.com/hfrancis7/PlushiNet">View
                    GitHub</a></button>
            </div>
        </div>
    );
}

export default PlushiNet;