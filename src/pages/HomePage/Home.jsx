import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import styled from "styled-components";
import shoppingCartIcon from "../../assets/icon-shopping-cart-white.svg";

const Container = styled.main`
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 380px);
  gap: 60px;
  margin: 160px 0px;
`;

const ShoppingCart = styled(Link)`
  position: absolute;
  right: -140px;
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
const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 100px;
  font-size: 32px;
  text-align: center;
`;

const Home = ({ productProps: { isProductLoading, productData, isCouponLoading, couponData } }) => {
  return (
    <Container>
      <Section>
        {isProductLoading && isCouponLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          productData?.map((product) => {
            const coupon = couponData.filter((coupon) => coupon.productid === product.id);
            return <Card productData={product} key={product.id} couponData={coupon} />;
          })
        )}
        <ShoppingCart to="cartpage">
          <img src={shoppingCartIcon} alt="쇼핑카트아이콘" />
        </ShoppingCart>
      </Section>
    </Container>
  );
};

export default Home;
