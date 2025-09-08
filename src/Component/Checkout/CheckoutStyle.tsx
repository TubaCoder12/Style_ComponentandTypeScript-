import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  width: 100%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 3rem auto;
  overflow: hidden;
`;

export const Header = styled.div`
  background: #2563eb;
  padding: 1.5rem;
  color: white;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  color: #c7d2fe;
  margin-top: 0.25rem;
`;

export const Section = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Grid = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 1}, 1fr);
  gap: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: #374151;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  transition: 0.2s;
  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  resize: none;
  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: #374151;
`;

export const RadioInput = styled.input`
  margin-right: 0.5rem;
`;

export const Button = styled.button`
  width: 100%;
  background: #2563eb;
  color: white;
  padding: 0.9rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  margin: 1rem 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #1e40af;
  }
`;

export const ErrorBox = styled.div`
  padding: 1rem;
  background: #fef3c7;
  border-radius: 8px;
  color: #92400e;
  font-size: 0.95rem;
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  color: #374151;
  font-size: 0.9rem;
`;
