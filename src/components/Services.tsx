import React from 'react';
import { BiCheck } from 'react-icons/bi';
import styled from 'styled-components';
import mixins from '../styles/mixins';
import { Container, Section } from './commons';

const SERVICE_LIST = [
  {
    serviceName: 'UI/UX Design',
    services: [
      'Lorem ipsum dolor sit amet consectetur elit.',
      'Lorem dolor sit amet consectetur elit.',
      'Lorem ipsum dolor amet consectetur elit.',
      'Lorem ipsum dolor consectetur sit amet consectetur elit.',
      'Lorem ipsum dolor sit amet consectetur elit.',
    ],
  },
  {
    serviceName: 'Web Development',
    services: [
      'Lorem ipsum dolor sit amet consectetur elit.',
      'Lorem consectetur ipsum dolor sit amet consectetur elit.',
      'Lorem ipsum dolor consectetur sit amet consectetur elit.',
      'Lorem ipsum dolor sit amet consectetur elit.',
      'Lorem ipsum consectetur dolor sit amet consectetur elit.',
      'Lorem consectetur ipsum dolor sit amet consectetur elit.',
      'Lorem ipsum dolor sit amet consectetur elit.',
    ],
  },
  {
    serviceName: 'Content Creation',
    services: [
      'Lorem ipsum dolor amet sit amet consectetur elit.',
      'Lorem  dolor ipsum dolor consectetur sit amet consectetur elit.',
      'Lorem ipsum consectetur dolor sit amet consectetur elit.',
      'Lorem ipsum ipsum dolor sit amet consectetur elit.',
      'Lorem ipsum dolor sit amet consectetur elit.',
    ],
  },
];

const ServicesContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 3rem;

  @media ${mixins.SM} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceContainer = styled.article`
  background: var(--color-bg-variant);
  border-radius: 0 0 2rem 2rem;
  border: 1px solid var(--color-primary);
  height: auto;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  @media ${mixins.SM} {
    height: fit-content;
  }
`;

const ServiceHead = styled.div`
  background: var(--color-primary);
  padding: 2rem;
  border-radius: 0 0 2rem 2rem;
  box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);

  h3 {
    color: var(--color-bg);
    font-size: 1rem;
    text-align: center;
  }
`;

const ServiceList = styled.ul`
  padding: 2rem;

  li {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 0.9rem;
  }
`;

const ServiceListIcon = styled.div`
  color: var(--color-primary);
  margin-top: 2px;
`;

const Services = () => {
  return (
    <Section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <ServicesContainer>
        {SERVICE_LIST.map(sl => (
          <ServiceContainer>
            <ServiceHead>
              <h3>{sl.serviceName}</h3>
            </ServiceHead>

            <ServiceList>
              {sl.services.map(s => (
                <li>
                  <ServiceListIcon>
                    <BiCheck />
                  </ServiceListIcon>
                  <p>{s}</p>
                </li>
              ))}
            </ServiceList>
          </ServiceContainer>
        ))}
      </ServicesContainer>
    </Section>
  );
};

export default Services;
