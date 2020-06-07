import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Title from './Title';
import Experience from './Experience';

const workExperiences = [
  {
    title: 'Software Apps Engineer',
    subtitle: 'Yahoo (Sports)',
    time: '03/09/2020 - ',
    location: 'San Francisco, California',
    bulletins: [
      'Focusing on Yahoo Sports iOS App (Swift, Objective C)',
      'Mainting an internal tool described in internship experience below.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    subtitle: 'Yahoo (Homepage)',
    time: '06/03/2019 - 08/24/2019',
    location: 'Sunnyvale, California',
    bulletins: [
      'Enhanced and maintained a page performance budget tool plugged into the CI/CD pipeline, along with a web dashboard where users can review, rerun and analyze the test results',
      'Project is utilized by Yahoo Sports, Yahoo News, Yahoo Mail, Yahoo Homepage',
      'Leveraged knowledge in Full Stack Web development, Express.js (JavaScript), Docker, MySQL, Sitespeed.io',
    ],
  },
  {
    title: 'Software Engineer Intern',
    subtitle: 'Hard Core Technology',
    time: '05/21/2018 - 08/02/2018',
    location: 'Taipei, Taiwan',
    bulletins: [
      'Individually developed a mobile application with React Native (JavaScript) and launched it on App Store',
      'Open-sourced an REST API wrapper NPM JavaScript package (661 downloads)',
    ],
  },
  {
    title: 'Software Engineer Intern',
    subtitle: 'Suiqui',
    time: '07/03/2017 - 09/03/2017',
    location: 'Taipei, Taiwan',
    bulletins: [
      'Co-developed a Task Management Web Application to provide task and file management services',
      'Front-end: Developed a cross-platform Progressive Web App (PWA) using Angular 4 with Ionic framework 3 (TypeScript)',
      'Back-end: Built a production server using Django, NoSQL, Google App Engine on Google Cloud Platform',
    ],
  },
];

const educationExperiences = [
  {
    title: 'Columbia University',
    subtitle: 'Master of Science in Computer Science',
    time: '09/2018 - 12/2019',
    location: 'New York, New York',
  },
  {
    title: 'National Tsing Hua University',
    subtitle: 'Bachelor of Science in Computer Science',
    time: '09/2013 - 06/2017',
    location: 'Hsinchu, Taiwan',
  },
];

const CV = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState('');
  useEffect(() => {
    setTitle(`${pathname === '/work' ? 'Work' : 'Education'} - Andy Chien`);
  }, [pathname]);
  const experiences = pathname === '/work' ? workExperiences : educationExperiences;
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Title>{title}</Title>
      {experiences.map((exp, idx) => (
        <Experience
          key={exp.time}
          title={exp.title}
          subtitle={exp.subtitle}
          time={exp.time}
          location={exp.location}
          bulletins={exp.bulletins || []}
          last={idx === experiences.length - 1}
        />
      ))}
    </>
  );
};

export default CV;
