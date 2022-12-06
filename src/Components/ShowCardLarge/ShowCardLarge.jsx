import './ShowCardLarge.scss';
import seeingStrangers from '../../assets/seeingStrangers.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function ShowCardLarge (props) {

    const { showId } = useParams();
    const [allComments, setAllComments] = useState([])


    function getComments () {
        axios
        .get(`http://localhost:5050/shows/${showId}/comments`)
        .then(response => {
            setAllComments(response.data)
        })
        .catch((err) => console.log(err));
    }
    
    useEffect(() => {
        getComments();
    },[])



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
                    <p className='cardLarge__text--detail--description'>{props.description}</p>
                </div>

                <div className='cardLarge__text--comments'>
                    <p className='cardLarge__text--label__comments'>COMMENTS</p>


                {
                    allComments.length > 0 ? (
                        allComments.map((singleComment) => (
                            <div className='cardLarge__comment'
                            username={singleComment.name}
                            comments_body={singleComment.comments_body}
                            >
                                <p className='cardLarge__comment--name'>{singleComment.username}</p>
                                <p className='cardLarge__comment--body'>{singleComment.comments_body}</p>
                            </div>
                        ))
                    ) : (<p className='cardLarge__comment--name__noComment'>no comments just yet...</p>)
                }
                    

                    {/* <div className='cardLarge__comment'>
                        <p className='cardLarge__comment--name'>username</p>
                        <p className='cardLarge__comment--body'>sample comment. blah blah blah. blah blah blah. blah blah blah. blah blah blah. blah blah blah. blah blah blah. </p>
                    </div>

                    <div className='cardLarge__comment'>
                        <p className='cardLarge__comment--name'>username</p>
                        <p className='cardLarge__comment--body'>sample comment. blah blah blah. blah blah blah. blah blah blah. blah blah blah. blah blah blah. blah blah blah. </p>
                    </div> */}


                    <div className='cardLarge__comment'>
                        <input className='cardLarge__comment--input' type="text" placeholder='enter comment' />
                    </div>
                </div>

            </div>

    )
}

export default ShowCardLarge;