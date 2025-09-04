import { useParams } from "react-router-dom";

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
} from "./DetailPageStyle";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = UseSingleProduct(Number(id));

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Something went wrong</h1>;
  if (error) return <h1>{error.message}</h1>;
  if (!data) return <h1>No product found</h1>;

  return (
    <Container>
      <ImageWrapper>
        <ProductImage src={data.image} alt={data.title} />
      </ImageWrapper>

      <ContentWrapper>
        <RatingWrapper>
          <Stars rating={data.rating.rate} />
        </RatingWrapper>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
        <Price> Rs{data.price}</Price>
        <Category>Category: {data.category}</Category>
        <RatingWrapper>
          <Button>Add to card</Button>
        </RatingWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default DetailPage;
