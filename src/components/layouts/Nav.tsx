import React, { ReactElement, useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BsBriefcase } from 'react-icons/bs';
import { VscFeedback } from 'react-icons/vsc';

import styled from 'styled-components';
import mixins from '../../styles/mixins';

const NavContainer = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem;
  z-index: 4;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 1rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);

  @media ${mixins.SM} {
    gap: 0;
  }

  a {
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    color: var(--color-light);
    font-size: 1.1rem;

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }

    &.active {
      background: var(--color-bg);
      color: var(--color-white);
    }
  }
`;

const Nav = () => {
  const [
    activeNav,
    setActiveNav,
  ] = useState('#');

  const renderNav = (id: string, icon: ReactElement) => (
    <a
      href={id}
      className={activeNav === id ? 'active' : ''}
      onClick={() => setActiveNav(id)}
    >
      {icon}
    </a>
  );

  return (
    <NavContainer>
      {renderNav('#', <AiOutlineHome />)}
      {renderNav('#about', <AiOutlineUser />)}
      {renderNav('#experience', <BiBook />)}
      {renderNav('#services', <RiServiceLine />)}
      {renderNav('#portfolio', <BsBriefcase />)}
      {renderNav('#testimonials', <VscFeedback />)}
      {renderNav('#contact', <BiMessageSquareDetail />)}
    </NavContainer>
  );
};

export default Nav;
