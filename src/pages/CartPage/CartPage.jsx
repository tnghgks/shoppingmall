import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CouponSelect from "../../components/CouponSelect/CouponSelect";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import iconHome from "../../assets/icon-home.png";

const Container = styled.main`
  position: relative;
  width: 1260px;
  margin: 160px auto;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  margin-bottom: 60px;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
`;
const HomeBtn = styled(Link)`
  position: absolute;
  right: -140px;
  width: 80px;
  height: 80px;
  background: #6327fe;
  border-radius: 80px;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const SubTitle = styled.h2`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 10px;
  color: #333333;
`;
const Section = styled.section``;

const Hr = styled.div`
  width: 100%;
  height: 2px;
  background: #e0e0e0;
`;
const DeleteBtn = styled.button`
  display: block;
  width: 130px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  background-color: white;
  color: #333333;
  text-align: center;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding: 10px 0px;
  margin-top: 16px;
  margin-left: auto;
  margin-bottom: 16px;
  cursor: pointer;
`;

const CartPage = ({ couponData }) => {
  const [selected, setSelected] = useState([]);

  const handleDeleteBtn = () => {
    console.log("딜리트");
  };
  const appendSelected = (cartId) => {
    setSelected((prev) => {
      if (selected.includes(cartId)) return [...selected.filter((item) => !(item === cartId))];
      return [...prev, cartId];
    });
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <Container>
      <Title>장바구니/결제</Title>
      <HomeBtn to="/">
        <img src={iconHome} alt="홈 버튼" />
      </HomeBtn>
      <Section>
        <SubTitle>쿠폰 사용</SubTitle>
        <Hr />
        <CouponSelect couponData={couponData} />
      </Section>
      <Section>
        <SubTitle>주문 상품</SubTitle>
        <Hr />
        <DeleteBtn onClick={handleDeleteBtn}>선택 삭제하기</DeleteBtn>
        <ShoppingCart appendSelected={appendSelected}></ShoppingCart>
      </Section>
    </Container>
  );
};

export default CartPage;
