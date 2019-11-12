import React from 'react';

//This componenet was build for the purpose of displaying a map that displays local disasters
//We started with displaying fires

const Maps = (props) => {
    const aeris = new AerisWeather('wgE96YE3scTQLKjnqiMsv', 'iSUGNlzI2maa6Whv4trM8lXvmuHE4w2QAz3XyQrC');

    aeris.views().then(views => {
        const map = new views.InteractiveMap(document.getElementById('map'), {
            center: {
                lat: 34.0527,
                lon: -118.2458
            },
            zoom: 8,
            // layers: 'flat,chlo-modis,interstates,counties,heat-index:60,admin-cities,fires-obs-icons',
            layers: 'heat-index:60,fires-obs-icons',
            timeline: {
                from: -48 * 3600, // seconds
                to: -42 * 3600
            }
            // timeline: {
            //     from: -24 * 3600, // seconds
            //     to: -22 * 3600
            // }
        });
    });

    return ( 
        <div>
            <p>Maps</p>
            <div className="map-container">
                <div id="map"></div>
            </div>
        </div>
     );
}
 
export default Maps;