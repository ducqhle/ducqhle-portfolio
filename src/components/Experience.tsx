import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { DiCss3 } from 'react-icons/di';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { SiJavascript, SiMongodb, SiPhp, SiDotnet, SiExpress, SiTypescript, SiMaterialui } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import mixins from '../styles/mixins';

import styled from 'styled-components';
import { Container, Section, TextLightSmall } from './commons';

const ExperienceContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  > div {
    background: var(--color-bg-variant);
    padding: 3.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;

    &:hover {
      background: transparent;
      border-color: var(--color-primary-variant);
      cursor: default;
    }

    h3 {
      text-align: center;
      margin-bottom: 2rem;
      color: var(--color-primary);
    }

    @media ${mixins.LG} {
      padding: 2rem;
    }

    @media ${mixins.MD} {
      padding: 2.4rem 5rem;
    }

    @media ${mixins.SM} {
      padding: 1rem;
    }
  }

  @media ${mixins.MD} {
    grid-template-columns: 1fr;
  }
`;

const ExperienceFrontEnd = styled.div``;

const ExperienceBackEnd = styled.div``;

const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
`;

const ExperienceContentDetails = styled.article`
  display: flex;
  gap: 1rem;
  margin-right: 1rem;
`;

const DetailsIcon = styled.div`
  margin-top: 3px;
  color: var(--color-primary);
`;

const LIST_SKILL = {
  frontEnd: [
    {
      name: 'HTML',
      icon: <AiFillHtml5 />,
      level: 'Experienced',
    },
    {
      name: 'CSS',
      icon: <DiCss3 />,
      level: 'Intermediate',
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript />,
      level: 'Intermediate',
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
      level: 'Experienced',
    },
    {
      name: 'Bootstrap',
      icon: <BsFillBootstrapFill />,
      level: 'Experienced',
    },
    {
      name: 'Material UI',
      icon: <SiMaterialui />,
      level: 'Experienced',
    },
    {
      name: 'NextJS',
      icon: <TbBrandNextjs />,
      level: 'Experienced',
    },
    {
      name: 'React',
      icon: <FaReact />,
      level: 'Experienced',
    },
  ],
  backEnd: [
    {
      name: 'NodeJS',
      icon: <FaNodeJs />,
      level: 'Experienced',
    },
    {
      name: 'Express',
      icon: <SiExpress />,
      level: 'Experienced',
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb />,
      level: 'Intermediate',
    },
    { name: 'AWS', icon: <FaAws />, level: 'Intermediate' },
    {
      name: 'MySQL',
      icon: <GrMysql />,
      level: 'Experienced',
    },
    {
      name: '.NET Core',
      icon: <SiDotnet />,
      level: 'Intermediate',
    },
  ],
};

const Experience = () => {
  return (
    <Section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <ExperienceContainer>
        <ExperienceFrontEnd>
          <h3>Frontend Development</h3>
          <ExperienceContent>
            {LIST_SKILL.frontEnd.map(s => (
              <ExperienceContentDetails>
                <DetailsIcon>{s.icon}</DetailsIcon>
                <div>
                  <h4>{s.name}</h4>
                  <TextLightSmall>{s.level}</TextLightSmall>
                </div>
              </ExperienceContentDetails>
            ))}
          </ExperienceContent>
        </ExperienceFrontEnd>

        <ExperienceBackEnd>
          <h3>Backend Development</h3>
          <ExperienceContent>
            {LIST_SKILL.backEnd.map(s => (
              <ExperienceContentDetails>
                <DetailsIcon>{s.icon}</DetailsIcon>
                <div>
                  <h4>{s.name}</h4>
                  <TextLightSmall>{s.level}</TextLightSmall>
                </div>
              </ExperienceContentDetails>
            ))}
          </ExperienceContent>
        </ExperienceBackEnd>
      </ExperienceContainer>
    </Section>
  );
};

export default Experience;
