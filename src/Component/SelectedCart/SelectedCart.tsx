import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../../App/Feature/Slice/CardSlice";


import { RootState, AppDispatch } from "../../App/store";
import { errorToast } from "../Helper/Messages";
import Button from "../Ui/Button";


const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const CartList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  padding: 1rem;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 5rem;
  object-fit: contain;
  border-radius: 0.75rem;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    width: 5rem;
    margin-right: 1.5rem;
    margin-bottom: 0;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
`;

const ProductCategory = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const ItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled.button`
  background: #e5e7eb;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  transition: background 0.2s ease;

  &:hover {
    background: #d1d5db;
  }
`;

const Summary = styled.div`
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  padding: 1.5rem;
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: fit-content;
`;

const SummaryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #374151;
`;

const SummaryTotal = styled(SummaryRow)`
  font-size: 1.125rem;
  font-weight: bold;
`;

const SelectedCart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const shipping = useSelector(
    (state: RootState) => state.cart.shippingCharges
  );
  const dispatch = useDispatch<AppDispatch>();

  if (cart.length === 0) {
    return (
      <Section>
        <div style={{ textAlign: "center", padding: "5rem 0" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            No Products in Cart ❤️
          </h2>
          <p style={{ color: "#6b7280" }}>
            Start adding some items to your cart!
          </p>
        </div>
      </Section>
    );
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const productsTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalPrice = productsTotal + shipping;

  return (
    <Section>
      <Header>
        <Title>
          <FaHeart className="text-red-500" /> My Cart
        </Title>
        <Button bgColor="red" onClick={() => dispatch(clearCart())}>
          Clear All Cart
        </Button>
      </Header>

      <Container>
        {/* Cart Items */}
        <CartList>
          {cart.map((product) => (
            <CartItem key={product.id}>
              <ProductImage src={product.image} alt={product.title} />

              <ProductInfo>
                <div>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductCategory>{product.category}</ProductCategory>
                </div>

                <ItemFooter>
                  <QuantityControl>
                    <QuantityButton
                      onClick={() => dispatch(decreaseQuantity(product.id))}
                    >
                      -
                    </QuantityButton>
                    <span>{product.quantity}</span>
                    <QuantityButton
                      onClick={() => dispatch(increaseQuantity(product.id))}
                    >
                      +
                    </QuantityButton>
                  </QuantityControl>
                  <Button
                    bgColor="red"
                    onClick={() => {
                      dispatch(removeFromCart(product.id));
                      errorToast("Removed item!");
                    }}
                  >
                    Remove
                  </Button>
                </ItemFooter>
              </ProductInfo>
            </CartItem>
          ))}
        </CartList>

        {/* Order Summary */}
        <Summary>
          <SummaryTitle>Order Summary</SummaryTitle>

          <SummaryRow>
            <span>Total Items:</span>
            <span>{totalItems}</span>
          </SummaryRow>

          <SummaryRow>
            <span>Products Total:</span>
            <span>${productsTotal.toFixed(2)}</span>
          </SummaryRow>

          <SummaryRow>
            <span>Shipping:</span>
            <span>${shipping}</span>
          </SummaryRow>

          <SummaryTotal>
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </SummaryTotal>

          <Button to="/checkout">Proceed to Checkout</Button>
        </Summary>
      </Container>
    </Section>
  );
};

export default SelectedCart;
