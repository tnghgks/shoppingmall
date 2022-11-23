import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import shoppingCartIcon from "../../assets/icon-shopping-cart-white.svg";

const Container = styled.main`
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 380px);
  gap: 60px;
  padding: 160px 0px;
`;

const ShoppingCart = styled.div`
  position: relative;
  margin-top: 160px;
  margin-left: 60px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #6327fe;
  img {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-55%, -45%);
  }
`;

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [couponData, setCouponData] = useState([]);

  const getProductData = () => {
    axios
      .get("http://35.76.53.28:8080/mall")
      .then((res) => setProductData(res.data))
      .catch((error) => console.log(error));
  };

  const getCouponData = () => {
    axios
      .get("http://35.76.53.28:8080/coupon")
      .then((res) => setCouponData(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProductData();
    getCouponData();
  }, []);

  return (
    <Container>
      <Section>
        {productData.map((product) => {
          const coupon = couponData.filter((coupon) => coupon.productid === product.id);

          if (!!coupon.length) {
            return <Card productData={product} key={product.id} couponData={coupon} />;
          } else {
            return <Card productData={product} key={product.id} />;
          }
        })}
      </Section>
      <ShoppingCart>
        <img src={shoppingCartIcon} alt="쇼핑카트아이콘" />
      </ShoppingCart>
    </Container>
  );
};

export default Home;
