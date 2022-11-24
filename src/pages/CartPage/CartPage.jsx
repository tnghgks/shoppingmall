import styled from "styled-components";
import CouponSelect from "../../components/CouponSelect/CouponSelect";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

const Container = styled.main`
  width: 1260px;
  margin: 160px auto;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
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
  cursor: pointer;
`;
const CartPage = () => {
  return (
    <Container>
      <Title>장바구니/결제</Title>
      <Section>
        <SubTitle>쿠폰 사용</SubTitle>
        <Hr />
        <CouponSelect />
      </Section>
      <Section>
        <SubTitle>주문 상품</SubTitle>
        <Hr />
        <DeleteBtn>선택 삭제하기</DeleteBtn>
        <ShoppingCart></ShoppingCart>
      </Section>
    </Container>
  );
};

export default CartPage;
