import './Footer.scss'
import LogoRcrop from '../../assets/Backyard-logo-black.png';

function Footer () {
    return(
        <div className='footer'>
            <div className='footer__elements'>
                
                <div className='footer__elements--container'>
                    <img className='footer__elements--logo' src={LogoRcrop} alt="" />
                    <p className='footer__elements--shit'>find <u><em>your</em></u> sh*t</p>

                    <p className='footer__elements--text'>Backyard © 2023</p>
                </div>
            </div>
        </div>
    )
    
}

export default Footer;


