import './ShowPage.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ShowCardLarge from '../../Components/ShowCardLarge/ShowCardLarge';

// import arrow from '../../assets/turn-left-arrow-symbol-svg-png-icon-download-35.png'

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "../ShowPage/mapbox-gl.css";
// import ReactMapGL from 'react-map-gl'

import { Marker } from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiamFja3N0YXMiLCJhIjoiY2xicHFsOG41MDc1ODNvcDlrNWJpZHlmcSJ9.aRgUrwSf3q2XYMigCNeQNw';


function ShowPage (props) {


    // const [viewport, setViewport] = useState({
    //     width: '100%',
    //     height: '45rem',
    //     latitude: 49.246292,
    //     longitude: -123.116226,
    //     zoom: 7,
    // });



    const mapContainer = useRef(null);

    // const map = useRef(null);
    // const [lng, setLng] = useState(-123.116226);
    // const [lat, setLat] = useState(49.246292);
    // const [zoom, setZoom] = useState(7);

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [(-123.116226 -0.1), 49.246292],
          zoom: 11,
        });
    
        // Create default markers
        // geoJson.features.map((feature) =>
          new mapboxgl.Marker().setLngLat([-123.10139273414, 49.2642415]).addTo(map)
        // );
    
        // // Add navigation control (the +/- zoom buttons)
        // map.addControl(new mapboxgl.NavigationControl(), "top-right");
    
        // Clean up on unmount
        // return () => map.remove();
      }, []);


    // useEffect(() => {
    //     if (map.current) return; // initialize map only once
    //     map.current = new mapboxgl.Map({
    //       container: mapContainer.current,
    //       style: 'mapbox://styles/mapbox/streets-v12',
    //       center: [(lng - 1), lat],
    //       zoom: zoom
    //     });
    //     // var marker = new mapboxgl.Marker()
    //     //     .setLngLat([49.2642415, -123.10139273414])
    //     //     .addTo(map)
    //   });







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

    // console.log(showData.address)


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