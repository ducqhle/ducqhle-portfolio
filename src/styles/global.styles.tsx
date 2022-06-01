import { createGlobalStyle } from 'styled-components';
import bgTexture from '../assets/images/bg-texture.png';
import responsive from './responsive';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

:root {
  --color-bg: #1f1f38;
  --color-bg-variant: #2c2c6c;
  --color-primary: #4db5ff;
  --color-primary-variant: rgba(77, 181, 255, 0.4);
  --color-white: white;
  --color-light: rgba(255,255,255, 0.6);

  --transition: all 400ms ease;

  --container-width-lg: 75%;
  --container-width-md: 86%;
  --container-width-sm: 90%;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  display: none;
}

body {
  font-family: 'Poppins', sans-serif;
  color: var(--color-white);
  background-color: var(--color-bg);
  line-height: 1.7;
  background-image: url(${bgTexture});
}

.container {
  width: var(--container-width-lg);
  margin: 0 auto;
}

h1,h2,h3,h4,h5 {
  font-weight: 500;
}

h1 {
  font-size: 2.5rem;
}

section {
  margin-top: 8rem;
}

section > h5 {
  text-align: center;
  color: var(--color-light);
}

section > h2 {
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 3rem;
}

.text-light {
  color: var(--color-light);
}

a {
  color: var(--color-primary);
  transition: var(--transition);

  &:hover {
    color: var(--color-white);
  }
}

.btn {
  width: max-content;
  display: inline-block;
  color: var(--color-primary);
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid var(--color-primary);
  transition: var(--transition);

  &:hover {
    background-color: var(--color-white);
    color: var(--color-bg);
    border-color: transparent;
  }

  &--primary {
    background-color: var(--color-primary);
    color: var(--color-bg);
  }
}

img {
  display: block;
  width: 100%;
  object-fit: cover;
}

/* ================== MEDIA QUERIES ================== */
@media ${responsive.LG} {
  .container {
    width: var(--container-width-md);
  }

  .section {
    margin-top: 6rem;
  }
}

@media ${responsive.SM} {
  .container {
    width: var(--container-width-sm);
  }

  .section > h2 {
    margin-bottom: 2rem;
  }
}
`;

export default GlobalStyles;
