import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { Link, To } from "react-router-dom";
import styled from "styled-components";

// Normal button style
const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

// Link version
const StyledLinkButton = styled(Link)`
  all: unset; // reset default link styles
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  to?: To; // optional link
};

const Button: React.FC<ButtonProps> = ({ children, to, ...props }) => {
  if (to) {
    // Link button
    return <StyledLinkButton to={to}>{children}</StyledLinkButton>;
  }
  // Normal button
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
