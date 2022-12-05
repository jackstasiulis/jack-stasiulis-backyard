import './ShowCardLarge.scss';
import seeingStrangers from '../../assets/seeingStrangers.png';
import { useNavigate } from 'react-router-dom';

function ShowCardLarge (props) {

    return(
            
            <div className='cardLarge'>

                {/* <div className='overlay'></div> */}
                    
                <div className='cardLarge__wrapper'>
                    <div className='cardLarge__img--container'>
                        <img className='cardLarge__img' src={seeingStrangers} alt="" />
                    
                        <div className='cardLarge__text--artist__container'>
                            <p className='cardLarge__text--label__artist'>ARTIST</p>
                            <h4 className='cardLarge__text--artist'>{props.artist}</h4>
                        </div>
                
                    </div>

                    <div className='cardLarge__text'>
                        <p className='cardLarge__text--label'>DATE</p>
                        <p className='cardLarge__text--detail'>{props.date}</p>
                        <p className='cardLarge__text--label'>VENUE</p>
                        <p className='cardLarge__text--detail'>{props.venue}</p>
                        <p className='cardLarge__text--label'>DOORS</p>
                        <p className='cardLarge__text--detail'>{props.doors}</p>
                        
                        <button className='cardLarge__category'>{props.genre}</button>
                    </div>
                </div>
                
                <div className='cardLarge__text--lower'>
                    <p className='cardLarge__text--label'>ABOUT</p>
                    <p className='cardLarge__text--detail--description'>this is a description sample text. this is a description sample text. this is a description sample text. instagram @seeingstrangersmusic</p>
                </div>

                <div className='cardLarge__text--comments'>
                    <p className='cardLarge__text--label__comments'>COMMENTS</p>

                    <div className='cardLarge__comment'>
                        <p className='cardLarge__comment--name'>username</p>
                        <p className='cardLarge__comment--body'>sample comment. blah blah blah. blah blah blah. blah blah blah. blah blah blah. blah blah blah. blah blah blah. </p>
                    </div>

                    <div className='cardLarge__comment'>
                        <p className='cardLarge__comment--name'>username</p>
                        <p className='cardLarge__comment--body'>sample comment. blah blah blah. blah blah blah. blah blah blah. blah blah blah. blah blah blah. blah blah blah. </p>
                    </div>

                    <div className='cardLarge__comment'>
                        <p className='cardLarge__comment--name'>username</p>
                        <p className='cardLarge__comment--body'>sample comment. blah blah blah. blah blah blah. blah blah blah. blah blah blah. blah blah blah. blah blah blah. </p>
                    </div>


                    <div className='cardLarge__comment'>
                        <input className='cardLarge__comment--input' type="text" placeholder='enter comment' />
                    </div>
                </div>

            </div>

    )
}

export default ShowCardLarge;