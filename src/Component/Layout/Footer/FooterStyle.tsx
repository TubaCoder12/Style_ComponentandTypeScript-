import styled from "styled-components";

export const  FooterWrapper = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.white || "#fff"};

`;

export const  Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const  Brand = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text || "#1f2937"};
`;

export const  NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.secondary || "#6b7280"};
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const  NavItem = styled.li``;

export const  NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.text || "#000"};
  }
`;

export const  Copyright = styled.div`
  text-align: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary || "#6b7280"};
  padding-bottom: 1rem;
`;