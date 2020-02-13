import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { useMediaQuery } from 'react-responsive';
import aboutImage from '../../assets/images/about.jpeg';
import styles from './styles';
import Title from '../Title';

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  useEffect(() => {
    document.title = 'About - Andy Chien';
  });
  return (
    <div style={styles.container}>
      <Title>About</Title>
      <Image style={isMobile ? styles.imageResponsive : styles.image} src={aboutImage} rounded />
      <p style={styles.paragraph}>
      I'm a software engineer based in San Francisco, California who currently specializes in Android development.
      Web development and Natural Language Processing were also two of my professions.
      </p>
      <p style={styles.paragraph}>
      I grew up in
        {' '}
        <a href="https://eng.taiwan.net.tw/m1.aspx?sNo=0002121" target="_blank" rel="noopener noreferrer">Kaohsiung, Taiwan</a>
: an industrial city which is located at the southern tip of the island. The warm weather in this town built my sunny personality.
Here I was lucky enough to be born and raised by my family who broaden my horizon and opened my eyes to the world.
      </p>
      <p style={styles.paragraph}>
      After graduating from National Tsing Hua University, I moved to New York in 2018 to carry on my studies in Computer Science at Columbia University.
      Although one and a half years stay in New York was short, it will always be a great part of my life.
      </p>
      <p style={styles.paragraph}>
In the end of 2019, I graduated from Columbia University and started a new life in San Francisco in Spring, 2020 as a full time software engineer.
      I hope and believe the rest of my life will be a great journey.

      </p>
    </div>
  );
};

export default About;
