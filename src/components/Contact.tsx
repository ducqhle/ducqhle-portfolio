import React, { createRef, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { Container, Section } from './commons';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import ZaloImg from '../assets/icons/zalo.svg';
import mixins from '../styles/mixins';
import emailjs from '@emailjs/browser';
import { GrSend } from 'react-icons/gr';
import { AiFillCheckCircle } from 'react-icons/ai';

const ContactContainer = styled(Container)`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;

  @media ${mixins.LG} {
    width: 80%;
  }

  @media ${mixins.MD} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media ${mixins.SM} {
    width: var(--container-width-sm);
  }
`;

const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ContactOption = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  border: 1px solid transparent;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }

  a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;

  img {
    margin-top: 0.3rem;
  }
`;

const ContactChannel = styled.div`
  display: flex;
  gap: 1rem;
  min-width: 11rem;
`;

const ConctactChannelInfo = styled.div`
  padding-top: 3px;

  h5 {
    text-align: left;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  input,
  textarea {
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid var(--color-primary-variant);
    resize: none;
    color: var(--text-white);
  }
`;

const Contact = () => {
  const formRef = createRef<HTMLFormElement>();
  const [
    formSubmitted,
    setFormSubmiited,
  ] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm('Portfolio', 'template_kqkxp2r', formRef.current, 'JuO68KWshZKc-dFyf').then(
      response => {
        console.debug('SUCCESS!');
        setFormSubmiited(true);
      },
      err => {
        console.error('FAILED...', err);
      },
    );
  };

  return (
    <Section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <ContactContainer>
        <ContactOptions>
          <ContactOption>
            <ContactChannel>
              <ContactIcon>
                <MdOutlineEmail />
              </ContactIcon>
              <ConctactChannelInfo>
                <h4>Email </h4>
                <h5>duqhle@gmail.com</h5>
                <a href="mailto:duqhle@gmail.com">Send a email</a>
              </ConctactChannelInfo>
            </ContactChannel>
          </ContactOption>

          <ContactOption>
            <ContactChannel>
              <ContactIcon>
                <RiMessengerLine />
              </ContactIcon>
              <ConctactChannelInfo>
                <h4>Messenger </h4>
                <h5>ducqhle</h5>
                <a href="https://m.me/ducqhle">Send a message</a>
              </ConctactChannelInfo>
            </ContactChannel>
          </ContactOption>

          <ContactOption>
            <ContactChannel>
              <ContactIcon>
                <img src={ZaloImg} />
              </ContactIcon>
              <ConctactChannelInfo>
                <h4>Zalo</h4>
                <h5>ducqhle</h5>
                <a href="https://zalo.me/ducqhle">Send a message</a>
              </ConctactChannelInfo>
            </ContactChannel>
          </ContactOption>
        </ContactOptions>

        {!formSubmitted && (
          <ContactForm
            ref={formRef}
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Message"
              required
            />
            <button
              type="submit"
              className="btn btn--primary"
            >
              Send Message
            </button>
          </ContactForm>
        )}
        {formSubmitted && <p>Sent. Thank you!</p>}
      </ContactContainer>
    </Section>
  );
};

export default Contact;
