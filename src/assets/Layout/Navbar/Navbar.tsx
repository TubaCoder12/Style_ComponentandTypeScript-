import React, { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import styled from "styled-components";

import Button from "../../../Component/Ui/Button";
import { RootState, AppDispatch } from "../../../App/store";
import { Logout } from "../../../App/Feature/Slice/AuthSlice";

// Styled Components
const NavbarContainer = styled.nav`
  background: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
`;

const NavItem = styled.li`
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

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconLink = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const Badge = styled.span`
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

const Navbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.auth.user);
  const favourites = useSelector((state: RootState) => state.favourites.items);
  const cart = useSelector((state: RootState) => state.cart.items);

  const logout = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(Logout());
    navigate("/login");
  };

  return (
    <NavbarContainer>
      <Logo>FASCO</Logo>

      <NavLinks>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/services">Services</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>
      </NavLinks>

      <RightSection>
        {/* Favourites */}
        <IconLink to="/favouritesItems">
          {favourites.length > 0 ? (
            <FaHeart color="red" />
          ) : (
            <FaRegHeart color="gray" />
          )}
          {favourites.length > 0 && <Badge>{favourites.length}</Badge>}
        </IconLink>

        {/* Cart */}
        <IconLink to="/cart">
          <HiOutlineShoppingCart size={26} color="gray" />
          {cart.length > 0 && <Badge>{cart.length}</Badge>}
        </IconLink>

        {/* Auth Button */}
        {user ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Button to="/login">Sign In</Button>
        )}
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;
