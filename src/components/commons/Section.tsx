import styled from 'styled-components';
import mixins from '../../styles/mixins';

export default styled.section`
  padding-top: 8rem;
  min-height: 100vh;

  h5 {
    text-align: center;
    color: var(--color-light);
  }

  h2 {
    text-align: center;
    color: var(--color-primary);
    padding-bottom: 3rem;
  }

  @media ${mixins.MD} {
    height: 100%;
    min-height: 100vh;
    padding-top: 4rem;
  }

  @media ${mixins.SM} {
    padding-top: 2rem;

    h2 {
      padding-bottom: 2rem;
    }
  }
`;
