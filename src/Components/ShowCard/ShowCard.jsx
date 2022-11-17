import './ShowCard.scss';
import seeingStrangers from '../../assets/seeingStrangers.png'


function ShowCard () {
    return(
        <div className='card'>
            
            <div className='card__img--container'>
                <img className='card__img' src={seeingStrangers} alt="" />
            
            <div className='card__text--artist__container'>
                <p className='card__text--label__artist'>ARTIST</p>
                <h4 className='card__text--artist'>Seeing Strangers</h4>
            </div>
            
            </div>

            <div className='card__text'>
                <p className='card__text--label'>DATE</p>
                <p className='card__text--detail'>Feb, 23 2023</p>
                <p className='card__text--label'>VENUE</p>
                <p className='card__text--detail'>The Biltmore Cabaret</p>
                <p className='card__text--label'>DOORS</p>
                <p className='card__text--detail'>7:00 PM</p>
            </div>
        </div>
    )
}

export default ShowCard;