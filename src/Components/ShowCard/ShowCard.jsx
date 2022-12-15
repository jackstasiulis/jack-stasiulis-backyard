import './ShowCard.scss';
import seeingStrangers from '../../assets/seeingStrangers.png';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function ShowCard (props) {

// Function to delete a single show
const handleDeleteShow = (e) => {
    e.preventDefault();
    axios
    .delete(`http://localhost:5050/shows/${props.show_id}`)
    .then((res) => {
        
// After deletion, the array is refreshed by calling getShows
      props.getShows();
    })
    .catch((err) => console.log(`unable to delete show: ${err}`))
}

    return(
    <div>
        <div className='card__wrapper'>
        
        <Link to={`/shows/${props.show_id}`}>
            <div className='card'>

                <div className='overlay'></div>
                
                <div className='card__img--container'>
                    <img className='card__img' src={props.image} alt="" />
                
                    <div className='card__text--artist__container'>
                        <p className='card__text--label__artist'>ARTIST</p>
                        <h4 className='card__text--artist'>{props.artist}</h4>
                    </div>
                </div>

                <div className='card__text'>
                    <p className='card__text--label'>DATE</p>
                    <p className='card__text--detail'>{props.date}</p>
                    <p className='card__text--label'>VENUE</p>
                    <p className='card__text--detail'>{props.venue}</p>
                    <p className='card__text--label'>DOORS</p>
                    <p className='card__text--detail'>{props.doors}</p>
                    
                    <button className='card__category'>{props.genre}</button>
                    
                </div>
            </div>
            </Link>

            <button onClick={handleDeleteShow} className='card__delete'>delete</button>
        </div>
    </div>
    )
}

export default ShowCard;