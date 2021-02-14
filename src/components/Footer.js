import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer ()
{
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals
        </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
        </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/react-web'>Testimonials</Link>
                        <Link to='/react-web'>Careers</Link>
                        <Link to='/react-web'>Investors</Link>
                        <Link to='/react-web'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/react-web'>Contact</Link>
                        <Link to='/react-web'>Support</Link>
                        <Link to='/react-web'>Destinations</Link>
                        <Link to='/react-web'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/react-web'>Submit Video</Link>
                        <Link to='/react-web'>Ambassadors</Link>
                        <Link to='/react-web'>Agency</Link>
                        <Link to='/react-web'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/react-web'>Instagram</Link>
                        <Link to='/react-web'>Facebook</Link>
                        <Link to='/react-web'>Youtube</Link>
                        <Link to='/react-web'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section class='social-medias'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/react-web' className='social-logo'>
                            TRVL
              <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <small class='website-rights'>TRVL © 2020</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/react-web'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/react-web'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/react-web'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/react-web'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/react-web'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;