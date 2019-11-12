import React from 'react';
import Particles from 'react-particles-js'

//This container was made to display the landing page
//Ideally this will also contain auth and other things
//This will primarily be to display information regarding the site as a whole

//the particles in this container are for the polygon mask before entering the page

const LandingContainer = (props) => {
    return ( 
        <div id="landing">
            <div id="landingInfo">

                <h2>Verifire:</h2>
                <span>Keep Up With The Heat</span>
                <p>Stay updated, know your coverage, and keep connected</p>
            </div>
            <div id="particles">
            <Particles
                params={{
                    // Maximum Frames Per Second
                    "fps_limit": 60,
                    "particles": {
                        "number": {
                            // Number of Particles
                            "value": 600,
                            "density": {
                                "enable": false
                            }
                        },
                        // Lines between Particles
                        "line_linked": {
                            "enable": true,
                            // Maximum Distance that Particles will attach to each other
                            "distance": 20,
                            "opacity": 0.4
                        },
                        // Movement Speed of the Particles
                        "move": {
                            "speed": 10
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "opacity_min": 0.05,
                                "speed": 2,
                                "sync": false
                            },
                            "value": 0.4
                        }
                    },
                    "polygon": {
                        "enable": true,
                        // Size of your mask
                        "scale": 0.55,
                        // Type can be:
                        // inline(particles on the lines of your mask),
                        // inside(particles inside the lines of your mask[ Will only work on non-curved lines ]),
                        // outside(particles outside the lines of your mask[ Will only work on non-curved lines ])
                        "type": "inline",
                        "move": {
                            // How far away from your lines the particles are allowed to venture out
                            "radius": 5
                        },
                        // Url for mask, here we are routing to the backend
                        "url":"/flare",
                        "inline": {
                            "arrangement": "equidistant"
                        },
                        "draw": {
                            "enable": false,
                            "stroke": {
                                "color": "rgba(0, 0, 0, .2)"
                            }
                        }
                    },
                    "retina_detect": false,
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "size": 6,
                                "distance": 40
                            }
                        }
                    }
                }} />
                </div>
                <p id="company">by aBANTia</p>
        </div>
     );
}
 
export default LandingContainer;