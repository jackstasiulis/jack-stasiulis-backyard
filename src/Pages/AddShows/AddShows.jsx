import './AddShows.scss';
import axios from 'axios';

function AddShows () {
    



    return(

        <>
                <div className='form__container'>
                    <h2>ADD A SHOW</h2>
                    
                    <form className='form' action="">
                        <label htmlFor="">What is your artist name?</label>
                        <input type="text" />
                        <label htmlFor="">When are you playing?</label>
                        <input type="text" />
                        <label htmlFor="">Where are you playing?</label>
                        <input type="text" />
                        <label htmlFor="">What time are you playing?</label>
                        <input type="text" />
                        <label htmlFor="">What time are you playing?</label>
                        <input type="text" />
                        <label htmlFor="">Choose a genre</label>
                        
                        <div className='form__button--container'>
                            <button className='form__button'>Hip Hop</button>
                            <button className='form__button'>Hip Hop</button>
                            <button className='form__button'>Hip Hop</button>
                            <button className='form__button'>Hip Hop</button>
                            <button className='form__button'>Hip Hop</button>
                            <button className='form__button'>Hip Hop</button>
                            <button className='form__button'>Hip Hop</button>
                            <button className='form__button'>Hip Hop</button>
                            <button className='form__button'>Hip Hop</button>
                        </div> 


                        <button className='form__button--submit'>SUBMIT</button>

                    </form>








                </div>
        </>
        
        
    )
}

export default AddShows;