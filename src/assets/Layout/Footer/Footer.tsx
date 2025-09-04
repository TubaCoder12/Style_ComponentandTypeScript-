import React from "react";

import {
  FooterWrapper,
  Container,
  NavItem,
  NavLink,
  NavList,
  Brand,
  Copyright,
} from "./FooterStyle";
const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <Brand>FASCO</Brand>
        <NavList>
          <NavItem>
            <NavLink href="#">Support Center</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Invoicing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contract</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Careers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">FAQs</NavLink>
          </NavItem>
        </NavList>
      </Container>
      <Copyright>© 2022 zepo. All Rights Reserved.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
