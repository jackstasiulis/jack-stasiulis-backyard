import './SignUp.scss'
import LogoRcrop from '../../assets/Backyard-logo-black.png';
import { useNavigate } from 'react-router-dom';

function SignUp (props) {
const navigate = useNavigate();

    return(
        <div className='SignUp'>
                <form className='SignUp__form' onSubmit={props.handleSignUp}>

                    <label className='SignUp__form--label' >username</label>
                    <input className='SignUp__form--input' type="username" name='username' placeholder='username' />

                    <label className='SignUp__form--label' >password</label>
                    <input className='SignUp__form--input' type="password" name='password' placeholder='password' />

                    <button className='SignUp__form--button' type='submit'>Sign in</button>
                </form>
        </div>
    );
}

export default SignUp;


