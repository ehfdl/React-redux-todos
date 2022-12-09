import styled from "styled-components";

const Headerbox = styled.header`
  position: relative;
  max-width: 1200px;
  width: 100%;
  height: 150px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  border-bottom: 1px solid black;
`;

function Header() {
  return <Headerbox>나의 Todolist</Headerbox>;
}

export default Header;
