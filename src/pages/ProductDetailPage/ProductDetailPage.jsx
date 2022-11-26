import styled from "styled-components";
import IconPlus from "../../assets/icon-plus-line.svg";
import IconMinus from "../../assets/icon-minus-line.svg";
import IconShoppingCart from "../../assets/icon-shopping-cart.png";
import IconHeart from "../../assets/icon-heart.svg";
import IconHeartOn from "../../assets/icon-heart-on.svg";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;
const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
`;
const ProductImage = styled.img`
  width: 400px;
  height: 400px;
`;
const BuyProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const ProductName = styled.span`
  width: 440px;
  height: 30px;
  font-size: 24px;
  line-height: 30px;
`;
const ProductPrice = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-top: 10px;
  &::after {
    content: "원";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-left: 2px;
  }
`;
const DeliveryFee = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #828282;
  margin-top: 99px;
`;
const Hr = styled.div`
  width: 100%;
  height: 2px;
  background: #e0e0e0;
  margin: 10px 0px;
`;
const ProductOption = styled.div`
  margin-right: auto;
  display: flex;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  overflow: hidden;
`;
const MinusBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: 1px solid #bdbdbd;
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
`;
const TotalProductPrice = styled.div`
  margin-top: 6px;
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
`;
const PriceLabel = styled.span`
  font-size: 18px;
  line-height: 23px;
  margin-top: 14px;
`;
const TotalAmount = styled.span`
  margin-left: 98px;
  margin-top: 14px;
  font-size: 18px;
  line-height: 23px;
  color: #828282;
  &::after {
    content: "|";
    margin-left: 12px;
    color: #c4c4c4;
  }
`;
const FinalPrice = styled.span`
  margin-left: 12px;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #eb5757;
  &::after {
    content: "원";
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    margin-left: 2px;
  }
`;

const InteractiveBtns = styled.div`
  display: flex;
  gap: 6px;
`;
const BuyBtn = styled.button`
  width: 308px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  background: #6327fe;
  border-radius: 5px;
  color: #ffffff;
  padding: 19px 0px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const AddToCartBtn = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid #bdbdbd;
  background: #ffffff;
  border-radius: 5px;
`;
const LikeBtn = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid #bdbdbd;
  background: #ffffff;
  border-radius: 5px;
`;
const ProductDetailInfo = styled.div``;
const ProductInfoTitle = styled.span`
  margin-top: 40px;
  font-size: 16px;
  line-height: 20px;
`;

const ProductDetailImage = styled.span`
  margin-top: 40px;
  font-size: 16px;
  line-height: 20px;
`;
const ProductDetailPage = () => {
  return (
    <Container>
      <ProductInfo>
        <ProductImage src="https://cdn.discordapp.com/attachments/890860726019838014/1024236531700989972/unknown.png" alr="" />
        <BuyProductContainer>
          <ProductName>네 개발잡니다 개발자키링</ProductName>
          <ProductPrice>13,500</ProductPrice>
          <DeliveryFee>택배배송 / 무료배송</DeliveryFee>
          <Hr />
          <ProductOption>
            <MinusBtn>
              <img src={IconMinus} alt="IconMinus" />
            </MinusBtn>
            <Amount>1</Amount>
            <PlusBtn>
              <img src={IconPlus} alt="MinusBtn" />
            </PlusBtn>
          </ProductOption>
          <Hr />
          <TotalProductPrice>
            <PriceLabel>총 상품 금액</PriceLabel>
            <TotalAmount>총 수량 1개</TotalAmount>
            <FinalPrice>13,500</FinalPrice>
          </TotalProductPrice>
          <InteractiveBtns>
            <BuyBtn>바로 구매</BuyBtn>
            <AddToCartBtn>
              <img src={IconShoppingCart} alt="" />
            </AddToCartBtn>
            <LikeBtn>
              <img src={IconHeart} alt="" />
            </LikeBtn>
          </InteractiveBtns>
        </BuyProductContainer>
      </ProductInfo>
      <ProductDetailInfo>
        <ProductInfoTitle>상품 정보</ProductInfoTitle>
        <ProductInfo></ProductInfo>
        <ProductDetailImage></ProductDetailImage>
      </ProductDetailInfo>
    </Container>
  );
};

export default ProductDetailPage;
