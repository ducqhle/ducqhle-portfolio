import React from 'react';
import styled from 'styled-components';
import { Container, Section } from './commons';
import P1 from '../assets/images/p1.png';
import P2 from '../assets/images/p2.png';
import P3 from '../assets/images/p3.png';
import P4 from '../assets/images/portfolio6.jpg';
import P5 from '../assets/images/p5.png';
import P6 from '../assets/images/p6.png';
import mixins from '../styles/mixins';

const PORTFOLIO_ITEMS = [
  {
    image: P1,
    title: 'Nike Shoes Shoppi',
    linkSource: 'https://github.com/ducqhl/nike-shoes-shoppi',
    liveDemo: 'https://nike-shoes-shoppi.netlify.app/',
  },
  {
    image: P2,
    title: 'E-commerce Appi',
    linkSource: 'https://github.com/ducqhl/e-commerce-app',
    liveDemo: 'https://ecommerce-appi.netlify.app/',
  },
  {
    image: P3,
    title: 'E-commerce Appi Admin',
    linkSource: 'https://github.com/ducqhl/e-commerce-app',
    liveDemo: 'https://ecommerce-appi-admin.netlify.app/',
  },
  {
    image: P4,
    title: 'MREN Application',
    linkSource: 'https://github.com/ducqhl/mern-application',
    liveDemo: 'https://memory-appi.netlify.app/',
  },

  {
    image: P5,
    title: 'Solar Home Bundle',
    liveDemo: 'https://experienceon.com.au/solar-home-bundle',
  },
  {
    image: P6,
    title: 'Kelley Blue Book ',
    liveDemo: 'https://www.kbb.com/',
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
    margin: 1.2rem 0 1.2rem;
  }
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
