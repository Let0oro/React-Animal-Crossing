import React from "react";
import "./Footer.css";
import styled from "styled-components";
import gsty from "../../styles/gStyles.js";

// Cuando esté el main activado, el texto no aparece

const Footer = () => {
  return (
    <FooterDecored>
      <ul>
        <li>Copyright: <a href="https://github.com/Let0oro/">Letr0oro</a></li>
        <li>Based on Animal Crossing NH</li>
      </ul>
    </FooterDecored>
  );
};

const FooterDecored = styled.footer`
  height: ${gsty.sizes.footerHeight};
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: .8rem;

  background-color: #ecae1e;
  background: linear-gradient(
    180deg,
    ${gsty.colours.background} 20%,
    ${gsty.colours.normal} 100%
  );

  display: flex;
  align-items: center;

  margin-top: ${gsty.sizes.footerMarginTop};

  & ul {
    width: 100%;
    display: flex;
    justify-content: space-around;

    & li {
      list-style-type: none;
    }

    & a {
      text-decoration: none;
      
    }
  }
`;

export default Footer;
