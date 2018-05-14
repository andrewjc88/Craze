import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterBackground>
      <LinksWrapper>
        <a href="link">Contact</a>
        <a href="link">Download</a>
        <a href="link">Press</a>
        <a href="link">Email</a>
        <a href="link">Support</a>
        <a href="link">Privacy Policy</a>
      </LinksWrapper>
    </FooterBackground>
  );
};

const FooterBackground = styled.div`
  background-color: #e3e3e3;
  padding: 2em 0em;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  a {
    padding: .5em;
  }
`;

export default Footer;