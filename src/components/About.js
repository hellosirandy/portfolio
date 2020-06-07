import React from 'react';
import Image from 'react-bootstrap/Image';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';
import aboutImage from '../assets/images/about.jpeg';
import Title from './Title';

const styles = {
  container: {
    maxWidth: 900,
  },
  image: {
    width: 300,
    float: 'right',
    marginLeft: 30,
    marginBottom: 20,
  },
  imageResponsive: {
    width: '100%',
  },
  paragraph: {
    fontWeight: 300,
  },
};

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  return (
    <div style={styles.container}>
      <Helmet>
        <title>About - Andy Chien</title>
      </Helmet>
      <Title>About</Title>
      <Image style={isMobile ? styles.imageResponsive : styles.image} src={aboutImage} rounded />
      <p style={styles.paragraph}>
      I'm a software engineer based in San Francisco, California. I currently specialize in iOS development, while web development and Natural Language Processing were also two of my professions.
      </p>
      <p style={styles.paragraph}>
      I grew up in
        {' '}
        <a href="https://eng.taiwan.net.tw/m1.aspx?sNo=0002121" target="_blank" rel="noopener noreferrer">Kaohsiung, Taiwan</a>
: an industrial city which locate at the southern tip of the island. The warm weather in this town built my sunny personality.
Here I was lucky enough to be born and raised by my family who broaden my horizon and opened my eyes to the world.
      </p>
      <p style={styles.paragraph}>
      After graduating from National Tsing Hua University, I moved to New York in 2018 to carry on my studies in Computer Science at Columbia University.
      Although one and a half years stay in New York was short, it will always be a great part of my life.
      </p>
      <p style={styles.paragraph}>
        New York is the place influenced and changed me the most by far, even if it is the shortest period I spent in my life for actually staying at a city. There are all kinds of people in all walks of life I could easily meet in NY such as artists, teachers, investors, students, engineers and so on. Although the acquaintances I had are mostly short and brief, but it adds up from talking lifes, career, thoughts with them. The time in New York gave me the spirit of energey and progressiveness which will be so beneficial for my early career.
      </p>
      <p style={styles.paragraph}>
In the end of 2019, I graduated from Columbia University and started a new life in San Francisco in Spring, 2020 as a full time software engineer.
      I hope and believe the rest of my life will be a great journey.
      </p>
      <p style={styles.paragraph}>
        I am a huge sports guy who commits a big portion of free time in watching sports, following sports and playing sports. I played varsity backetball in high school and badminton in college, while I also enjoy playing baseball/softball with friends. I am a Packers/Lackers/Pirates/Penguins/Chelsea fan, in a hardcore way that most people can hardly imagine.
      </p>
      <p style={styles.paragraph}>
        Other than sports, I recently picked up investing as another intestest to commit myself in. As a beginner(~ 1 year experience), I found that regularly putting a little portion of salary into investing is a very good way to start. By investing, I can also be emmerged in what the world is actually going on, learning and receiving new perspectives of life such as risk management while having a goal of saving and having profit. In addition and to be honest, it feels really
        {' '}
        <b>good</b>
        {' '}
for being one of the owners of the companies/brands I like even if I only own one share or two. I'm so into investing recently that I build a
        {' '}
        <a href="http://finance.andychien.me/#/user/Hxlz3hx68cekXCoFfCd1xJbX8cH2" target="_blank" rel="noopener noreferrer">finance website</a>
        {' '}
to help me have a better control of my investment portfolio. Please feel free to check it out!
      </p>
    </div>
  );
};

export default About;
