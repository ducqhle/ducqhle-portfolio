import React from 'react';
import styled from 'styled-components';
import { Container, Section } from './commons';

import Avatar1 from '../assets/images/avatar1.jpg';
import Avatar2 from '../assets/images/avatar2.jpg';
import Avatar3 from '../assets/images/avatar3.jpg';
import Avatar4 from '../assets/images/avatar4.jpg';
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
    name: 'Tina Snow',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit in quasi nihil officia cum numquam quia, amet rem reprehenderit! Perspiciatis illum nihil alias voluptatum facilis sit. Ducimus voluptatem amet ullam quis temporibus!',
  },
  {
    image: Avatar2,
    name: 'Tina Snow',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit in quasi nihil officia cum numquam quia, amet rem reprehenderit! Perspiciatis illum nihil alias voluptatum facilis sit. Ducimus voluptatem amet ullam quis temporibus!',
  },
  {
    image: Avatar3,
    name: 'Tina Snow',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit in quasi nihil officia cum numquam quia, amet rem reprehenderit! Perspiciatis illum nihil alias voluptatum facilis sit. Ducimus voluptatem amet ullam quis temporibus!',
  },
  {
    image: Avatar4,
    name: 'Tina Snow',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit in quasi nihil officia cum numquam quia, amet rem reprehenderit! Perspiciatis illum nihil alias voluptatum facilis sit. Ducimus voluptatem amet ullam quis temporibus!',
  },
];

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
    <Section id="testimonials">
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
                  <img src={client.image} />
                </ClientAvatar>
                <ClientName>{client.name}</ClientName>
                <ClientReview>{client.review}</ClientReview>
              </TestimonialsArticle>
            </SwiperSlide>
          ))}
        </TestimonialsSwiper>
      </TestimonialsContainer>
    </Section>
  );
};

export default Testimonials;
