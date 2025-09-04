import styled from "styled-components"

 export const  HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const  HeroLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  padding: 1rem;
`;

export const  HeroRight = styled(HeroLeft)``;

export const  HeroCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 2px;
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary};
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray};
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.secondary};
    color: transparent;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const  HeroBottom = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  margin-top: 1rem;
  padding: 1rem;
`;