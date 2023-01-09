import './About.scss'

function About () {
    return(
        <div className='about'>
            <div className='about__text--wrapper'>
                <h1 className='about__text--title'>Welcome to Backyard</h1>
                
                <h3 className='about__text--text'>A Vancouver based project for musicians, by a musician.</h3>

                <h3 className='about__text--text'>
                    Take a look through the discover page for upcoming shows or post one of your own.
                    </h3>

                <h3 className='about__text--text'>
                    Make an account and engage with other users in your area. 
                    Check out whats happening nearby or leave a comment on an artists post.
                    </h3>
            </div>
        </div>
    )
}

export default About;

