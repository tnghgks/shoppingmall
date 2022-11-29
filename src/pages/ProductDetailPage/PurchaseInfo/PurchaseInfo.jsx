import { createContext, useEffect, useState, useMemo } from "react";
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
export const PurchaseContext = createContext({
  selectInfo: [],
  setSelectInfo: () => {},
});

const PurchaseInfo = ({ productData }) => {
  const navigate = useNavigate();
  const [selectInfo, setSelectInfo] = useState([]);
  const [amount, setAmount] = useState(1);
  const [toggle, setToggle] = useState(false);
  const value = useMemo(() => ({ selectInfo, setSelectInfo }), [selectInfo]);
  const totalAmount = selectInfo.reduce((acc, cur) => acc + cur.amount, 0);
  const totalPrice = selectInfo.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const pickOptions = selectInfo.filter((item) => !(item.id === productData.id && item.optionName === "original"));
  const discountedPrice = productData.discountRate ? Math.floor((productData.price - productData.price * (productData.discountRate * 0.01)) / 1000) * 1000 : productData.price;

  const changeSelectOriginal = (prev) => {
    const optionItem = prev.find((item) => item.id === productData.id && item.optionName === "original");
    if (optionItem) {
      optionItem.amount = amount;
      optionItem.totalPrice = discountedPrice * amount;
    }
    return [...prev];
  };

  const removeSelectOriginal = (prev) => {
    return [...prev.filter((item) => !(item.id === productData.id && item.optionName === "original"))];
  };

  useEffect(() => {
    setSelectInfo(changeSelectOriginal);
  }, [amount]);

  useEffect(() => {
    setSelectInfo((prev) => [
      ...prev,
      {
        id: productData.id,
        productName: productData.productName,
        cost: productData.price,
        price: discountedPrice,
        shippingFee: productData.shippingFee,
        discountRate: productData.discountRate,
        thumbnailImg: productData.thumbnailImg,
        totalPrice: discountedPrice * amount,
        optionName: "original",
        couponData: [],
        optionList: [],
        amount: 1,
      },
    ]);
  }, []);

  const onChangeHandler = (event) => {
    setSelectInfo(removeSelectOriginal); //오리지널 삭제

    const option = productData.option.find((item) => item.optionName === event.target.value); //옵션리스트에서 벨류와 같은 옵션 객체 찾기

    if (option) {
      // 옵션이 있다면
      const inSelect = selectInfo.find((item) => item.optionName === event.target.value); // 셀렉트인포에서 벨류와 같은 객체 찾기

      if (!inSelect) {
        // 셀렉트인포에 객체가 있다면

        setSelectInfo((prev) => {
          // 셀렉트인포에 객체 추가
          return [
            ...prev,
            {
              id: productData.id,
              productName: productData.productName,
              cost: productData.price + option.additionalFee,
              price: discountedPrice + option.additionalFee,
              shippingFee: productData.shippingFee,
              discountRate: productData.discountRate,
              thumbnailImg: productData.thumbnailImg,
              totalPrice: discountedPrice + option.additionalFee,
              optionName: option.optionName,
              additionalFee: option.additionalFee,
              couponData: [],
              optionList: [],
              amount: 1,
            },
          ];
        });
      }
    }
  };

  const ToggleCartBtn = () => {
    const prev = JSON.parse(localStorage.getItem("cartData"));
    if (!toggle) {
      prev.forEach((prevItem) => {
        selectInfo.forEach((selectItem) => {
          if (prevItem.id === selectItem.id) {
            prevItem.amount += selectItem.amount;
            prevItem.totalPrice += selectItem.totalPrice;
          }
        });
      });
      const filtedSelected = selectInfo.filter((selectItem) => !prev.find((prevItem) => prevItem.id === selectItem.id));

      localStorage.setItem("cartData", JSON.stringify([...prev, ...filtedSelected]));
    }
    setToggle((prev) => !prev);
  };

  const handleBuyBtn = () => {
    const prev = JSON.parse(localStorage.getItem("cartData"));
    prev.forEach((prevItem) => {
      selectInfo.forEach((selectItem) => {
        if (prevItem.id === selectItem.id) {
          prevItem.amount += selectItem.amount;
          prevItem.totalPrice += selectItem.totalPrice;
        }
      });
    });
    const filtedSelected = selectInfo.filter((selectItem) => !prev.find((prevItem) => prevItem.id === selectItem.id));

    localStorage.setItem("cartData", JSON.stringify([...prev, ...filtedSelected]));
    navigate("/cartpage");
  };
  return (
    <PurchaseContext.Provider value={value}>
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
                {pickOptions && pickOptions.map((option, index) => <Option key={index} option={option} productData={productData} />)}
              </>
            ) : (
              <ChangeAmountBtn amount={amount} setAmount={setAmount} />
            )}
            <Hr />
            <TotalProductPrice>
              <PriceLabel>총 상품 금액</PriceLabel>
              <TotalAmount>총 수량 {totalAmount === 0 ? 1 : totalAmount}개</TotalAmount>
              <FinalPrice>{(totalPrice + productData.shippingFee).toLocaleString()}</FinalPrice>
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
    </PurchaseContext.Provider>
  );
};

export default PurchaseInfo;
