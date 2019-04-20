// import React from 'react';

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//     Welcome Zirafer !
//   </div>
// );

// export default Home;

import React from 'react';
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

const Home = () => (
  <div>
<body>
    {/* <header> */}
        {/* <div class="wrapper"> */}
            {/* <nav class="navbar">
                <a href="#" class="logo">
                    <img src="build/assets/img/HeaderLogo.svg" alt="Ziraf Logo"></img>
                </a>
                <ul class="nav-links">
                    <li class="nav-item"><a href="#">Home</a></li>
                    <li class="nav-item"><a href="#">Team</a></li>
                    <li class="nav-item"><a href="#">Jobs</a></li>
                    <li class="nav-item"><a href="#">Contact Us</a></li>
                </ul>
            </nav> */}
            {/* <nav>
                <ul class="navbar">
                    <li><img href="#" alt="Ziraf Logo" src="build/assets/img/HeaderLogo.svg"></img></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>  */}
        {/* </div> */}
    {/* </header> */}
    <main>
        <div class="wrapper">
            <h1>Tired of Fake Food Reviews?</h1>
            <section id="primarylanding">
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    
                      {/* <img class="download" src ={ AppleBadge } alt="App Store Download" ></img>
                      <img class="download" src ={ GoogleBadge } alt="Play Store Download"></img> */}
                    
                </div>
                <div>
                {/* <img class="illustration" src= { VisualRgb1 } alt="" ></img> */}
                </div>
            </section>
        </div>
        <div class="orange">
        <div class="wrapper">
            {/* <h1 style={"text-align: center;"}>Our Story</h1> */}
            <h1>Our Story</h1>
            <section id="ourstory">
                <div>
                    <p>We love food and by love we mean we go to the ends of earth to hunt for that plate of pad thai or the L’amande fraîche that looks almost too beautiful to eat.</p>
                    <p>While there are food sites out there to help us find for good food , we are getting so sick and tired of the rise of fake food reviews!! This is ruining the experience of having a meal with someone you care about. So, we decided to take matters into our stomach/hands #yougetthepun.</p>
                    <p>We decided to carefully handpick credible food bloggers, chefs and Instagrammers known as Zirafers. The best part? There will be NO public reviews.</p>
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
                    {/* <img alt="" height="auto" width="590px" src={ VisualRgb2 }></img> */}
                </div>
                <div>
                    <h2>Show Your Best Food</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <p>If you are a food business owner, and you want to work together with us, drop us an email at: <b>food@zirafapp.com</b></p>
                    <button>LEARN MORE</button>
                </div>
            </section>
        </div>
        <div class="wrapper">
            <section id="zirafer">
                <div>
                    <h2>Passion for Food</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <p>If you are a foodie who needs a platform to express yourself, drop us an email at: <b>zirafers@zirafapp.com</b></p>
                    <button>LEARN MORE</button>
                </div>
                <div>
                    {/* <img src={ VisualRgb3 } alt="" height="auto" width="590px" ></img> */}
                </div>
            </section>
        </div>
        <div class="wrapper">
            {/* <h1 style="text-align: center;">Our Features</h1> */}
            <h1>Our Features</h1>
        </div>
        <div class="wrapper">
            <section id="ourfeatures">
                <div class="feature-card">
                    {/* <img src= {Group63} alt="" ></img> */}
                    <h2>Delivery</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p></div>
                <div class="feature-card">
                {/* <img src= {Group64} alt="" ></img> */}
                    <h2>Book a Table</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p></div>
                <div class="feature-card">
                 {/* <img src= {Group65} alt="" ></img> */}
                    <h2>Get a Ride</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p></div>
            </section>
        </div>
        {/* <h1 style="text-align:center;">Download Our App</h1> */}
        <h1>Download Our App</h1>
        <div class="wrapper">
            <section id="cta">
                <div>
                    {/* <img src={iPhone1} alt="Ziraf Mockup 1" height="auto" width="450px"></img> */}
                </div>
                <div>
                    {/* <img src={iPhone2} alt="Ziraf Mockup 2" height="auto" width="450px"></img> */}
                </div>
            </section>
        </div>
        <div class="wrapper">
            <section id="ctadownload">
                <div>
                  {/* <img class="download" src ={ AppleBadge } alt="App Store Download" ></img> */}
                </div>
                <div>
                  {/* <img class="download" src ={ GoogleBadge } alt="Play Store Download"></img> */}
                </div>
            </section>
        </div>
        </div>
    </main>
    <footer>
        <div class="wrapper-social-icons">
            <h3>Follow Ziraf on Social Media</h3>
            <div class="social-icons">
                {/* <!-- #737373 for social media buttons --> */}
                <ul>
                    <a> <i class="fa fa-facebook"/></a>
                    <li><a class="fa fa-instagram"></a></li>
                    <li><a class="fa fa-twitter"></a></li>
                    <li><a class="fa fa-youtube"></a></li>
                </ul>
            </div>
            <p>Copyright © 2019 Ziraf Ltd.</p>
        </div>
    </footer>


</body>
  </div>
);

export default Home;
