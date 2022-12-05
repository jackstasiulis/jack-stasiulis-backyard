import './ShowPage.scss';
import axios from 'axios';
import ShowCard from '../../Components/ShowCard/ShowCard';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function ShowPage () {


    const [showData, setShowData] = useState();
    const { showId } = useParams();

    function getSingleShow () {
      axios
      .get(`http://localhost:5050/shows/${showId}`)
    //   console.log(showId)
      .then((res) => {
          setShowData(res.data[0]);
          console.log(res.data)
      })
      .catch((err) => {
          console.log(err);
      });
    };
    
    useEffect(() => {
        getSingleShow();
    }, []);



    return(

        <div>
             {
                       showData && 
                            // console.log(showData)
   
                            <ShowCard
                            key={showData.show_id}
                            // show_id={singleShow.show_id}
                            // image={singleShow.image}
                            artist={showData.artist}
                            date={showData.date}
                            venue={showData.venue}
                            address={showData.address}
                            doors={showData.doors}
                            genre={showData.genre}
                             />
                    }
        </div>
        
        
    )
}

export default ShowPage;