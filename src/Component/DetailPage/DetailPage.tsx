import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import UseSingleProduct from "../../Hooks/UseSingleProduct";
import Stars from "../Functions/Star";
import Button from "../Ui/Button";
import {
  Category,
  Container,
  ContentWrapper,
  RatingWrapper,
  Description,
  ImageWrapper,
  ProductImage,
  Title,
  Price,
  QuantityControl,
  QuantityButton,
} from "./DetailPageStyle";
import { AppDispatch, RootState } from "../../App/store";
import { successToast } from "../Helper/Messages";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../App/Feature/Slice/CardSlice";
import Loader from "../Loader/Loader";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = UseSingleProduct(Number(id));
  const dispatch = useDispatch<AppDispatch>();

  // Redux cart state
  const cart = useSelector((state: RootState) => state.cart.items);
  const cartItem = cart.find((item) => item.id === Number(id));

  if (isLoading) return <Loader />;
  if (isError) return <h1>Something went wrong</h1>;
  if (error) return <h1>{error.message}</h1>;
  if (!data) return <h1>No product found</h1>;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...data }));
    successToast("Added to cart!");
  };

  return (
    <Container>
      <ImageWrapper>
        <ProductImage src={data.image} alt={data.title} />
      </ImageWrapper>

      <ContentWrapper>
        {/* Rating Stars */}
        <Category>Category: {data.category}</Category>
        <RatingWrapper>
          <Stars rating={data.rating.rate} />
        </RatingWrapper>

        {/* Title, Description, Price, Category */}
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
        <Price>Rs {data.price}</Price>

        <RatingWrapper style={{ gap: "1rem" }}>
          {cartItem ? (
            // Agar item already cart me hai to Quantity controls dikhao
            <QuantityControl>
              <QuantityButton
                onClick={() => dispatch(decreaseQuantity(data.id))}
              >
                -
              </QuantityButton>
              <span>{cartItem.quantity}</span>
              <QuantityButton
                onClick={() => dispatch(increaseQuantity(data.id))}
              >
                +
              </QuantityButton>
            </QuantityControl>
          ) : (
            // Agar item cart me nahi hai to Add to Cart button dikhao
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          )}
        </RatingWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default DetailPage;

// List virtualization
// lazy loading images and Code Splitting
// Memoization (React.memo, useMemo, useCallback)
//  React.memo for component
// useMemo for expensive calculation
// useCallback for functions

// throttling and debouncing
// Debounce → last event ke baad hi function run hota hai.

// Throttle → function fixed interval pe hi run hota hai.
// Minimize State & Avoid Unnecessary Re-renders
//  Efficient State Management & Caching
