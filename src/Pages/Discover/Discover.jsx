import './Discover.scss';
import axios from 'axios';
import ShowCard from '../../Components/ShowCard/ShowCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Discover (props) {
    
    // const[activeShow, setActiveShow] = useState([]);

//MOVE AXIOS CALL TO APP THEN PASS STATE VAR TO BOTH DISCOVER AND SHOW PAGE

    // const [allShows, setAllShows] = useState([])


    // function getShows () {
    //     axios
    //     .get(`http://localhost:5050/shows/`)
    //     .then(response => {
    //         setAllShows(response.data)
    //     })
    //     .catch((err) => console.log(err));
    // }
    // useEffect(() => {
    //     getShows();
    // },[])

    // function getSingleShow (showId) {
    //     axios
    //         .get(`http://localhost:5050/shows/`)
    // }
    
    


    return(

        <main>
                <div className='tablet__wrapper'>
                    {
                        props.allShows.map((singleShow) => (
                            <Link to={`/shows/${singleShow.show_id}`}>
                            <ShowCard
                            key={singleShow.show_id}
                            show_id={singleShow.show_id}
                            // image={singleShow.image}
                            artist={singleShow.artist}
                            date={singleShow.date}
                            venue={singleShow.venue}
                            address={singleShow.address}
                            doors={singleShow.doors}
                            genre={singleShow.genre}
                             />
                            </Link>
                        ))
                    }
                

                </div>
        </main>
        
        
    )
}

export default Discover;