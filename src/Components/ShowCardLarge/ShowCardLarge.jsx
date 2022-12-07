import './ShowCardLarge.scss';
import seeingStrangers from '../../assets/seeingStrangers.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import toast from 'react-hot-toast'

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


    function formValidation (e) {
        e.preventDefault();
        // console.log(e.target.commentText.value)
        if(!e.target.commentText.value) {
            alert('Please fill in your comment!')
        } else {
            addComments(
                uuidv4(),
                e.target.commentText.value,
                'hello',
                showId
            );
            e.target.commentText.value = '';
            // alert("awesome, comment posted")
            toast.success('Comment posted');
        };
    }

    function addComments (comments_id, commentText, username, showId) {
        const newComment = {
            comments_id: comments_id,
            comments_body: commentText,
            username: username,
            likes: 0,
            show_id: showId
        }
        console.log(newComment)
        axios
        .post(`http://localhost:5050/shows/${showId}/comments/`, newComment)
        // console.log(newComment)
        .then((res) => {
            getComments();
        })
        .catch((err) => console.log('www', err))
    }


    return(
            
            <div className='cardLarge'>

                {/* <div className='overlay'></div> */}
                    
                <div className='cardLarge__wrapper'>
                    <div className='cardLarge__img--container'>
                        <img className='cardLarge__img' src={seeingStrangers} alt="" />
                    
                        <div className='cardLarge__text--artist__container'>
                            <p className='cardLarge__text--label__artist'>ARTIST</p>
                            <h4 className='cardLarge__text--artist'>{props.artist}</h4>
                            <p className='cardLarge__text--label'>Address</p>
                            <p className='cardLarge__text--detail'>{props.address}</p>
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
                        allComments.map((singleComment, i) => (
                            <div className='cardLarge__comment'
                            key={i}
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


                    <form className='cardLarge__comment' onSubmit={formValidation}>
                        <input className='cardLarge__comment--input' type="text" placeholder='enter comment' name='commentText' />
                    </form>
                </div>

            </div>

    )
}

export default ShowCardLarge;