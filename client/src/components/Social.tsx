import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const SocialLinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.4s ease-out;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  color: ${(props) => props.color};
`;

const Social: React.FC = () => (
  <SocialLinkWrapper>
    <SocialLink
      color="#000"
      id="github"
      href="https://github.com/llldar"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg className="social-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <title>github</title>
        <g className="social-group" fill="none" fillRule="evenodd">
          <circle
            className="social-group__outline"
            stroke="#000"
            strokeWidth="20"
            cx="300"
            cy="300"
            r="262.5"
          />
          <circle className="social-group__inner-circle" fill="#000" cx="300" cy="300" r="252.5" />
          <path
            className="social-group__icon"
            d="M300 150c-82.8348 0-150 68.8393-150 153.817 0 67.9687 42.991 125.558 102.5893 145.9151 7.5 1.4063 10.2455-3.3482 10.2455-7.433 0-3.683-.134-13.3259-.2009-26.183-41.7187 9.308-50.558-20.625-50.558-20.625-6.8304-17.7456-16.6741-22.5-16.6741-22.5-13.5938-9.576 1.0044-9.375 1.0044-9.375 15.067 1.0714 22.9688 15.8705 22.9688 15.8705 13.3929 23.5045 35.0893 16.741 43.6607 12.7902 1.3393-9.9107 5.2232-16.741 9.509-20.558-33.2813-3.884-68.3036-17.076-68.3036-76.0045 0-16.808 5.8259-30.5357 15.4018-41.25-1.5402-3.884-6.6965-19.5536 1.4732-40.7143 0 0 12.5893-4.1518 41.25 15.7366 11.9866-3.4152 24.7768-5.0893 37.567-5.1562 12.7231.067 25.5803 1.741 37.5669 5.1562 28.6607-19.8884 41.183-15.7366 41.183-15.7366 8.1697 21.1607 3.0134 36.8304 1.4733 40.7143 9.5758 10.7812 15.4017 24.509 15.4017 41.25 0 59.0625-35.0892 72.0536-68.5044 75.8705 5.3571 4.7545 10.1785 14.1295 10.1785 28.4598 0 20.558-.2009 37.1652-.2009 42.1875 0 4.0849 2.6786 8.9063 10.3125 7.3661C407.076 429.308 450 371.7187 450 303.817 450 218.8393 382.8348 150 300 150z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </g>
      </svg>
    </SocialLink>
    <SocialLink
      color="#139bd0"
      id="telegram"
      href="https://t.me/llldar"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg className="social-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <title>telegram</title>
        <g className="social-group" fill="none" fillRule="evenodd">
          <circle
            className="social-group__outline"
            stroke="#000"
            strokeWidth="3"
            cx="50"
            cy="50"
            r="43.75"
          />
          <circle className="social-group__inner-circle" cx="50" cy="50" fill="#139BD0" r="42" />
          <path
            className="social-group__icon"
            d="M51.474,60.754c-1.733,1.688-3.451,3.348-5.153,5.021   c-0.595,0.586-1.264,0.91-2.118,0.865c-0.583-0.031-0.909-0.287-1.088-0.84c-1.304-4.047-2.627-8.084-3.924-12.135   c-0.126-0.393-0.312-0.584-0.71-0.707c-3.072-0.938-6.138-1.898-9.199-2.871c-0.471-0.15-0.946-0.346-1.353-0.623   c-0.629-0.426-0.721-1.121-0.157-1.621c0.521-0.461,1.143-0.863,1.789-1.119c3.755-1.488,7.53-2.928,11.299-4.381   c9.565-3.693,19.13-7.383,28.696-11.076c1.819-0.703,3.217,0.287,3.028,2.254c-0.121,1.258-0.447,2.496-0.71,3.738   c-2.077,9.807-4.156,19.615-6.244,29.42c-0.496,2.328-2.131,2.936-4.047,1.523c-3.209-2.365-6.415-4.738-9.622-7.107   C51.808,60.984,51.649,60.877,51.474,60.754z M44.271,63.732c0.036-0.01,0.072-0.02,0.108-0.029   c0.02-0.092,0.049-0.182,0.057-0.273c0.206-2.223,0.424-4.445,0.603-6.672c0.04-0.496,0.21-0.848,0.583-1.182   c2.958-2.645,5.898-5.307,8.844-7.963c3.261-2.941,6.523-5.879,9.772-8.832c0.201-0.182,0.285-0.492,0.423-0.744   c-0.306-0.033-0.634-0.156-0.912-0.084c-0.379,0.098-0.738,0.318-1.076,0.531c-7.197,4.533-14.388,9.074-21.59,13.598   c-0.407,0.256-0.483,0.473-0.328,0.92c0.531,1.525,1.014,3.064,1.515,4.6C42.937,59.646,43.604,61.689,44.271,63.732z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </g>
      </svg>
    </SocialLink>
    <SocialLink
      color="#39589b"
      id="facebook"
      href="https://www.facebook.com/Nathaniel.Lin.53"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg className="social-svg" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <title>facebook</title>
        <g className="social-group" fill="none" fillRule="evenodd">
          <circle
            className="social-group__outline"
            stroke="#000"
            strokeWidth="1.6"
            cx="24"
            cy="24"
            r="21"
          />
          <circle className="social-group__inner-circle" cx="24" cy="24" fill="#4E71A8" r="20.2" />
          <path
            className="social-group__icon"
            d="M29.9,19.5h-4v-2.6c0-1,0.7-1.2,1.1-1.2c0.5,0,2.8,0,2.8,0v-4.4l-3.9,0c-4.4,0-5.3,3.3-5.3,5.3v2.9h-2.5V24  h2.5c0,5.8,0,12.7,0,12.7h5.3c0,0,0-7,0-12.7h3.6L29.9,19.5z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </g>
      </svg>
    </SocialLink>
    <SocialLink
      color="#9a2970"
      id="instagram"
      href="https://instagram.com/llldar/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg className="social-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <title>instagram</title>
        <defs>
          <linearGradient x1="0%" y1="100%" y2="0%" id="simpleInsta">
            <stop stopColor="#D72F3F" offset="0%" />
            <stop stopColor="#4221B9" offset="100%" />
          </linearGradient>
        </defs>
        <g className="social-group" fill="none" fillRule="evenodd">
          <circle
            className="social-group__outline"
            stroke="#000"
            strokeWidth="20"
            cx="300"
            cy="300"
            r="262.5"
          />
          <circle
            className="social-group__inner-circle social-group__inner-circle--instagram"
            fill="url(#simpleInsta)"
            cx="300"
            cy="300"
            r="252.5"
          />
          <path
            className="social-group__icon"
            d="M436.8577 205.4154c-3.6808-9.4808-8.5885-17.5116-16.6192-25.5423-8.0308-8.0308-16.0616-12.9385-25.5423-16.6193-9.1462-3.5692-19.7424-6.023-35.0231-6.6923-15.3923-.6692-20.3-.8923-59.5616-.8923-39.2615 0-44.1692.1116-59.5615.8923-15.3923.6693-25.877 3.1231-35.023 6.6923-9.4808 3.6808-17.5116 8.5885-25.5424 16.6193-8.0308 8.0307-12.9384 16.0615-16.6192 25.5423-3.5692 9.1461-6.023 19.7423-6.6923 35.023-.6693 15.3924-.8923 20.3-.8923 59.5616 0 39.2615.1115 44.1692.8923 59.5615.6692 15.3923 3.123 25.877 6.6923 35.0231 3.6808 9.4808 8.5884 17.5116 16.6192 25.5423 8.0308 8.0308 16.0616 12.9385 25.5423 16.6193 9.1462 3.5692 19.7423 6.023 35.0231 6.6923 15.3923.6692 20.3.8923 59.5615.8923 39.2616 0 44.1693-.1116 59.5616-.8923 15.3923-.6693 25.8769-3.1231 35.023-6.6923 9.4808-3.6808 17.5116-8.5885 25.5424-16.6193 8.0307-8.0307 12.9384-16.0615 16.6192-25.5423 3.5692-9.1461 6.023-19.7423 6.6923-35.023.6692-15.3924.8923-20.3.8923-59.5616 0-39.2615-.1115-44.1692-.8923-59.5615-.6692-15.3923-3.123-25.877-6.6923-35.0231zm-19.2962 152.9192c-.6692 14.0539-3.0115 21.75-5.0192 26.7692-2.5654 6.6924-5.8 11.6-10.8192 16.6193-5.0193 5.0192-9.8154 8.1423-16.6193 10.8192-5.1307 2.0077-12.7153 4.35-26.7692 5.0192-15.2808.6693-19.7423.8923-58.3346.8923s-43.1654-.1115-58.3346-.8923c-14.0539-.6692-21.75-3.0115-26.7692-5.0192-6.6924-2.5654-11.6-5.8-16.6193-10.8192-5.0192-5.0193-8.1423-9.8154-10.8192-16.6193-2.0077-5.1307-4.35-12.7153-5.0192-26.7692-.6693-15.2808-.8923-19.8538-.8923-58.3346s.1115-43.1654.8923-58.3346c.6692-14.0539 3.0115-21.75 5.0192-26.7692 2.5654-6.6924 5.8-11.6 10.8192-16.6193 5.0193-5.0192 9.8154-8.1423 16.6193-10.8192 5.1307-2.0077 12.7153-4.35 26.7692-5.0192 15.2808-.6693 19.8538-.8923 58.3346-.8923s43.1654.1115 58.3346.8923c14.0539.6692 21.75 3.0115 26.7692 5.0192 6.6924 2.5654 11.6 5.8 16.6193 10.8192 5.0192 5.0193 8.1423 9.8154 10.8192 16.6193 2.0077 5.1307 4.35 12.7153 5.0192 26.7692.6693 15.2808.8923 19.8538.8923 58.3346s-.223 43.1654-.8923 58.3346zM300 225.827c-40.9346 0-74.173 33.2385-74.173 74.1731s33.2384 74.173 74.173 74.173 74.173-33.2384 74.173-74.173-33.2384-74.173-74.173-74.173zm0 122.3577c-26.5462 0-48.1846-21.527-48.1846-48.1846 0-26.5462 21.527-48.1846 48.1846-48.1846 26.6577 0 48.1846 21.527 48.1846 48.1846 0 26.5462-21.6384 48.1846-48.1846 48.1846zm77.073-107.9692c-9.548 0-17.2884-7.7403-17.2884-17.2885 0-9.5481 7.7403-17.2884 17.2885-17.2884 9.5481 0 17.2884 7.7403 17.2884 17.2884 0 9.5482-7.7403 17.2885-17.2884 17.2885z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </g>
      </svg>
    </SocialLink>
  </SocialLinkWrapper>
);

export default Social;
