import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Title from '../components/Title';

const Contact = () => (
  <>
    <Title>Get in touch</Title>
    <p>If you have anything to tell me, show me, or just want or say hi, feel free to reach out at anytime!</p>
    <h5>Let's connect</h5>
    <div>
      <SocialIcon style={{ marginRight: 5 }} url="https://www.facebook.com/hellosirandy" />
      <SocialIcon style={{ marginRight: 5 }} url="https://www.instagram.com/andyxchien/" />
      <SocialIcon style={{ marginRight: 5 }} url="https://www.linkedin.com/in/andy-chien-9973b1117/" />
      <SocialIcon style={{ marginRight: 5 }} url="https://github.com/hellosirandy" />
      <SocialIcon style={{ marginRight: 5 }} url="https://twitter.com/andyxchien" />
    </div>
  </>
);

export default Contact;
