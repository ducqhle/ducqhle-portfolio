const size = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

/** Example usage **
 const Page = styled.div`
  max-width: auto;

  @media ${mixins.MD} { 
    max-width: 800px;
  }

  @media ${mixins.LG} {
    max-width: 1400px;
  }
`;
 */
export default {
  XS: `screen and (max-width: ${size.xs})`,
  SM: `screen and (max-width: ${size.sm})`,
  MD: `screen and (max-width: ${size.md})`,
  LG: `screen and (max-width: ${size.lg})`,
  XL: `screen and (max-width: ${size.xl})`,
  XXL: `screen and (max-width: ${size.xxl})`,
};
