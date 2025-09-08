import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { Link, To } from "react-router-dom";
import styled from "styled-components";

// Normal button style
const StyledButton = styled.button<{ bgColor?: string }>`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: ${({ bgColor, theme }) => bgColor || theme.colors.secondary};
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
const StyledLinkButton = styled(Link)<{ bgColor?: string }>`
  all: unset; // reset default link styles
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  background: ${({ bgColor, theme }) => bgColor || theme.colors.secondary};
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
  bgColor?: string; // custom background color
};

const Button: React.FC<ButtonProps> = ({ children, to, bgColor, ...props }) => {
  if (to) {
    // Link button
    return (
      <StyledLinkButton to={to} bgColor={bgColor}>
        {children}
      </StyledLinkButton>
    );
  }
  // Normal button
  return (
    <StyledButton {...props} bgColor={bgColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
