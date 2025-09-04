import Button from "../Ui/Button";

import img1 from "../../assets/Images/Subscribe1.svg";
import img2 from "../../assets/Images/Subscribe2.svg";
import {
  Container,
  Content,
  Description,
  Title,
  Form,
  LeftImage,
  Input,
  RightImage,
} from "./SubscribeStyle";

const Subscribe = () => {
  return (
    <Container>
      <LeftImage src={img1} alt="man" />
      <Content>
        <Title>Subscribe To Our Newsletter</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultricies sollicitudin aliquam sem. Scelerisque duis ultricies
          sollicitudin.
        </Description>
        <Form>
          <Input type="email" placeholder="michael@ymail.com" />
          <Button>Subscribe Now</Button>
        </Form>
      </Content>
      <RightImage src={img2} alt="woman" />
    </Container>
  );
};

export default Subscribe;
