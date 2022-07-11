import styled from 'styled-components';
import mixins from '../../styles/mixins';

export default styled.div`
  width: var(--container-width-lg);
  margin: 0 auto;

  /* ================== MEDIA QUERIES ================== */
  @media ${mixins.LG} {
    width: var(--container-width-md);
  }

  @media ${mixins.SM} {
    width: var(--container-width-sm);
  }
`;
