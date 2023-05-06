import React from 'react'
import './Hero.css'
import HeroImg from '../../assets/phone.svg'

const Hero = (props) => {
    const { theme } = props
    return (
        <section className='hero' data-theme={theme}>
            <div className="container --grid-15">

                <div className="hero-text">
                    <h1>Visit Vila Shop Landing Page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laudantium officiis nulla tempora dolor, blanditiis saepe quidem nemo unde corrupti.</p>
                    <div className='--flex-start'>
                        <button className='--btn btn-p'>Learn More</button>
                        <button className='--btn --btn-danger'>Sign Up</button>
                    </div>
                </div>

                <div className="--text-center">
                    <img src={HeroImg} alt="phone" width={200} />
                </div>

            </div>
        </section>
    )
}

export default Hero