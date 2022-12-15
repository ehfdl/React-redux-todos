import styled from "styled-components";
import { viewAll } from "../redux/module/todos";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


function Header() {
  const dispatch = useDispatch();

  const onClickViewAll = (event) => {
    dispatch(viewAll(event));
  };

  return <StyledLink to="/"><Headerbox onClick={onClickViewAll}>나의 Todolist
  </Headerbox></StyledLink>;
}

export default Header;

// styled-components

const StyledLink = styled(Link)`
  text-decoration: none;
`;

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
  color: black;
  cursor: pointer;
`;
