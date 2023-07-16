import React from 'react';
import styled from 'styled-components';
import { Container, Section } from './commons';

import Avatar1 from '../assets/images/yp.jpeg';
import Avatar2 from '../assets/images/a2.jpeg';
import Avatar3 from '../assets/images/avatar3.png';
import Avatar4 from '../assets/images/avatar4.png';
import mixins from '../styles/mixins';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';

const CLIENTS = [
  {
    image: Avatar1,
    link: 'https://www.linkedin.com/in/yiping-niu/',
    name: 'Yiping Niu (Senior Software Engineer)',
    review:
      'Duc can always get the job done with very high quality. He is a problem solver and has the ability to find the solution to the existing issue and implement that quickly. He is also a quick learner that can learn unfamiliar knowledge quickly. His communication skill is also very good, can communicate with team member very efficiently.',
  },
  {
    image: Avatar4,
    link: 'https://www.linkedin.com/in/vaibhavi-warerkar-a7391458/',
    name: 'Vaibhavi Warerkar (Senior QA)',
    review:
      "Thanks Duc for all the hard work! It was a good decision to get you on board to help Yiping out, and as usual you've done a really good job!",
  },
  {
    image: Avatar3,
    name: 'Santhosh Kumar Yadav Gorla (Scrum Master)',
    review:
      'Learn hard, work hard and play hard. Willing to support other member. It is nice to collaborate with him in the same team.',
  },
  {
    image: Avatar3,
    name: 'Phong Pham (Senior Software Engineer)',
    review:
      'Proactive, enthusiasm, good attitude and contributing. Duc is a good colleague with a good attitude and skills, I hope he continues to promote in the future.',
  },
  {
    image: Avatar3,
    name: 'Duy Le	 (Team Lead - Senior Software Engineer)',
    link: "https://www.linkedin.com/in/duy-nguyen-a098319a/",
    review:
      'Always happy when discussing with you. Hope you bring your energy to our team mates. Thanks for being a part of us and always delivering high quality work You always have well-prepared plans for everything. ',
  },
];

const TestimonialsSection = styled(Section)`
  padding-top: 8rem;
`;

const TestimonialsContainer = styled(Container)`
  width: 40%;

  @media ${mixins.LG} {
    width: 80%;
  }

  @media ${mixins.MD} {
    width: 60%;
  }

  @media ${mixins.SM} {
    width: 90%;
  }
`;

const TestimonialsSwiper = styled(Swiper)`
  padding-bottom: 3rem;

  .swiper-pagination-bullet {
    background-color: var(--color-primary);
  }
`;

const TestimonialsArticle = styled.article`
  background: var(--color-bg-variant);
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  user-select: none;
`;

const ClientAvatar = styled.div`
  width: 4rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 0.4rem solid var(--color-primary-variant);
`;

const ClientName = styled.h5``;

const ClientReview = styled.small`
  color: var(--color-light);
  font-weight: 300;
  display: block;
  width: 80%;
  margin: 0.8rem auto 0;
`;

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <TestimonialsContainer>
        <TestimonialsSwiper
          // install Swiper modules
          modules={[
            Pagination,
          ]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {CLIENTS.map(client => (
            <SwiperSlide>
              <TestimonialsArticle>
                <ClientAvatar>
                  <a href={client.link}>
                    <img src={client.image} />
                  </a>
                </ClientAvatar>
                <ClientName>
                  <a href={client.link}>{client.name}</a>
                </ClientName>
                <ClientReview>{client.review}</ClientReview>
              </TestimonialsArticle>
            </SwiperSlide>
          ))}
        </TestimonialsSwiper>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
