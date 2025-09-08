import styled from "styled-components";

// Page Container
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f4; /* bg-stone-100 */
`;

// Card wrapper
export const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
`;

// Heading
export const Title = styled.h2`
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700;
  text-align: center;
  color: #1f2937; /* text-gray-800 */
  margin-bottom: 1.5rem;
`;

// Form wrapper
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem; /* space-y-5 */
`;

// Label
export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151; /* text-gray-700 */
  margin-bottom: 0.25rem;
`;

// Input
export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #f97316; /* orange-500 */
    box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.3);
  }
`;
