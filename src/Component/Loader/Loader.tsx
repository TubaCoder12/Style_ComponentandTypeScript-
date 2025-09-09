import styled, { keyframes } from "styled-components";

// 🔄 Animation for spinning
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// 📦 Wrapper for full screen center alignment
const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f5f5f4; /* same as bg-stone-100 */
`;

// 🔵 Spinner Circle
const Spinner = styled.div`
  width: 3rem; /* 12 (w-12) */
  height: 3rem; /* 12 (h-12) */
  border: 4px dashed ${({ theme }) => theme.colors.secondary || "orange"};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};

export default Loader;
