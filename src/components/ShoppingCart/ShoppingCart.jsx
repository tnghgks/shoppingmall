import styled from "styled-components";
import PurchaseItem from "./PurchaseItem/PurchaseItem";
import checkBoxOn from "../../assets/icon-check-box-ON.png";
import checkBoxOff from "../../assets/icon-check-box-OFF.png";
import minusBtn from "../../assets/minus-icon_2.png";
import plusBtn from "../../assets/plus-icon_2.png";
import { useEffect, useState } from "react";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  background: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const ColumnName = styled.span`
  font-style: normal;
  font-weight: 400;
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
const PriceInfo = styled.ul`
  width: 100%;
  height: 150px;
  background: #f2f2f2;
  border-radius: 10px;
  margin-top: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: ${(props) => props.leftMargin};
  span:first-child {
    font-size: 16px;
    line-height: 20px;
  }
  span:nth-child(2) {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
  }
  span:nth-child(2)::after {
    content: "원";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-left: 2px;
  }
`;
const WillPayment = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 205px;
  span:first-child {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
  span:nth-child(2) {
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    margin-top: 12px;
    color: #eb5757;
  }
  span:nth-child(2)::after {
    content: "원";
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    margin-left: 2px;
    color: #eb5757;
  }
`;
const MinusIcon = styled.li`
  margin-left: 86px;
`;
const PlusIcon = styled.li`
  margin-left: 110px;
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
  margin-top: 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const AllCheckBox = styled.button`
  width: 16px;
  height: 16px;
  margin-left: 20px;
  border-radius: 2px;
  border: none;
  background-image: url(${(props) => (props.toggle ? checkBoxOn : checkBoxOff)});
`;
const EmptyCart = styled.div`
  width: 100%;
  height: 50px;
  line-height: 100px;
  text-align: center;
`;

const ShoppingCart = ({ appendSelected }) => {
  const cartData = JSON.parse(localStorage.getItem("cartData"));
  const [allSelected, setAllSelected] = useState(false);
  const totalPrice = cartData.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const totalCouponPrice = cartData.reduce((acc, cur) => acc + cur.shippingFee, 0);
  const deliveryFee = cartData.reduce((acc, cur) => acc + cur.shippingFee, 0);
  const ExpectedPrice = totalPrice - totalCouponPrice + deliveryFee;

  const handleAllSelected = () => {
    setAllSelected((prev) => !prev);
  };

  return (
    <Container>
      <H3>상품 정보</H3>
      <Header>
        <AllCheckBox toggle={allSelected} onClick={handleAllSelected} />
        <ColumnName leftMargin="264px">상품정보</ColumnName>
        <ColumnName leftMargin="302px">쿠폰 할인</ColumnName>
        <ColumnName leftMargin="162px">배송비</ColumnName>
        <ColumnName leftMargin="163px">주문금액</ColumnName>
      </Header>
      <PurchaseList>
        {cartData.length ? (
          cartData.map((purchaseItem) => <PurchaseItem key={purchaseItem.id} purchaseItem={purchaseItem} allSelected={allSelected} appendSelected={appendSelected} />)
        ) : (
          <EmptyCart>장바구니에 아무것도 없습니다.</EmptyCart>
        )}
      </PurchaseList>
      <PriceInfo>
        <InfoItem leftMargin="112px">
          <span>총 상품금액</span>
          <span>{totalPrice.toLocaleString()}</span>
        </InfoItem>
        <MinusIcon>
          <img src={minusBtn} alt="" />
        </MinusIcon>
        <InfoItem leftMargin="96px">
          <span>쿠폰 할인</span>
          <span>{totalCouponPrice.toLocaleString()}</span>
        </InfoItem>
        <PlusIcon>
          <img src={plusBtn} alt="" />
        </PlusIcon>
        <InfoItem leftMargin="122px">
          <span>배송비</span>
          <span>{deliveryFee.toLocaleString()}</span>
        </InfoItem>
        <WillPayment>
          <span>결제 예정 금액</span>
          <span>{ExpectedPrice.toLocaleString()}</span>
        </WillPayment>
      </PriceInfo>
      <PurchaseBtn>선택 상품 주문하기</PurchaseBtn>
    </Container>
  );
};

export default ShoppingCart;
