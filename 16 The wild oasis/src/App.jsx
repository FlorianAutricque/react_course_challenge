import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and out</Heading>

        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>

        <Heading as="h3">From</Heading>
        <Input type="number" placeholder="Number of guest" />
      </StyledApp>
    </>
  );
}

export default App;

// npm i --save-dev vite-plugin-eslint eslint-config-react-app eslint
// eslintrc.json
// add in vite.config eslint

// install styled components = npm i styled-components
