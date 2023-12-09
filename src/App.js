import StyledButton, { FancyButton, SubmitButton } from "./components/Button";

function App() {
  return (
    <div className="App">
      <StyledButton>Hello</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton back="blue">HI</StyledButton>
      <FancyButton>fancy button</FancyButton>
      <SubmitButton type="submit">submit</SubmitButton>
    </div>
  );
}

export default App;
