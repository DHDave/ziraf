import React from 'react';
import Image from 'react-image-resizer';
import { NavLink } from 'react-router-dom';
import './Home.css';


import AppleBadge from "./Images/Apple_Badge_A0_Rectangle_13_pattern.png"
import GoogleBadge from "./Images/googleplay_store_badge_A0_Rectangle_15_pattern.png"
import Group63 from "./Images/Group 63.svg"
import Group64 from "./Images/Group 64.svg"
import Group65 from "./Images/Group 65.svg"
// import HeaderLogo from "./Images/HeaderLogo.svg"
import iPhone1 from "./Images/iPhonex-mockup-moeslah.png"
import iPhone2 from "./Images/iPhonex-mockup-moeslah2.png"
import LogoGTxt from "./Images/Logo-GreyText.png"
import LogoGWxt from "./Images/Logo-WhiteText.png"
import VisualRgb1 from "./Images/visualRGB-1-01.png"
import VisualRgb2 from "./Images/visualRGB-1-02.png"
import VisualRgb3 from "./Images/visualRGB-1-03.png"

import Facebook from './Images/Facebook-EED700.svg'
import Instagram from './Images/Instagram-EED700.svg'
import Twitter from './Images/Twitter-EED700.svg'
import Youtube from './Images/Youtube-EED700-1.svg'



const style = {
    image: {
        border: '1px solid #ccc',
        background: '#fefefe',
    },
    };

const Home = () => (
    <div>
        <body>
            {/* <header>
                <div class="wrapper">
                </div>
            </header> */}
            <main>
                <div class="wrapper">
                    <h1 > Tired of Fake Food Reviews?</h1>
                    <img
                        class="illustration" 
                        src= { VisualRgb1 } 
                        alt=""
                        width={400}
                        height={300}
                        // style={style.image}
                        />
                      
                
                    <h2>So are we…</h2>
                    <section id="primarylanding">
                        <div>
                            <p>
                                With The Times finding that 1/3 of TripAdvisor reviews are fake, we think it’s about time we have a new, trustworthy source for food reviews. At Ziraf we aspire to excellence through trust. We’ve been working on our app for over a year now, and this is just the beginning. 
                            </p>
                            <p>
                                Ziraf allows you to find new spots, read reviews, check menus, book your table and get a ride straight to the door. There are plenty of food reviewing sites, but this is a one-stop-shop for all your dining-out needs. We hope it can save you time and save you from eating sub-par food. There’s nothing worse (in our eyes at least!) than spending your cash on something that doesn’t leave you satisfied and in love with food. 
                            </p>
                            <p>
                                Available on the App Store and Google Play…

                            </p>
                            </div>
                            </section > 

                        <section class="img-in-line">   
                        {/* <div  classname= "#ctadownload" >
                            <img class="download" src ={ AppleBadge } alt="App Store Download" ></img>
                            <img class="download" src ={ GoogleBadge } alt="Play Store Download"></img>
                        </div> */}
                        <div class="wrapper">
                    <section id="ctadownload">
                        <div class="img-in-line">
                        <img class="download" src ={ AppleBadge } alt="App Store Download" ></img>
                        <img class="download" src ={ GoogleBadge } alt="Play Store Download"></img>
                        </div>
                    </section>
                </div>

                        
                        {/* <div>
                        <img class="illustration" src= { VisualRgb1 } alt="" ></img>
                        
                        </div> */}



                    </section>
                </div>
                <div class="orange">
                <div class="wrapper">
                    {/* <h1 style={"text-align: center;"}>Our Story</h1> */}
                    <h1>Our Story</h1>
                    <section id="ourstory">
                        <div>
                            <p>Put simply, we love food. Finding a dish we talk to our friends about for months is what makes us tick, and we want to share trustworthy recommendations with the world.</p>
                            <p>It is becoming clearer as time goes by, food is more than just fuel for our engines. Every dish is the end product of years of culture, care, success and failure. Some of our teams’ best memories have been shared around a table, enjoying good food and good company.</p>
                            <p>Our community of ‘Zirafers’ do the work for you. They are a hand-picked group of Instagrammers, food bloggers and chefs. They live and breathe food - and they’re dedicated to providing our users with honest reviews (without the financial incentives a lot of food - Instagrammers are tempted by). We ensure their reviews are of a consistently high standard - so you don’t have to rely on Joe Public. There are plenty of hidden gems in London, but why should they be hidden?  </p>
                            <p>Paul, our CEO and co-founder, studied Finance and Accounting at Warwick, where he met CY- our co-founder and COO. Ziraf is the culmination of their passion for business and food. For more on our team <NavLink to="/Team"> click here.</NavLink> </p>
                            </div>
                        <div>
                            <p>Why? We have a simple belief in this philosophy. If you are sick, you go to the doctor. If your pipe is leaking, you call the plumber. So why not for food recommendations, you go to a trusted food critic?</p>
                            <p>So, we handpick a selected group of Zirafers to give the real dibs on London's best restaurants, cafes and hidden gems. Then, to expose this lil secret to more foodie friends, we decided to simplify all of these into a mobile app called Ziraf.</p>
                            <p>With Ziraf, you get access to yummy restaurants, read honest reviews, know top must-order dishes, customised menus and more, all with just one tap. Ziraf. Trustworthy food recommendations.</p>
                        </div>
                    </section>
                </div>
                <div class="wrapper">
                    <section id="fbowner">
                        <div>
                            <img class="illustration"  alt="" height="auto" width="590px" src={ VisualRgb2 }></img>
                        </div>
                        <div>
                            <h2>Share your Best Food, and Make it Better</h2>
                                <p>Users are able to give feedback to each restaurant through the app, but these reviews will not be displayed publicly. This will deter competitors from writing fake reviews as only the restaurant owners/staff will be able to access the feedback.</p>
                                <p>Ziraf plans to introduce a subscription-based package, “Ziraf Pro”. In this package, restaurants will be given the tabulated data which includes a tone analyser and also advice on how to improve through a report and infographic. We want to stay away from the ‘1 bad dish = 1 damning review’ mentality of some review platforms and help restaurants to improve using our in-house data analysis. Let’s work together.</p>
                                <p>We also want chefs and restaurant owners to be able to share their stories on our platform- giving our users an insight into the journey behind the food. #MyZirafStory</p>
                                <p>Drop us an email at: food@zirafapp.com</p>
                            <button class="btn">LEARN MORE</button>
                        </div>
                    </section>
                </div>
                <div class="wrapper">
                    <section id="zirafer">
                        <div>
                            <section>
                                <h2>Get Involved and Share your Passion for Food</h2>
                                <p>We are expanding our community of Zirafers. If you enjoy finding new places to eat (whether that be restaurants, cafes, dessert spots or street vendors) and want to share your recommendations on a new platform - we’d like to chat!</p>
                                <p>Being a Zirafer means joining a group of passionate young people - and you’ll be invited to events where we talk food and exchange tips on writing the best reviews!</p>
                                <p>Get involved. </p> 
                                <p>Drop us an email at: zirafers@zirafapp.com</p>
                            </section>
                            <button class="btn">LEARN MORE</button>
                        </div>
                        <div>
                            <img class="illustration" src={ VisualRgb3 } alt="" height="auto" width="590px" ></img>
                        </div>
                    </section>
                </div>
                <div class="wrapper">
                    {/* <h1 style="text-align: center;">Our Features</h1> */}
                    <h1>Our Features</h1>
                </div>
                <div class="wrapper1">
                    <section id="ourfeatures">
                        <div class="feature-card">
                            <img class="feature-card-img" src= {Group63} alt="" ></img>
                            <h3>Delivery</h3>
                            <p>We’ve linked with (???) to make ordering from your favourite restaurants seamless. Just search for a restaurant, check the menu, and click order!</p>
                        </div>
                        <div class="feature-card">
                        <img class="feature-card-img" src= {Group64} alt="" ></img>
                            <h3>Book a Table</h3>
                            <p>We’ve linked with OpenTable to make it easier to book a table at your favourite place or try out a new spot. Just click on the (???) icon on your restaurant of choice.</p>
                        </div>
                        <div class="feature-card">
                        <img class="feature-card-img" src= {Group65} alt="" ></img>
                            <h3>Get a Ride</h3>
                            <p>We’ve linked with Uber to make your life easier and reduce the time it takes for you to get from, “A meal out would be good” to, “That meal was amazing”. Click the Uber logo under your restaurant of choice to get a ride. </p>
                        </div>
                        
                    </section>
                </div>
                {/* <h1 style="text-align:center;">Download Our App</h1> */}
                
                <div class="wrapper">
                <h1>Download Our App</h1>
                    <section id="cta">
                        <div class="iphone-img" >
                            <img class="illustration2" src={iPhone1} alt="Ziraf Mockup 1" height="auto" width="450px"></img>
                            <img class="illustration2" src={iPhone2} alt="Ziraf Mockup 2" height="auto" width="450px"></img>
                        </div>
                    </section>
                {/* </div>
                <div class="wrapper"> */}
                    <section id="ctadownload">
                        <div class="img-in-line">
                        <img class="download" src ={ AppleBadge } alt="App Store Download" ></img>
                        <img class="download" src ={ GoogleBadge } alt="Play Store Download"></img>
                        </div>
                    </section>
                </div>
                </div>
            </main>
            <footer>
                <div class="wrapper-social-icons">
                    <h4>Follow Ziraf on Social Media</h4>
                    <div class="social-icons">
                        {/* <!-- #737373 for social media buttons --> */}
                        {/* <ul> */}
                            <img class="social-img" src={Facebook} alt="Facebook Logo"></img>
                            <img class="social-img" src={Instagram} alt="Instagram Logo"></img>
                            <img class="social-img" src={Twitter} alt="Twitter Logo"></img>
                            <img class="social-img" src={Youtube} alt="Youtube Logo"></img>
                            {/* <a><i class="fa fa-facebook"/></a>
                            <li><a class="fa fa-instagram"></a></li>
                            <li><a class="fa fa-twitter"></a></li>
                            <li><a class="fa fa-youtube"></a></li> */}
                        {/* </ul> */}
                    </div>
                    <p>Copyright © 2019 Ziraf Ltd.</p>
                </div>
            </footer>
        </body>
    </div>
);

export default Home;
