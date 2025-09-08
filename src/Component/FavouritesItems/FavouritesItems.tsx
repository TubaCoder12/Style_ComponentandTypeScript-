import { useSelector, useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { RootState, AppDispatch } from "../../App/store";
import {
  clearFavourites,
  removeFromFavourite,
} from "../../App/Feature/Slice/FavouriteSlice";
import { errorToast } from "../Helper/Messages";
import Button from "../Ui/Button";

// Styled Components
const Section = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: contain;
  border-radius: 0.75rem;
`;

const ProductTitle = styled.h3`
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 600;
`;

const ProductCategory = styled.p`
  font-size: 0.875rem;
  color: #6b7280; // gray-500
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const Price = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 5rem 0;
`;

const EmptyTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const EmptySubtitle = styled.p`
  color: #6b7280;
  margin-top: 0.5rem;
`;

// Component
const FavouritesItems = () => {
  const favourites = useSelector((state: RootState) => state.favourites.items);
  const dispatch = useDispatch<AppDispatch>();

  if (favourites.length === 0) {
    return (
      <EmptyState>
        <EmptyTitle>No Favourite Products Yet ❤️</EmptyTitle>
        <EmptySubtitle>Start adding some to your favourites!</EmptySubtitle>
      </EmptyState>
    );
  }

  return (
    <Section>
      <Header>
        <Title>
          <FaHeart color="#ef4444" /> My Favourites
        </Title>
        <Button
          bgColor="red"
          onClick={() => {
            dispatch(clearFavourites(errorToast("All Favourite is clear")));
          }}
        >
          Clear All Favourites
        </Button>
      </Header>

      <Grid>
        {favourites.map((product) => (
          <Card key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductCategory>Category: {product.category}</ProductCategory>
            <CardFooter>
              <Price>${product.price}</Price>
              <Button
                bgColor="red"
                onClick={() => {
                  dispatch(removeFromFavourite(product.id));
                  errorToast("Remove from Favourite");
                }}
              >
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default FavouritesItems;
