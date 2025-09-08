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

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = UseSingleProduct(Number(id));
  const dispatch = useDispatch<AppDispatch>();

  // Redux cart state
  const cart = useSelector((state: RootState) => state.cart.items);
  const cartItem = cart.find((item) => item.id === Number(id));

  if (isLoading) return <h1>Loading...</h1>;
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
        <RatingWrapper>
          <Stars rating={data.rating.rate} />
        </RatingWrapper>

        {/* Title, Description, Price, Category */}
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
        <Price>Rs {data.price}</Price>
        <Category>Category: {data.category}</Category>

        <RatingWrapper style={{ gap: "1rem" }}>
          {cartItem ? (
            // Agar item already cart me hai to Quantity controls dikhao
            <QuantityControl>
              <QuantityButton
                onClick={() => dispatch(decreaseQuantity(cartItem.id))}
              >
                -
              </QuantityButton>
              <span>{cartItem.quantity}</span>
              <QuantityButton
                onClick={() => dispatch(increaseQuantity(cartItem.id))}
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
