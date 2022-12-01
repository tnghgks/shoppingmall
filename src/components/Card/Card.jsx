import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductImage from "./ProductImage/ProductImage";
import ProductName from "./ProductName/ProductName";
import ProductPrice from "./ProductPrice/ProductPrice";
import voidHeart from "../../assets/icon-heart.svg";
import heart from "../../assets/icon-heart-on.svg";
import { useState } from "react";

const Container = styled.article`
  width: 380px;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 22px;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Like = styled.div`
  margin-top: 23px;
  margin-right: 2px;
  width: 18px;
  height: 16px;
  background-image: url(${(props) => (props.isLike ? heart : voidHeart)});
  background-size: 18px 16px;
  cursor: pointer;
  background-repeat: no-repeat;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

const Card = ({ productData, couponData }) => {
  const [isLike, setIsLike] = useState(false);

  const handleLikeBtn = () => {
    setIsLike((prev) => !prev);
  };

  return (
    <Container>
      <Link to={`/productDetail/${productData.id}`}>
        <ProductImage ProductThumbnail={productData.thumbnailImg} isSold={!productData.stockCount} />
      </Link>
      <InfoContainer>
        <ProductInfo>
          <Link to={`/productDetail/${productData.id}`}>
            <ProductName productName={productData.productName} />
            <PriceContainer>
              <ProductPrice productPrice={productData.price} discountRate={productData.discountRate} />
            </PriceContainer>
          </Link>
        </ProductInfo>
        <Like isLike={isLike} onClick={handleLikeBtn} />
      </InfoContainer>
    </Container>
  );
};

export default Card;
