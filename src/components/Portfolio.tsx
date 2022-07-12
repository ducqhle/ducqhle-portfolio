import React from 'react';
import styled from 'styled-components';
import { Container, Section } from './commons';
import P1 from '../assets/images/portfolio1.jpg';
import P2 from '../assets/images/portfolio2.jpg';
import P3 from '../assets/images/portfolio3.jpg';
import P4 from '../assets/images/portfolio4.jpg';
import P5 from '../assets/images/portfolio5.png';
import P6 from '../assets/images/portfolio6.jpg';
import mixins from '../styles/mixins';

const PORTFOLIO_ITEMS = [
  {
    image: P1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    linkSource: 'https://github.com',
    liveDemo: 'https://github.com',
  },
  {
    image: P2,
    title: 'Charts templates & infographics in Figma',
    linkSource: 'https://github.com',
    liveDemo: 'https://github.com',
  },
  {
    image: P3,
    title: 'Figma dashboard UI kit for data design web apps',
    linkSource: 'https://github.com',
    liveDemo: 'https://github.com',
  },
  {
    image: P4,
    title: 'Maintaining tasks and tracking progress',
    linkSource: 'https://github.com',
    liveDemo: 'https://github.com',
  },
  {
    image: P5,
    title: 'Charts templates & inforgraphics in Figma',
    linkSource: 'https://github.com',
    liveDemo: 'https://github.com',
  },
  {
    image: P6,
    title: 'Charts templates & inforgraphics in Figma',
    linkSource: 'https://github.com',
    liveDemo: 'https://github.com',
  },
];

const PortfolioContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2.5rem;

  @media ${mixins.MD} {
    gap: 1.5rem;
  }
`;

const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }

  h3 {
    margin: 1.2rem 0 2rem;
  }
`;

const PortfolioItemCta = styled.div`
  display: flex;
  gap: 1rem;
`;

const PortfolioItemImage = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`;

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <PortfolioContainer>
        {PORTFOLIO_ITEMS.map(p => (
          <PortfolioItem>
            <PortfolioItemImage>
              <img src={p.image} />
            </PortfolioItemImage>

            <h3>{p.title}</h3>

            <PortfolioItemCta>
              <a
                href={p.linkSource}
                className="btn"
              >
                Github
              </a>
              <a
                href={p.liveDemo}
                className="btn btn--primary"
                target="_blank"
              >
                Live Demo
              </a>
            </PortfolioItemCta>
          </PortfolioItem>
        ))}
      </PortfolioContainer>
    </Section>
  );
};

export default Portfolio;
