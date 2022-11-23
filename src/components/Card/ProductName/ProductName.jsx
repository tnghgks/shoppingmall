import styled from "styled-components";

const Name = styled.h2`
  display: block;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 338px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ProductName = ({ productName }) => {
  return <Name>{productName}</Name>;
};

export default ProductName;
