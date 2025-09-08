import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { clearCart } from "../../App/Feature/Slice/CardSlice";
import useCountries from "../../Hooks/UseCountries";
import { Country } from "../../Interface/Interface";
import {
  Container,
  Header,
  Title,
  Subtitle,
  Section,
  SectionTitle,
  Grid,
  Input,
  Label,
  Select,
  Textarea,
  RadioGroup,
  RadioLabel,
  RadioInput,
  Button,
  ErrorBox,
  Loader,
} from "./CheckoutStyle";
import { AppDispatch } from "../../App/store";

import { FormData } from "../../Interface/Interface";

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    paymentMethod: "creditCard",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
    specialInstructions: "",
  });

  const { data, isPending, isError } = useCountries();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Order Data:", formData);

    Swal.fire({
      title: "🎉 Order Confirmed!",
      text: "Your order has been placed successfully.",
      icon: "success",
      showConfirmButton: false,
      showCloseButton: true,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.close) {
        dispatch(clearCart());
        navigate("/");
      }
    });
  };

  return (
    <Container>
      <Header>
        <Title>Place Your Order</Title>
        <Subtitle>Fill out the form below to complete your purchase</Subtitle>
      </Header>

      <form onSubmit={handleSubmit}>
        {/* Personal Info */}
        <Section>
          <SectionTitle>Personal Information</SectionTitle>
          <Grid columns={2}>
            <div>
              <Label>Full Name *</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label>Email Address *</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="john@example.com"
              />
            </div>
            <div>
              <Label>Phone Number *</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </Grid>
        </Section>

        {/* Shipping */}
        <Section>
          <SectionTitle>Shipping Address</SectionTitle>
          <Grid columns={2}>
            <div style={{ gridColumn: "span 2" }}>
              <Label>Street Address *</Label>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="123 Main St"
              />
            </div>
            <div>
              <Label>City *</Label>
              <Input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                placeholder="New York"
              />
            </div>
            <div>
              <Label>ZIP Code *</Label>
              <Input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                placeholder="10001"
              />
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <Label>Country *</Label>
              {isPending ? (
                <Loader>Loading countries...</Loader>
              ) : isError ? (
                <ErrorBox>
                  Error loading countries. Please refresh the page.
                </ErrorBox>
              ) : (
                <Select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a country</option>
                  {data?.map((country: Country) => (
                    <option key={country.cca3} value={country.cca3}>
                      {country.name.common}
                    </option>
                  ))}
                </Select>
              )}
            </div>
          </Grid>
        </Section>

        {/* Payment */}
        <Section>
          <SectionTitle>Payment Information</SectionTitle>
          <Grid columns={2}>
            <div style={{ gridColumn: "span 2" }}>
              <Label>Payment Method</Label>
              <RadioGroup>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={formData.paymentMethod === "creditCard"}
                    onChange={handleInputChange}
                  />
                  Credit Card
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={formData.paymentMethod === "cashOnDelivery"}
                    onChange={handleInputChange}
                  />
                  Cash on Delivery
                </RadioLabel>
              </RadioGroup>
            </div>

            {formData.paymentMethod === "creditCard" && (
              <>
                <div style={{ gridColumn: "span 2" }}>
                  <Label>Card Number *</Label>
                  <Input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div>
                  <Label>Expiry Date *</Label>
                  <Input
                    type="text"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    required
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <Label>CVC *</Label>
                  <Input
                    type="text"
                    name="cardCVC"
                    value={formData.cardCVC}
                    onChange={handleInputChange}
                    required
                    placeholder="123"
                  />
                </div>
              </>
            )}

            {formData.paymentMethod === "cashOnDelivery" && (
              <ErrorBox>
                You will pay in cash when your order is delivered.
              </ErrorBox>
            )}
          </Grid>
        </Section>

        {/* Additional Info */}
        <Section>
          <SectionTitle>Additional Information</SectionTitle>
          <Label>Special Instructions</Label>
          <Textarea
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleInputChange}
            rows={3}
            placeholder="Any special delivery instructions..."
          />
        </Section>

        {/* Submit */}
        <Button type="submit">Place Order</Button>
      </form>
    </Container>
  );
};

export default Checkout;
