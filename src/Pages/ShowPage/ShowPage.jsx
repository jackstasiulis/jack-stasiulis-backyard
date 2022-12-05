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
                        showData.map((singleShow) => (
                            // console.log(showData)
                            <Link to={`/shows/${singleShow.show_id}`}>
                            <ShowCard
                            key={singleShow.show_id}
                            // show_id={singleShow.show_id}
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


                    {/* {
                         <ShowCard artist={props.showData.artist} />
                    } */}
        </div>
        
        
    )
}

export default ShowPage;