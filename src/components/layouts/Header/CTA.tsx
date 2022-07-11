import React from 'react';
import styled from 'styled-components';
import CV from '../../../assets/files/cv.pdf';

const CtaContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center; 

  a {
    width: 9rem;
  }
`;

const CTA = () => {
  return (
    <CtaContainer>
      <a
        className="btn"
        href={CV}
        download
      >
        Download CV
      </a>
      <a
        className="btn btn--primary"
        href="#contact"
      >
        Let's Talk
      </a>
    </CtaContainer>
  );
};

export default CTA;
