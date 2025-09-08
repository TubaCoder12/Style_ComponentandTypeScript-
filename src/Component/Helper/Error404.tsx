import { Link } from "react-router-dom";
import styled from "styled-components";

// Wrapper
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f3f4f6; /* gray-100 */
`;

// Heading 404
const ErrorCode = styled.h1`
  font-size: 6rem; /* text-8xl */
  font-weight: bold;
  color: #991b1b; /* red-800 */
`;

// Subtitle
const Message = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem; /* text-xl */
  color: #4b5563; /* gray-600 */
`;

// Extra message
const SubMessage = styled.p`
  margin-top: 1rem;
  color: #ef4444; /* red-500 */
`;

// Styled Link Button
const HomeButton = styled(Link)`
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background: #2563eb; /* blue-600 */
  color: white;
  border-radius: 0.375rem; /* rounded */
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: #1d4ed8; /* blue-700 */
  }
`;

const Error404 = () => {
  return (
    <Wrapper>
      <ErrorCode>404</ErrorCode>
      <Message>Page Not Found</Message>
      <SubMessage>This page does not exist.</SubMessage>
      <HomeButton to="/">Go to Home</HomeButton>
    </Wrapper>
  );
};

export default Error404;
