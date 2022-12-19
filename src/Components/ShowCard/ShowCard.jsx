import './ShowCard.scss';
import seeingStrangers from '../../assets/seeingStrangers.png';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import deleteButton from '../../assets/delete.png'

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
// console.log("yoYOYOYO", props.users_id)
// console.log("ayAYAYAY", props.show_users_id)

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

                    {props.show_users_id && props.users_id === props.show_users_id ? (
                         <button onClick={handleDeleteShow} className='card__delete'>
                            <img src={deleteButton} alt="" />
                        </button>
                     ) : null}

                </div>
            </div>
            </Link>
            

            {/* {props.show_users_id && props.users_id === props.show_users_id ? (
                <button onClick={handleDeleteShow} className='card__delete'>
                    <img src={deleteButton} alt="" />
                    </button>
            ) : null} */}
            
            {/* {singleComment.users_id == props.comment_users_id ? (
                                    <button onClick={(e)=> handleDeleteComment(e, singleComment.comments_id)} className='cardLarge__comment--delete'>deleteC</button>
                                ) : null} */}


        </div>
    </div>
    )
}

export default ShowCard;