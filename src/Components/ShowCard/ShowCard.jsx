import './ShowCard.scss';
import seeingStrangers from '../../assets/seeingStrangers.png';
import { useNavigate } from 'react-router-dom';
import detailsArrow from '../../assets/turn-left-arrow-symbol-svg-png-icon-download-35.png';


function ShowCard (props) {


                            // show_id={singleShow.show_id}
                            // image={singleShow.image}
                            // artist={singleShow.artist}
                            // date={singleShow.date}
                            // venue={singleShow.venue}
                            // address={singleShow.address}
                            // doors={singleShow.doors}
                            // genre={singleShow.genre}


// const nav = useNavigate();

// const showNav = (event) => {
//     event.preventDefault();
//     nav('/show/:id')
// }

    return(

            <div className='card'>

                <div className='overlay'></div>
                    
                
                <div className='card__img--container'>
                    <img className='card__img' src={seeingStrangers} alt="" />
                
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
                    {/* <img className='card__detailsArrow' src={detailsArrow} alt="" /> */}

                    {/* <button className='card__rsvp'>RSVP</button> */}

                </div>
            </div>

    )
}

export default ShowCard;