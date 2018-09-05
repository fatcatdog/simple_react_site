import React from 'react';
import profilepicture from '../images/profilepicture.jpg';
import '../css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => (
  <div>

    <div className="top_portion">
     <img className="our_image" src={profilepicture} alt="portrait of jacob" />

     </div>
     <div className="bottom_portion">

     <ul className="social_list">
      <li><a className="social_link" href="https://github.com/fatcatdog" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
      <li><a className="social_link" href="https://www.linkedin.com/in/jake-duchen-05080753/" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
      <li><a className="social_link" href="https://twitter.com/jakeduchen" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
      <li><a className="social_link" href="https://medium.com/@jakeduchen">blog</a></li>
     </ul>
     </div>

  </div>

)

export default Home;
