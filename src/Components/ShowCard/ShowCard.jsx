import './ShowCard.scss';
import seeingStrangers from '../../assets/seeingStrangers.png';
import { useNavigate } from 'react-router-dom';

function ShowCard (props) {

    return(
        <div className='card__wrapper'>
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
        </div>

    )
}

export default ShowCard;