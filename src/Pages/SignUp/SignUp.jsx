import './SignUp.scss'
import LogoRcrop from '../../assets/Backyard-logo-black.png';
import { useNavigate } from 'react-router-dom';

function SignUp (props) {
const navigate = useNavigate();

    return(
        <div className='signup'>
<h2 className='form__title'>Sign Up</h2>
    <div className='form__container'>

        <form className='form' onSubmit={props.handleSignUp} >
            <div className='form__cont'>
                <div className='form__subCont'>

                    <label className='form__label' >Email</label>
                    <input className='form__input' type="email" name='email' placeholder='Please input your email' />

                    <label className='form__label' >Username</label>
                    <input className='form__input' type="username" name='username' placeholder='Please input your username' />

                    <label className='form__label' >Password</label>
                    <input className='form__input' type="password" name='password' placeholder='Please input your password' />
                
                    <div className='form__button--container'>
                        <button className='form__button'>Sign Up</button>
                    </div>
                </div>
            </div>
        </form>

    </div>
        <div className='signin__createAccount'>
            <div className='signin__createAccount--wrapper'>
                <button onClick={() => {
                    navigate('/signin');
                    }} className='form__button--signup'>Sign In</button>
                <label className='form__label--signup'>here if you already have an account</label>
            </div>
        </div>
</div>
    );
}




export default SignUp;


