import './ShowCardLarge.scss';
import seeingStrangers from '../../assets/seeingStrangers.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import toast from 'react-hot-toast'

function ShowCardLarge (props) {
// declaring our params for showId and state variable for the all comments state variable
    const { showId } = useParams();
    const [allComments, setAllComments] = useState([])

// axios call to retrieve comments data from backend
    const getComments = () => {
        axios
        .get(`http://localhost:5050/shows/${showId}/comments`)
        .then(response => {
            setAllComments(response.data)
        })
        .catch((err) => console.log(err));
    }
// calls our get comments function on page load
    useEffect(() => {
        getComments();
    },[])

// function to validate our add comments input so a blank comment cannot be posted
    const formValidation = (e) => {
        e.preventDefault();
        if(!e.target.commentText.value) {
            alert('Please fill in your comment!')
        } else {
// if the comment body has content, calls our addComments function with DEFAULT USERNAME 'hello
            addComments(
                uuidv4(),
                e.target.commentText.value,
                // 'hello', // replace this with username!!!!
                props.comment_users_username,
                showId
            );
// clears input field and sends alert after posting comment
            e.target.commentText.value = '';
            toast.success('Comment posted');
        };
    }

// function to add comment to the show post
    const addComments = (comments_id, commentText, username, showId) => {
        const newComment = {
            comments_id: comments_id,
            comments_body: commentText,
            username: username,
            timestamp: '2022-09-04',
            likes: 0,
            show_id: showId,
            users_id: props.comment_users_id
        }
        console.log(newComment)
// axios call to post a comment to our backend
        axios
        .post(`http://localhost:5050/shows/${showId}/comments/`, newComment)
        .then((res) => {
// calls our getComments function to retrieve the just posted comment
            getComments();
        })
        .catch((err) => console.log('www', err))
    }








    return(
            
            <div className='cardLarge'>

                <div className='cardLarge__wrapper'>
                    <div className='cardLarge__img--container'>
                        <img className='cardLarge__img' src={props.image} alt="" />
                    
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
                    // if our comments array has more than 0 comments, run this
                    allComments.length > 0 ? (
                        // map through our comments array creating each comment
                        allComments.map((singleComment, i) => (
                            <div className='cardLarge__comment'
                            key={i}
                            username={singleComment.name}
                            comments_body={singleComment.comments_body}
                            >
                                <p className='cardLarge__comment--name'>{singleComment.username}</p>
                                <p className='cardLarge__comment--body'>{singleComment.comments_body}</p>
                                <button className='cardLarge__comment--delete'>deleteC</button>
                            </div>
                        ))
                        // if no comments, render this
                    ) : (<p className='cardLarge__comment--name__noComment'>no comments just yet...</p>)
                }

                    <form className='cardLarge__comment' onSubmit={formValidation}>
                        <input className='cardLarge__comment--input' type="text" placeholder='enter comment' name='commentText' />
                    </form>
                </div>

            </div>

    )
}

export default ShowCardLarge;