import styled from "styled-components";
import Header from "./components/Header";

export default function App() {
  return (
    <Root>
      <Header />
    </Root>
  );
}

const Root = styled.div`
  width: 25rem;
  height: 100vh;
  background-color: white;
  margin: 0 auto;
  padding: 0 1rem;
`;
