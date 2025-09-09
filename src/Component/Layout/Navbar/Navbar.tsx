import  { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegHeart, FaHeart } from "react-icons/fa6";


import { RootState, AppDispatch } from "../../../App/store";
import { Logout } from "../../../App/Feature/Slice/AuthSlice";
import Button from "../../Ui/Button";

import { Badge, IconLink, Logo, NavbarContainer, NavItem, NavLinks, RightSection } from './NavbarStyle'

const Navbar = () => {
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
