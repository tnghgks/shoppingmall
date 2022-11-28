import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  right: -10px;
  top: calc(100% + 20px);
  width: 220px;
  display: ${(props) => (props.toggle ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  z-index: 10;
  span {
    margin-top: 16px;
  }
`;

const GoCart = styled.button`
  width: 180px;
  height: 30px;
  margin-top: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font-size: 14px;
  line-height: 18px;
  background-color: white;
  cursor: pointer;
  color: #828282;
`;

const KeepShopping = styled.button`
  width: 180px;
  height: 30px;
  margin-top: 6px;
  margin-bottom: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font-size: 14px;
  line-height: 18px;
  background-color: white;
  cursor: pointer;
  color: #828282;
`;
const Triangle = styled.div`
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 3px;
  border: 1px solid #bdbdbd;
  clip-path: polygon(0% 0%, 100% 100%, 100% 0%);
  position: absolute;
  top: -12.5px;
  left: 50%;
  z-index: 1;
  transform: rotate(-45deg) translate(-50%, 0);
`;

const ToggleCart = ({ toggle, setToggle }) => {
  return (
    <Container toggle={toggle}>
      <Triangle />
      <span>장바구니에 추가되었습니다.</span>
      <Link to="/cartpage">
        <GoCart>장바구니 가기</GoCart>
      </Link>
      <KeepShopping onClick={() => setToggle(false)}>계속 쇼핑하기</KeepShopping>
    </Container>
  );
};
export default ToggleCart;
