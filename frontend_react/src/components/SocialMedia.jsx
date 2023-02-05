import React from 'react';
import { BsLinkedin, BsInstagram} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/nayan-jyoti-adhikary-7ba820148/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
    </div>
    <div>
      <a href="https://www.facebook.com/nj.adhikary/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
    </div>
    <div>
    <a href="https://www.instagram.com/newton.diary/" target="_blank" rel="noreferrer"><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
