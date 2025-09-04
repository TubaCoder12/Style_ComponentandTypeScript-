import styled from "styled-components";
export const NavbarContainer = styled.nav`
  background: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  flex: 1; /* Logo left */
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  justify-content: center;
  flex: 2; /* Links center me */
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const RightSection = styled.div`
  flex: 1; /* Button right */
  display: flex;
  justify-content: flex-end;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items:center
  cursor: pointer;
`;

// import {
//   NavItem,
//   NavLinks,
//   NavbarContainer,
//   Logo,
//   RightSection,
//   IconWrapper,
// } from "./NavbarStyle";