import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row; /* left-right */
  align-items: flex-start;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column; /* mobile ke liye stack karo */
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 12px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text || "#333"};
  margin-bottom: 1rem;
`;

export const Price = styled.strong`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary || "#ff6600"};
  margin-bottom: 0.5rem;
`;

export const Category = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary || "#555"};
  margin-bottom: 0.5rem;
`;

export const RatingWrapper = styled.div`
  margin-top: 0.5rem;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const QuantityButton = styled.button`
  background: #e5e7eb;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  transition: background 0.2s ease;

  &:hover {
    background: #d1d5db;
  }
`;
