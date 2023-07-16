import React from 'react';
import CTA from './CTA';
import ME from '../../../assets/images/me-true.jpg';
import ME_BACKDROP from '../../../assets/images/me-backdrop.png';
import HeaderSocials from './HeaderSocials';
import styled from 'styled-components';
import mixins from '../../../styles/mixins';

const StyledHeader = styled.header`
  height: 100vh;
  padding-top: 3rem;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`;

const TopHeaderContainer = styled.div`
  height: 25vh;
`;

const MeContainer = styled.div`
  width: 100%;
  height: 65vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const MeWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 100%;
  overflow: unset;
`;

const MeImg = styled.img`
  height: 22rem;
  width: 22rem;
  border-radius: 50%;
  z-index: 3;

  transition: var(--transition);

  &:hover {
    transform: rotate(10deg);
  }

  @media ${mixins.MD} {
    width: 22rem;
    height: 22rem;
  }

  @media (max-height: 42rem) {
    width: 18rem;
    height: 18rem;
  }
`;

const MeBackdrop = styled.div`
  position: absolute;
  border-radius: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;

  img {
    width: 35rem;
    margin-left: 3rem;
    z-index: 2;

    @media ${mixins.MD} {
      width: 50rem;
    }
  }
`;

const ScrollUpContainer = styled.div`
  position: fixed;
  right: 0rem;
  bottom: 5rem;
  font-weight: 300;
  font-size: 0.9rem;
  transform: rotate(90deg);

  @media ${mixins.SM} {
    display: none;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer className="container">
        <TopHeaderContainer>
          <h5>Hello I'm</h5>
          <h1>Duc Le</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
        </TopHeaderContainer>

        <MeContainer className="me">
          <MeWrapper>
            <MeImg
              src={ME}
              alt=""
            />
          </MeWrapper>
          <MeBackdrop>
            <img
              className="me-backdrop"
              src={ME_BACKDROP}
              alt=""
            />
          </MeBackdrop>
        </MeContainer>

        <ScrollUpContainer>
          <a href="#">Scroll Up</a>
        </ScrollUpContainer>
        <HeaderSocials />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
