import styled from "styled-components";

export const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const CartList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartItem = styled.div`
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

export const ProductImage = styled.img`
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

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
`;

export const ProductCategory = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const ItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
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

export const Summary = styled.div`
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

export const SummaryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #374151;
`;
export const SummaryTotal = styled(SummaryRow)`
  font-size: 1.125rem;
  font-weight: bold;
`;
