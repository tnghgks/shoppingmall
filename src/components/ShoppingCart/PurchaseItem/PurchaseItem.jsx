import styled from "styled-components";
import IconCheckBox from "../../AssetsComponents/IconCheckBox";

const Container = styled.li`
  margin-top: 16px;
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
`;

const ProductImage = styled.img`
  display: block;
  width: 104px;
  height: 104px;
  margin-left: 16px;
  border: 0.5px solid #bdbdbd;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  width: 398px;
  display: flex;
  flex-direction: column;
  margin-left: 36px;
`;
const ProductName = styled.p`
  font-size: 18px;
  line-height: 22px;
`;
const ProductPrice = styled.span`
  margin-top: 8px;
`;
const ProductOption = styled.span`
  margin-top: 13px;
`;
const CouponDiscount = styled.div`
  width: 200px;
  text-align: center;
  margin-left: 15px;
`;
const CouponName = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  color: #828282;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const CouponPrice = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #eb5757;
  margin-top: 6px;
`;

const DeliveryFee = styled.div`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  margin-left: 92px;
  color: #828282;
`;
const PurchasePrice = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  margin-left: 155px;
  color: #333333;
`;
const PurchaseItem = () => {
  return (
    <Container>
      <IconCheckBox />
      <ProductImage></ProductImage>
      <ProductInfo>
        <ProductName>Hack Your Life 개발자 노트북 파우치</ProductName>
        <ProductPrice>29,000원</ProductPrice>
        <ProductOption>옵션 : 13인치(수량 : 1개) / 15인치(수량 : 1개)</ProductOption>
      </ProductInfo>
      <CouponDiscount>
        <CouponName>Hack Your Life 개발자 노트북입니다</CouponName>
        <CouponPrice>-2,000원</CouponPrice>
      </CouponDiscount>
      <DeliveryFee>무료배송</DeliveryFee>
      <PurchasePrice>27,000원</PurchasePrice>
    </Container>
  );
};

export default PurchaseItem;
