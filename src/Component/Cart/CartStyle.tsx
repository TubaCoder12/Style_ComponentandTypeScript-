import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 256px;
  border-radius: 8px;
  margin-bottom: 1rem;
  margin-top: 12px;
`;

export const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const ProductCategory = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
