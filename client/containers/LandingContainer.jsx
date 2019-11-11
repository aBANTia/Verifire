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
                <h2>Verifire: Keep Up With The Heat</h2>
                <p>Keep up with all the news, know your coverage, and stay connected</p>
            </div>
            <div id="particles">
            <Particles
                params={{
                    "fps_limit": 28,
                    "particles": {
                        "number": {
                            "value": 500,
                            "density": {
                                "enable": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 30,
                            "opacity": 0.4
                        },
                        "move": {
                            "speed": 1
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
                        "scale": 0.5,
                        "type": "inline",
                        "move": {
                            "radius": 10
                        },
                        "url":"client/assets/deer.svg" ,
                        "inline": {
                            "arrangement": "equidistant"
                        },
                        "draw": {
                            "enable": true,
                            "stroke": {
                                "color": "rgba(255, 255, 255, .2)"
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