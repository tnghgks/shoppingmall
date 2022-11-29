import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ChangeAmountBtn from "../../../components/AssetsComponents/ChangeAmountBtn";
import deleteIcon from "../../../assets/icon-delete.svg";
import { PurchaseContext } from "../PurchaseInfo/PurchaseInfo";

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
const Option = ({ option, productData }) => {
  const { setSelectInfo } = useContext(PurchaseContext);
  const price = productData.price;
  const discountRate = productData.discountRate;
  const { additionalFee, optionName } = option;
  const finalPrice = discountRate ? Math.floor((price - price * (discountRate * 0.01)) / 1000) * 1000 + additionalFee : price + additionalFee;
  const [amount, setAmount] = useState(1);
  const [optionPrice, setOptionPrice] = useState(0);

  const handleDeleteBtn = () => {
    setSelectInfo((prev) => {
      const optionItem = prev.findIndex((item) => item.id === productData.id && item.optionName === option.optionName);
      if (optionItem || optionItem === 0) {
        prev.splice(optionItem, 1);
      }
      return [...prev];
    });
  };

  useEffect(() => {
    option.amount = amount;
    option.price = amount * finalPrice;
    setOptionPrice(amount * finalPrice);
    setSelectInfo((prev) => {
      const optionItem = prev.find((item) => item.id === productData.id && item.optionName === option.optionName);
      if (optionItem) {
        optionItem.amount = amount;
        optionItem.totalPrice = finalPrice * amount;
      }
      return [...prev];
    });
  }, [amount]);

  useEffect(() => {
    setOptionPrice(finalPrice);
  }, []);

  return (
    <Container>
      <Division>
        <Title>{optionName}</Title>
        <DeleteBtn src={deleteIcon} onClick={handleDeleteBtn} />
      </Division>
      <Division>
        <ChangeAmountBtn amount={amount} setAmount={setAmount} />
        <Price>{optionPrice.toLocaleString()}</Price>
      </Division>
    </Container>
  );
};

export default Option;
