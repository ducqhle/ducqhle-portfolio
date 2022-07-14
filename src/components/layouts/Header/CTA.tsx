import React from 'react';
import styled from 'styled-components';
import CV from '../../../assets/files/CV.pdf';

const CtaContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;

  a {
    width: 10rem;
    cursor: pointer;
  }
`;

const DownloadButton = styled.a`
  backdrop-filter: blur(15px);
`;

const CTA = () => {
  return (
    <CtaContainer>
      <DownloadButton
        className="btn"
        href={CV}
        download
      >
        Download CV
      </DownloadButton>
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
