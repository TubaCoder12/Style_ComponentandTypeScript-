import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../../App/Feature/Slice/CardSlice";

import { RootState, AppDispatch } from "../../App/store";
import { errorToast } from "../Helper/Messages";
import Button from "../Ui/Button";
import {
  CartItem,
  CartList,
  Container,
  Header,
  ItemFooter,
  ProductCategory,
  ProductImage,
  ProductInfo,
  ProductTitle,
  QuantityButton,
  QuantityControl,
  Section,
  Summary,
  SummaryRow,
  SummaryTitle,
  SummaryTotal,
  Title,
} from "./SelectedCartStyle";

const SelectedCart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  console.log(cart, "hooo");
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
