import React from 'react';
import styled from 'styled-components';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../assets/images/me-about.png';
import mixins from '../styles/mixins';
import { Section, Container } from './commons';

const AboutContainer = styled(Container)`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media ${mixins.LG} {
    grid-template-columns: 35% 55%;
    gap: 10%;
  }

  @media ${mixins.MD} {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(45deg, transparent, var(--color-primary), transparent);
  display: grid;
  place-items: center;

  @media ${mixins.MD} {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  @media ${mixins.SM} {
    width: 90%;
    margin: 2rem auto 4rem;
  }
`;

const AboutMeImage = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: var(--transition);

  &:hover {
    transform: rotate(0deg);
  }
`;

const AboutContent = styled.div`
  p {
    margin: 2rem 0 2.6rem;
    color: var(--color-light);
  }

  @media ${mixins.MD} {
    text-align: center;
  }
`;

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1.5rem;
`;

const AboutCard = styled.article`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  h5 {
    font-size: 0.95rem;
  }

  small {
    font-size: 0.7rem;
    color: var(--color-light);
  }
`;

const AboutIcon = styled.div`
  color: var(--color-primary);
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <Section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <AboutContainer className="container">
        <AboutMe>
          <AboutMeImage>
            <img
              src={ME}
              alt=""
            />
          </AboutMeImage>
        </AboutMe>
        <div>
          <AboutCards>
            <AboutCard>
              <AboutIcon>
                <FaAward />
              </AboutIcon>
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </AboutCard>
            <AboutCard>
              <AboutIcon>
                <FiUsers />
              </AboutIcon>

              <h5>Collaboration</h5>
              <small>5+ Worldwide (US, AU)</small>
            </AboutCard>
            <AboutCard>
              <AboutIcon>
                <VscFolderLibrary />
              </AboutIcon>
              <h5>Projects</h5>
              <small>20+ Participated</small>
            </AboutCard>
          </AboutCards>
          <AboutContent>
            <p>
              With about 5 years of experience, I've developed highly interactive applications using the latest web
              technologies. I've contributed to 5+ projects with SEO optimization, high interactive UX/UI, performance,
              and full responsive. I took pride in both getting the task done and constantly seeking ways to make it
              better. I'm a lifelong learner with a problem-solving mindset, always striving for excellence.
            </p>
            <a
              href="#contact"
              className="btn btn-primary"
            >
              Let's Talk
            </a>
          </AboutContent>
        </div>
      </AboutContainer>
    </Section>
  );
};

export default About;
