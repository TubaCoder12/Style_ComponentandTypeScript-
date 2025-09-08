import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../../App/Feature/Slice/AuthSlice";
import { useState, ChangeEvent, FormEvent } from "react";
import { RootState, AppDispatch } from "../../App/store";
import { Container, Card, Title, Form, Label, Input } from "./SignInStyle";
import Button from "../Ui/Button";

// Types
interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.auth.user);
  console.log("Redux User Data:", user);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(Login(formData));
    navigate("/");
  };

  return (
    <Container>
      <Card>
        <Title>Sign In</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label>Email Address</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="********"
            />
          </div>

          <Button type="submit">Sign In</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default SignIn;
