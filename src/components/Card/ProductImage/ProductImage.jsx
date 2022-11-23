import styled from "styled-components";

const Container = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.isSold ? "rgba(0, 0, 0, 0.3)" : "transparent")};
    border-radius: 10px;
  }
`;
const Image = styled.img`
  width: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;
const Soldout = styled.div`
  position: absolute;
  width: 300px;
  height: 40px;
  background: #333333;
  border-radius: 5px;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%);
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #f2f2f2;
  padding: 11px 0px;
  text-align: center;
`;
const ProductImage = ({ ProductThumbnail, isSold }) => {
  return (
    <Container isSold={isSold}>
      <Image src={`https://test.api.weniv.co.kr/${ProductThumbnail}`} alt="프로덕트이미지" />
      {isSold ? <Soldout>SOLDOUT</Soldout> : null}
    </Container>
  );
};

export default ProductImage;
