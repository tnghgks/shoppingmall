import styled from "styled-components";
import IconCheckBox from "../../AssetsComponents/IconCheckBox";
import ProductPrice from "../../Card/ProductPrice/ProductPrice";

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
const ItemName = styled.p`
  font-size: 18px;
  line-height: 22px;
`;
const ItemPrice = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
`;
const ItemOption = styled.span`
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
const PurchaseItem = ({ purchaseItem, allSelected, appendSelected }) => {
  return (
    <Container>
      <IconCheckBox allSelected={allSelected} appendSelected={appendSelected} cartId={purchaseItem.id} />
      <ProductImage src={`https://test.api.weniv.co.kr/${purchaseItem.thumbnailImg}`} />
      <ProductInfo>
        <ItemName>{purchaseItem.productName}</ItemName>
        <ItemPrice>
          {purchaseItem.discountRate ? <ProductPrice productPrice={purchaseItem.price} discountRate={purchaseItem.discountRate} /> : `${purchaseItem.price.toLocaleString()} 원`}
        </ItemPrice>
        <ItemOption>수량 : {purchaseItem.amount}</ItemOption>
      </ProductInfo>
      <CouponDiscount>
        <CouponName>{purchaseItem.couponData ? purchaseItem.couponData.name : "-"}</CouponName>
        <CouponPrice>{purchaseItem.couponData ? purchaseItem.couponData.price : "-"}</CouponPrice>
      </CouponDiscount>
      <DeliveryFee>{purchaseItem.shippingFee ? `${purchaseItem.shippingFee.toLocaleString()} 원` : "무료 배송"}</DeliveryFee>
      <PurchasePrice>{`${(purchaseItem.totalPrice + purchaseItem.shippingFee).toLocaleString()} 원`}</PurchasePrice>
    </Container>
  );
};

export default PurchaseItem;
