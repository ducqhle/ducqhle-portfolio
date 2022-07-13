import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdCatchingPokemon } from 'react-icons/md';
import styled from 'styled-components';
import mixins from '../../styles/mixins';

const FooterContainer = styled.footer`
  background: var(--color-primary);
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;

  a {
    color: var(--color-bg);
  }
`;

const FooterLogo = styled.a`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;
`;

const Permalinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;

  @media ${mixins.XS} {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Sociallinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;

  a {
    background: var(--color-bg);
    color: var(--color-white);
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    border: 1px solid transparent;
  }

  @media ${mixins.MD} {
    margin-bottom: 2.6rem;
  }
`;

const FooterCopyright = styled.div`
  margin-bottom: 4rem;
  color: var(--color-bg);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo href="#">DUC LE</FooterLogo>

      <Permalinks>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          {' '}
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testtimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </Permalinks>

      <Sociallinks>
        <a href="https://linkedin.com/ducqhle">
          <FaLinkedin />
        </a>
        <a href="https://github.com/qucqhl">
          <FaGithub />
        </a>
        <a href="https://ducqhle.github.io">
          <MdCatchingPokemon />
        </a>
      </Sociallinks>

      <FooterCopyright>
        <small>&copy; DUCLE portfolio. All right reverved.</small>
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
