import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Button from "../Ui/Button";
import useProduct from "../../Hooks/UseProduct";
import Stars from "../Functions/Star";
import {
  Card,
  ProductImage,
  ProductTitle,
  ProductCategory,
  Price,
  Grid,
  Section,
  Title,
  Subtitle,
} from "./CartStyle";

import {
  addToFavourite,
  removeFromFavourite,
} from "../../App/Feature/Slice/FavouriteSlice";
import { RootState, AppDispatch } from "../../App/store";
import { Product } from "../../Interface/Interface";
import { errorToast, successToast } from "../Helper/Messages";

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const favourites = useSelector((state: RootState) => state.favourites.items);

  const { data, isLoading, isError, error } = useProduct();

  if (isLoading) return <h1>Loading ...</h1>;
  if (isError) return <h1>Something went wrong</h1>;
  if (error) return <h1>{error.message}</h1>;

  const toggleFavourite = (product: Product) => {
    const isFav = favourites.some((item) => item.id === product.id);
    if (isFav) {
      dispatch(removeFromFavourite(product.id));
      errorToast("Deleted from Favourite");
    } else {
      dispatch(addToFavourite(product));
      successToast("Added to Favourite");
    }
  };

  return (
    <Section>
      <Title>New Arrivals</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis sollicitudin aliquam sem.
      </Subtitle>

      <Grid>
        {data?.map((product) => {
          const isFav = favourites.some((item) => item.id === product.id);

          return (
            <Card key={product.id}>
              <div style={{ position: "relative" }}>
                <ProductImage src={product.image} alt={product.title} />

                <button
                  onClick={() => toggleFavourite(product)}
                  style={{
                    position: "absolute",
                    top: "0.5rem",
                    right: "0.5rem",
                    background: "rgba(0,0,0,0.2)",
                    borderRadius: "50%",
                    padding: "0.5rem",
                    border: "none",
                    cursor: "pointer",
                    zIndex: "10px",
                  }}
                >
                  {isFav ? <FaHeart color="red" /> : <FaRegHeart color="red" />}
                </button>
              </div>

              <Price>
                <Stars rating={product.rating.rate} />
              </Price>

              <ProductTitle>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {product.title}
                </Link>
              </ProductTitle>

              <ProductCategory>Category: {product.category}</ProductCategory>
              <Price>Price: {product.price} Rs</Price>
              <Button>Add To Cart</Button>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Products;
