import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IconShoppingCart from "../../../assets/icon-shopping-cart.png";
import IconDisabledCart from "../../../assets/icon-shopping-cart.svg";
import IconHeart from "../../../assets/icon-heart.svg";
import IconHeartOn from "../../../assets/icon-heart-on.svg";
import Selector from "../../../components/AssetsComponents/Selector";
import ChangeAmountBtn from "../../../components/AssetsComponents/ChangeAmountBtn";
import Option from "../Option/Option";
import ToggleCart from "../ToggleCart/ToggleCart";
import ProductPrice from "../../../components/Card/ProductPrice/ProductPrice";

const BuyProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const ProductName = styled.span`
  width: 440px;
  font-size: 24px;
  line-height: 30px;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  span:last-child {
    font-size: 24px;
    line-height: 30px;
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
  margin-left: auto;
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
  position: relative;
  display: flex;
  gap: 6px;
  margin-top: ${(props) => (props.soldout ? "auto" : "0")};
`;

const BuyBtn = styled.button`
  width: 308px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  background: ${(props) => (props.soldout ? "#BDBDBD" : "#6327fe")};
  border-radius: 5px;
  color: #ffffff;
  padding: 19px 0px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const AddToCartBtn = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid #bdbdbd;
  background: ${(props) => (props.soldout ? "#BDBDBD" : "#ffffff")};
  cursor: pointer;
  border-radius: 5px;
  position: relative;
`;

const LikeBtn = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid #bdbdbd;
  background: #ffffff;
  cursor: pointer;
  border-radius: 5px;
`;

const PurchaseInfo = ({ productData }) => {
  const navigate = useNavigate();
  const optionList = productData.option;
  const discountedPrice = productData.discountRate ? Math.floor((productData.price - productData.price * (productData.discountRate * 0.01)) / 1000) * 1000 : productData.price;
  const [totalAmount, setTotalAmount] = useState(0);
  const [amount, setAmount] = useState(productData.option.length ? 0 : 1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [pickOptions, setPickOptions] = useState([]);
  const [toggle, setToggle] = useState(false);

  const onChangeHandler = (event) => {
    setPickOptions((prev) => {
      const value = event.target.value;
      if (pickOptions.findIndex(({ optionName }) => optionName === value) === -1) {
        const optionData = optionList.find(({ optionName }) => optionName === value);
        return [...prev, optionData];
      }
      return prev;
    });
    setTotalAmount(() => {
      const totalAmount = pickOptions.reduce((acc, cur) => acc + cur.amount, 0);
      return totalAmount + amount;
    });
  };

  const ToggleCartBtn = () => {
    setToggle((prev) => !prev);
    JSON.parse(localStorage.getItem("cartData"));
    localStorage.setItem(
      "cartData",
      JSON.stringify([
        {
          id: productData.id,
          productName: productData.productName,
          cost: productData.price,
          price: totalPrice,
          shippingFee: productData.shippingFee,
          discountRate: productData.discountRate,
          thumbnailImg: productData.thumbnailImg,
          couponData: productData.couponData,
          amount: totalAmount,
        },
      ])
    );
  };

  useEffect(() => {
    setTotalAmount(() => {
      const totalAmount = pickOptions.reduce((acc, cur) => acc + cur.amount, 0);
      return totalAmount + amount;
    });

    setTotalPrice(() => {
      const totalPrice = pickOptions.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);

      return amount * discountedPrice + productData.shippingFee + totalPrice;
    });
  }, [totalAmount]);

  useEffect(() => {
    setTotalAmount(0);

    setTotalPrice(discountedPrice + productData.shippingFee);
  }, []);
  const handleBuyBtn = () => {
    localStorage.setItem(
      "cartData",
      JSON.stringify([
        {
          id: productData.id,
          productName: productData.productName,
          cost: productData.price,
          price: totalPrice,
          shippingFee: productData.shippingFee,
          discountRate: productData.discountRate,
          thumbnailImg: productData.thumbnailImg,
          couponData: productData.couponData,
          amount: totalAmount,
        },
      ])
    );
    navigate("/cartpage");
  };
  console.log(productData.discountRate);
  return (
    <BuyProductContainer>
      <ProductName>{productData.productName}</ProductName>
      <PriceContainer>
        <ProductPrice productPrice={productData.price} discountRate={productData.discountRate}></ProductPrice>
      </PriceContainer>
      {productData.stockCount ? (
        <>
          <DeliveryFee>{productData.shippingFee ? `배송비 ${productData.shippingFee.toLocaleString()} 원` : "택배배송 / 무료배송"}</DeliveryFee>
          <Hr />
          {!!productData.option.length ? (
            <>
              <Selector onChangeHandler={onChangeHandler} optionData={productData.option} />
              {pickOptions &&
                pickOptions.map((option, index) => (
                  <Option
                    key={index}
                    option={option}
                    price={productData.price}
                    setPickOptions={setPickOptions}
                    setTotalAmount={setTotalAmount}
                    discountRate={productData.discountRate}
                  />
                ))}
            </>
          ) : (
            <ChangeAmountBtn amount={amount} setAmount={setAmount} setTotalAmount={setTotalAmount} />
          )}
          <Hr />
          <TotalProductPrice>
            <PriceLabel>총 상품 금액</PriceLabel>
            <TotalAmount>총 수량 {totalAmount === 0 ? 1 : totalAmount}개</TotalAmount>
            <FinalPrice>{totalPrice.toLocaleString()}</FinalPrice>
          </TotalProductPrice>
          <InteractiveBtns>
            <BuyBtn onClick={handleBuyBtn}>바로 구매</BuyBtn>
            <AddToCartBtn onClick={ToggleCartBtn}>
              <img src={IconShoppingCart} alt="장바구니 버튼" />
            </AddToCartBtn>
            <ToggleCart toggle={toggle} setToggle={setToggle} />
            <LikeBtn>
              <img src={IconHeart} alt="좋아요 버튼" />
            </LikeBtn>
          </InteractiveBtns>
        </>
      ) : (
        <>
          <InteractiveBtns soldout={true}>
            <BuyBtn soldout={true} disabled>
              품절된 상품입니다.
            </BuyBtn>
            <AddToCartBtn soldout={true} disabled>
              <img src={IconDisabledCart} alt="장바구니 버튼" />
            </AddToCartBtn>
            <LikeBtn>
              <img src={IconHeart} alt="좋아요 버튼" />
            </LikeBtn>
          </InteractiveBtns>
        </>
      )}
    </BuyProductContainer>
  );
};

export default PurchaseInfo;
