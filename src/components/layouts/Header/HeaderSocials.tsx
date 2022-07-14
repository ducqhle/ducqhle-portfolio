import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import styled from 'styled-components';
import mixins from '../../../styles/mixins';

const HeaderSocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  position: absolute;
  left: 2rem;
  bottom: 3rem;

  &::after {
    content: '';
    width: 1px;
    height: 3rem;
    background: var(--color-primary);
  }

  @media ${mixins.SM} {
    display: none;
  }
`;

const HeaderSocials = () => {
  return (
    <HeaderSocialsContainer>
      <a
        href="https://linkedin.com/ducqhle"
        target="_blank"
      >
        <BsLinkedin size={'1.5rem'} />
      </a>
      <a
        href="https://github.com/ducqhl"
        target="_blank"
      >
        <BsGithub size={'1.5rem'} />
      </a>
    </HeaderSocialsContainer>
  );
};

export default HeaderSocials;
