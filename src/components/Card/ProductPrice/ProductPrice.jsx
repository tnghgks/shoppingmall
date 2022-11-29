import styled from "styled-components";

const Price = styled.strong`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  &::after {
    content: "원";
    margin-left: 2px;
    font-weight: 400;
    font-size: 16px;
  }
`;
const Cost = styled.span`
  font-size: 16px;
  line-height: 20px;
  text-decoration: line-through;
  color: #828282;
  &::after {
    content: "원";
  }
`;
const DiscountRate = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #6327fe;
`;

const ProductPrice = ({ productPrice, discountRate = 0 }) => {
  const cost = productPrice.toLocaleString();

  return (
    <>
      <Price>{productPrice.toLocaleString()}</Price>
      {!!discountRate && (
        <>
          <Cost>{cost}</Cost>
          <DiscountRate>{discountRate}%</DiscountRate>
        </>
      )}
    </>
  );
};

export default ProductPrice;
