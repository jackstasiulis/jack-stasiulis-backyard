import './ShowPage.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ShowCardLarge from '../../Components/ShowCardLarge/ShowCardLarge';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoiamFja3N0YXMiLCJhIjoiY2xicHFsOG41MDc1ODNvcDlrNWJpZHlmcSJ9.aRgUrwSf3q2XYMigCNeQNw';


function ShowPage (props) {



    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: zoom
        });
      });



// State variable for our show data
    const [showData, setShowData] = useState();

// Use params for our selected show id from the URL
    const { showId } = useParams();

// Function to retrieve only one show for the show page
    function getSingleShow () {
      axios
      .get(`http://localhost:5050/shows/${showId}`)
      .then((res) => {
// Set our state variable to the single showdata retrieved from our database
          setShowData(res.data[0]);
      })
      .catch((err) => {
      });
    };
    
    useEffect(() => {
        getSingleShow();
    }, []);


    return(
        <div className='showpage'>

            <div>
                {/* Using the large show card for single show page */}
                {showData && 
                <ShowCardLarge
                key={showData.show_id}
                show_id={showData.show_id}
                image={showData.image}
                artist={showData.artist}
                date={showData.date}
                venue={showData.venue}
                address={showData.address}
                doors={showData.doors}
                genre={showData.genre}
                description={showData.description}
                users_id={showData.users_id}

                comment_users_id={props.user.users_id}
                comment_users_username={props.user.username}
                // user={props.user}
                />}
            </div>
            
            <div>
                <div ref={mapContainer} className="map-container" />
            </div>

        </div>
    )
}

export default ShowPage;