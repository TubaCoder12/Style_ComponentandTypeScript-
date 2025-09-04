import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 80px;
  background: #fff;
  position: relative;
`;

export const LeftImage = styled.img`
  height: 500px;
  object-fit: contain;
`;

export const RightImage = styled.img`
  height: 500px;
  object-fit: contain;
`;

export const Content = styled.div`
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 20px 0 30px;
  line-height: 1.5;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
`;

export const Input = styled.input`
  padding: 14px 16px;
  border: none;
  border-radius: 8px 0 0 8px;
  outline: none;
  width: 300px;
  font-size: 1rem;
  background: #f9fafb;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;
