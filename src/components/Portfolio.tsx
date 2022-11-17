import React from 'react';
import styled from 'styled-components';
import { Container, Section } from './commons';
import P1 from '../assets/images/p1.png';
import P2 from '../assets/images/p2.png';
import P3 from '../assets/images/p3.png';
import P4 from '../assets/images/portfolio6.jpg';
import P5 from '../assets/images/p5.png';
import P7 from '../assets/images/p7.png';
import mixins from '../styles/mixins';

const PORTFOLIO_ITEMS = [
  {
    image: P7,
    title: 'GreenLogs',
    liveDemo: 'https://greenlogs.netlify.app/',
    linkSource: 'https://github.com/ducqhl/greenlogs',
    technology: [
      'Vue3',
      'Quill',
      'Firestore',
      'Vite',
    ],
  },
  {
    image: P1,
    title: 'Nike Shoes Shoppi',
    linkSource: 'https://github.com/ducqhl/nike-shoes-shoppi',
    liveDemo: 'https://nike-shoes-shoppi.netlify.app/',
    technology: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
  },
  {
    image: P2,
    title: 'E-commerce Appi',
    linkSource: 'https://github.com/ducqhl/e-commerce-app',
    liveDemo: 'https://ecommerce-appi.netlify.app/',
    technology: [
      'React',
      'MongoDB',
      'NodeJS',
      'Express',
      'StyledComponent',
    ],
  },
  {
    image: P3,
    title: 'E-commerce Appi Admin',
    linkSource: 'https://github.com/ducqhl/e-commerce-app',
    liveDemo: 'https://ecommerce-appi-admin.netlify.app/',
    technology: [
      'React',
      'MongoDB',
      'NodeJS',
      'Express',
      'StyledComponent',
    ],
  },
  {
    image: P4,
    title: 'MERN Application',
    linkSource: 'https://github.com/ducqhl/mern-application',
    liveDemo: 'https://memory-appi.netlify.app/',
    technology: [
      'React',
      'MongoDB',
      'NodeJS',
      'Express',
    ],
  },
];

const PortfolioContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
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
    margin: 1.2rem 0 0rem;
  }
`;

const PortfolioItemTechnology = styled.span`
  font-size: 0.8rem;
  color: var(--color-primary-variant);
  font-style: italic;
  line-height: 1rem !important;
  min-height: 3rem;
  display: block;
`;

const PortfolioItemCta = styled.div`
  display: flex;
  gap: 1rem;
`;

const PortfolioItemImage = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
  height: 10rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
            {p.technology && <PortfolioItemTechnology>{p.technology.join(', ')}</PortfolioItemTechnology>}

            <PortfolioItemCta>
              {p.linkSource && (
                <a
                  href={p.linkSource}
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
              )}
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
