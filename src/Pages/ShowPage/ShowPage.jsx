import './ShowPage.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ShowCardLarge from '../../Components/ShowCardLarge/ShowCardLarge';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "../ShowPage/mapbox-gl.css";
 
mapboxgl.accessToken = 'pk.eyJ1IjoiamFja3N0YXMiLCJhIjoiY2xicHFsOG41MDc1ODNvcDlrNWJpZHlmcSJ9.aRgUrwSf3q2XYMigCNeQNw';


function ShowPage (props) {

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

// Use Effect calls geoCoder function only when showData is pulled from the server
    useEffect(() => {
        if(showData){
            geoCoder();
        }
    }, [showData]);


// Geocoder translates address data from showData to Longitude and Latitude for mapbox
    const  geoCoder  = () => {

        const params = {
            access_key: '1c8fd1ab51c93de7426275325e1146f9',
            query: (showData.address),
            country: 'CA',
            region: 'vancouver',
            // baseURL: 'http://',
            httpsAgent: false,
            httpAgent: true
          }

          axios.get('http://api.positionstack.com/v1/forward', {params})
            .then(response => {
// Mapbox then renders the map
                const map = new mapboxgl.Map({
                    container: mapContainer.current,
                    style: "mapbox://styles/jackstas/clbu8yc32000514s4m26ba930",
                    // center: [(-123.116226 -0.1), 49.246292],
                    center: [(-123.116226 +0.01), (49.246292 +0.08)],
                    zoom: 11,
                  });
              
// Mapbox then creates the marker
                    new mapboxgl.Marker().setLngLat([response.data.data[0].longitude, response.data.data[0].latitude]).addTo(map)

            }).catch(error => {
              console.log(error);
            });
    };
        const mapContainer = useRef(null);


    return(
        <div className='showpage'>

            <div className='showpage__buyTicket'>
                <h3 className='showpage__buyTicket--text'>Buy Tickets</h3>
            </div>

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
                />}
            </div>

            <div>
                <div ref={mapContainer} className="map-container" />
            </div>

        </div>
    )
}

export default ShowPage;