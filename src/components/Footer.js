import React from 'react';
import '../css/Footer.css';
const Footer = () => {

    return (
        <div className='footer'>
            <div >
                <div className='row upper-row'>
                    <div class="col-md-3 main-links"> 
                        <div className='main-link-up'> 
                            <strong><a href="/">For Individuals</a></strong> 
                            <strong><a href="/business">For Institutions &amp; Businesses</a></strong> 
                        </div> 
                        <div> 
                            <strong><a href="https://www.wiley.com/network">Wiley Network</a></strong> 
                            <strong><a href="https://newsroom.wiley.com/">Newsroom</a></strong> 
                        </div> 
                    </div>
                    <div class="col-md-3 about-section"> 
                        <strong><a href="/about">About Wiley</a></strong> 
                        <ul class="footer-menu"> 
                            <li><a href="/corporate-responsibility">Corporate Responsibility</a></li> 
                            <li><a href="/corporate-governance">Corporate Governance</a></li> 
                            <li><a href="/leadership-team">Leadership Team</a></li> 
                            <li><a href="https://investors.wiley.com/">Investors</a></li> 
                            <li><a href="https://careers.wiley.com/">Careers</a></li> 
                        </ul> 
                    </div>
                    <div class="col-md-6 account-section"> 
                        <strong><a href="/my-account">My account</a></strong> 
                        <ul class="footer-menu"> 
                            <li><a href="https://support.wiley.com/">Help</a></li> 
                            <li><a href="/contact">Contact Us</a></li> 
                            <li><a href="/cookie">Cookie Preferences</a></li> 
                        </ul> 
                    </div>
                </div>
            </div>
            <div class="copyright"> 
                <div class="row flex-column-reverse flex-lg-row"> 
                    <div class="col-lg-6 col-md-12"> 
                        <p><a href="/copyright">Copyright © 2000-2023</a> by <a href="/">John Wiley &amp; Sons, Inc.</a>, or related companies. All rights reserved.</p> 
                    </div> 
                    <div class="col-lg-6 col-md-12"> 
                        <ul> 
                            <li><a href="/choose-region">Language/Location</a></li> 
                            <li><a href="/sitemap">Site Map</a></li> 
                            <li><a href="/permissions">Rights &amp; Permissions</a></li> 
                            <li><a href="/privacy">Privacy Policy</a></li> 
                            <li><a href="/terms-of-use">Terms of Use</a></li> 
                        </ul> 
                    </div> 
                </div> 
            </div>
             
        </div>
    );
}

export default Footer;