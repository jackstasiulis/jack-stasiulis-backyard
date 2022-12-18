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

    useEffect(() => {
        if(showData){
            geoCoder();
        }
    }, [showData]);


    // const [showLatitude, setShowLatitude] = useState(null)
    // const [showLongitude, setShowLongitude] = useState(null)

    const  geoCoder  = () => {
    
        const params = {
            access_key: 'fc14be0c0c475848545bf2c929aee05f',
            query: (showData.address),
            country: 'CA',
            region: 'vancouver'
          }
          
          axios.get('http://api.positionstack.com/v1/forward', {params})
            .then(response => {


                const map = new mapboxgl.Map({
                    container: mapContainer.current,
                    style: "mapbox://styles/mapbox/streets-v11",
                    center: [(-123.116226 -0.1), 49.246292],
                    zoom: 11,
                  });
              
                  // Create marker
                    new mapboxgl.Marker().setLngLat([response.data.data[0].longitude, response.data.data[0].latitude]).addTo(map)

// console.log(response.data.data[0].longitude)
// console.log(response.data.data[0].latitude)

            }).catch(error => {
              console.log(error);
            });
    };


        // console.log('lat',showLatitude)
        // console.log(showLongitude)

    
        const mapContainer = useRef(null);

        // useEffect(() => {
        //     // const map = new mapboxgl.Map({
        //     //   container: mapContainer.current,
        //     //   style: "mapbox://styles/mapbox/streets-v11",
        //     //   center: [(-123.116226 -0.1), 49.246292],
        //     //   zoom: 11,
        //     // });
        
        //     // // Create marker
        //     //   new mapboxgl.Marker().setLngLat([showLongitude, showLatitude]).addTo(map)
    
        //   }, []);





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