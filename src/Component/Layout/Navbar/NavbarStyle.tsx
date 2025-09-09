import styled from "styled-components";
import { Link } from "react-router-dom";
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
  font-weight: bold;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
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
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconLink = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background: ${({ theme }) => theme.colors.primary || "red"};
  color: white;
  font-size: 0.65rem;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
`;
