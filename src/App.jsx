import styled from "styled-components";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

export default function App() {
  return (
    <Root>
      <Header />
      <ToDoList />
    </Root>
  );
}

const Root = styled.div`
  width: 22rem;
  height: 100vh;
  background-color: white;
  margin: 0 auto;
  padding: 0 1rem;
`;
