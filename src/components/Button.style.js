import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 20px 30px;
  background-color: ${(props) => (props.back === "blue" ? "blue" : " red")};
  color: white;
  border: none;
  &:hover {
    background-color: black;
    background-image: none;
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  background-color: green;
`;
