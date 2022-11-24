import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;
const Header = styled.header`
  width: 100%;
  height: 60px;
  background: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;
const CheckBox = styled.div`
  width: 16px;
  height: 16px;
  background-color: red;
  margin-left: 20px;
`;
const ColumnName = styled.span`
  font-size: 18px;
  line-height: 23px;
  margin-left: ${(props) => props.leftMargin};
`;
const H3 = styled.h3`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

const PurchaseList = styled.ul`
  width: 100%;
`;
const PurchaseItem = styled.li`
  margin-top: 16px;
  width: 100%;
  height: 130px;
  border-bottom: 1px solid #c4c4c4;
`;
const TotalPrice = styled.ul`
  width: 100%;
  height: 150px;
  background: #f2f2f2;
  border-radius: 10px;
`;
const PurchaseBtn = styled.button`
  width: 308px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  background: #6327fe;
  border-radius: 5px;
  padding: 19px 0px;
  color: #ffffff;
  border: none;
`;

const ShoppingCart = () => {
  return (
    <Container>
      <H3>상품 정보</H3>
      <Header>
        <CheckBox></CheckBox>
        <ColumnName leftMargin="264px">상품정보</ColumnName>
        <ColumnName leftMargin="302px">쿠폰 할인</ColumnName>
        <ColumnName leftMargin="162px">배송비</ColumnName>
        <ColumnName leftMargin="163px">주문금액</ColumnName>
      </Header>
      <PurchaseList>
        <PurchaseItem></PurchaseItem>
        <PurchaseItem></PurchaseItem>
        <PurchaseItem></PurchaseItem>
      </PurchaseList>
      <TotalPrice></TotalPrice>
      <PurchaseBtn>선택 상품 주문하기</PurchaseBtn>
    </Container>
  );
};

export default ShoppingCart;
