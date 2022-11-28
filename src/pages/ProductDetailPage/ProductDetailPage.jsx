import styled from "styled-components";
import PurchaseInfo from "./PurchaseInfo/PurchaseInfo";

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../api/api";
import Loader from "../../components/Loader/Loader";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 42px;
`;
const ProductInfo = styled.section`
  display: flex;
  justify-content: center;
`;
const ProductImage = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductDetailInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
  width: 870px;
`;
const ProductInfoTitle = styled.span`
  margin-top: 40px;
  font-size: 16px;
  line-height: 20px;
`;

const ProductAmount = styled.span`
  margin-top: 16px;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  border-top: 2px solid #e0e0e0;
  border-bottom: 2px solid #e0e0e0;
  display: flex;
  div {
    padding: 13px 12px;
    width: 285px;
  }
  div:nth-child(odd) {
    width: 150px;
    background: #f2f2f2;
  }
`;

const ProductDetailSection = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const ProductDetailPage = () => {
  const { id } = useParams();
  const { isLoading, data: productData } = useQuery(`ProductDetail${id}`, () => getProductDetail(id));
  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <ProductInfo>
        <ProductImage>
          <img src={`https://test.api.weniv.co.kr/${productData.thumbnailImg}`} alt={`${productData.productName} 이미지`} />
        </ProductImage>
        <PurchaseInfo productData={productData} />
      </ProductInfo>
      <ProductDetailInfo>
        <ProductInfoTitle>상품 정보</ProductInfoTitle>
        <ProductAmount>
          <div>상품번호</div>
          <div>{id}</div>
          <div>재고 수량</div>
          <div>{productData.stockCount} 개</div>
        </ProductAmount>
        <ProductDetailSection>
          {productData.detailInfoImage ? (
            productData.detailInfoImage.map((imageUrl, index) => <img key={index} src={`https://test.api.weniv.co.kr/${imageUrl}`} alt={`Detail${index}`} />)
          ) : (
            <div>보여줄 이미지가 없습니다.</div>
          )}
        </ProductDetailSection>
      </ProductDetailInfo>
    </Container>
  );
};

export default ProductDetailPage;
