import './SignIn.scss'
import LogoRcrop from '../../assets/Backyard-logo-black.png';
import { useNavigate } from 'react-router-dom';

function SignIn (props) {
const navigate = useNavigate();

    return(
        <div className='signin'>
            <h2 className='form__title'>Sign In</h2>
                <div className='form__container'>
                    {/* If the user is NOT signed in, this form is allowed to be displayed */}
                    {!props.signedIn ? (
                    <form className='form' onSubmit={props.handleSignIn} >
                        <div className='form__cont'>
                            <div className='form__subCont'>

                                <label className='form__label' >Username</label>
                                <input className='form__input' type="username" name='username' placeholder='Please input your username' />

                                <label className='form__label' >Password</label>
                                <input className='form__input' type="password" name='password' placeholder='Please input your password' />
                            
                                <div className='form__button--container'>
                                    <button className='form__button'>Sign In</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    ) : ''}
                </div>
                    
                    <div className='signin__createAccount'>
                        <div className='signin__createAccount--wrapper'>
                            <button onClick={() => {
                                navigate('/signup');
                                }} className='form__button--signup'>Sign Up</button>
                            <label className='form__label--signup'>here if you dont have an account</label>
                        </div>
                    </div>
        </div>
    );
}

export default SignIn;


