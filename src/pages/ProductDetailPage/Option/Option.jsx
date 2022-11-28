import ChangeAmountBtn from "../../../components/AssetsComponents/ChangeAmountBtn";
import deleteIcon from "../../../assets/icon-delete.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  padding: 14px;
  background: #f3f0fb;
  border-radius: 5px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Title = styled.span`
  font-size: 16px;
  line-height: 20px;
`;
const Division = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Price = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: end;
  &::after {
    content: "원";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;
const DeleteBtn = styled.img`
  cursor: pointer;
`;
const Option = ({ option, price, setPickOptions, setTotalAmount, discountRate }) => {
  const { additionalFee, optionName } = option;
  const [amount, setAmount] = useState(1);
  const [optionPrice, setOptionPrice] = useState(0);
  const discountedPrice = Math.floor((price - price * (discountRate * 0.01)) / 1000) * 1000;

  const handleDeleteBtn = () => {
    setPickOptions((prev) => {
      return [...prev.filter((item) => !(item.optionName === optionName))];
    });
  };

  useEffect(() => {
    option.amount = amount;
    option.price = amount * (discountedPrice + additionalFee);
    setOptionPrice(amount * (discountedPrice + additionalFee));
  }, [amount]);

  useEffect(() => {
    setOptionPrice(discountedPrice + additionalFee);
  }, []);

  return (
    <Container>
      <Division>
        <Title>{optionName}</Title>
        <DeleteBtn src={deleteIcon} onClick={handleDeleteBtn} />
      </Division>
      <Division>
        <ChangeAmountBtn amount={amount} setAmount={setAmount} setTotalAmount={setTotalAmount} />
        <Price>{optionPrice.toLocaleString()}</Price>
      </Division>
    </Container>
  );
};

export default Option;
