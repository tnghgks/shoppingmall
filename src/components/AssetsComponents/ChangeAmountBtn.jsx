import styled from "styled-components";
import IconPlus from "../../assets/icon-plus-line.svg";
import IconMinus from "../../assets/icon-minus-line.svg";

const Container = styled.div`
  margin-right: auto;
  display: flex;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
`;
const MinusBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: 1px solid #bdbdbd;
  background-color: #fff;
  cursor: pointer;
`;
const Amount = styled.div`
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
`;
const PlusBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: 1px solid #bdbdbd;
  background-color: #fff;
  cursor: pointer;
`;

const ChangeAmountBtn = ({ amount, setAmount }) => {
  const handlePlusBtn = () => {
    setAmount((prev) => prev + 1);
  };
  const handleMinusBtn = () => {
    if (amount === 1) return;
    setAmount((prev) => prev - 1);
  };
  return (
    <Container>
      <MinusBtn onClick={handleMinusBtn}>
        <img src={IconMinus} alt="IconMinus" />
      </MinusBtn>
      <Amount>{amount}</Amount>
      <PlusBtn onClick={handlePlusBtn}>
        <img src={IconPlus} alt="MinusBtn" />
      </PlusBtn>
    </Container>
  );
};

export default ChangeAmountBtn;
